from __future__ import annotations

import argparse
import re
from pathlib import Path

from docx import Document


BLIP_TAG = "{http://schemas.openxmlformats.org/drawingml/2006/main}blip"
EMBED_ATTR = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"
DATE_RE = re.compile(r"^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(?:st|nd|rd|th),\s+\d{4}$")


CHAPTERS = [
    ("01-artificial-intelligence-and-the-hand-of-god", "Artificial Intelligence and the Hand of God", 36, 91),
    ("02-the-magical-vision", "The Magical Vision", 91, 243),
    ("03-chaos-and-life", "Chaos and Life", 243, 343),
    ("04-fractals-in-nature", "Fractals in Nature", 343, 417),
    (
        "05-cybernetics-seven-abodes-and-the-ancient-indian-world-model",
        "Cybernetics, the Seven Abodes of Consciousness and the Ancient Indian World Model",
        417,
        451,
    ),
    (
        "06-cybernetics-dependent-origination-and-zen",
        "Cybernetics, Dependent Origination and Zen",
        451,
        488,
    ),
    (
        "07-dependent-origination-the-third-crisis-of-mathematics-and-parinibbana",
        "Dependent Origination, the Third Crisis of Mathematics and Parinibbāna",
        488,
        623,
    ),
    ("appendix", "Appendix", 623, None),
]


def normalize(text: str) -> str:
    return re.sub(r"[ \t]+", " ", text.replace("\xa0", " ")).strip()


def is_short_bold(paragraph) -> bool:
    text = normalize(paragraph.text)
    if not text or len(text) > 100:
        return False
    runs = [run for run in paragraph.runs if run.text.strip()]
    return bool(runs) and all(run.bold for run in runs)


def image_names(paragraph, document, image_map: dict[str, str]) -> list[str]:
    names = []
    for blip in paragraph._p.iter(BLIP_TAG):
        rel_id = blip.get(EMBED_ATTR)
        part = document.part.related_parts[rel_id]
        source_name = Path(str(part.partname)).name
        target_name = image_map[str(part.partname)]
        if target_name not in names:
            names.append(target_name)
    return names


def next_caption(paragraphs, index: int) -> str:
    for paragraph in paragraphs[index + 1 : index + 4]:
        text = normalize(paragraph.text)
        if text.startswith("Figure "):
            return text
    return "Illustration from the original manuscript"


def paragraph_lines(paragraphs, index: int, document, image_map: dict[str, str]) -> list[str]:
    paragraph = paragraphs[index]
    lines: list[str] = []
    images = image_names(paragraph, document, image_map)
    if images:
        alt = next_caption(paragraphs, index)
        for name in images:
            lines.append(f"![{alt}](/images/heading-west-reaching-east/{name})")
        lines.append("")

    text = normalize(paragraph.text)
    if not text:
        return lines
    if set(text) <= {"—", "-"} and len(text) > 12:
        lines.extend(["---", ""])
        return lines
    if paragraph.style.name == "Heading 2":
        lines.extend([f"## {text}", ""])
        return lines
    if paragraph.style.name == "Heading 1":
        lines.extend([f"## {text}", ""])
        return lines
    if is_short_bold(paragraph):
        lines.extend([f"## {text}", ""])
        return lines
    if paragraph.style.name == "List Paragraph":
        lines.extend([f"- {text}", ""])
        return lines
    if DATE_RE.match(text):
        lines.extend([f"*{text}*", ""])
        return lines
    if text.startswith("Figure "):
        lines.extend([f"*{text}*", ""])
        return lines
    lines.extend([text, ""])
    return lines


def render_range(paragraphs, start: int, end: int, document, image_map: dict[str, str]) -> str:
    lines: list[str] = []
    for index in range(start + 1, end):
        lines.extend(paragraph_lines(paragraphs, index, document, image_map))
    return "\n".join(lines).strip() + "\n"


def extract_images(document, output_dir: Path) -> dict[str, str]:
    output_dir.mkdir(parents=True, exist_ok=True)
    image_map: dict[str, str] = {}
    for part in document.part.related_parts.values():
        part_name = str(part.partname)
        if not part_name.startswith("/word/media/"):
            continue
        source_name = Path(part_name).name
        target_name = source_name.lower()
        image_map[part_name] = target_name
        target = output_dir / target_name
        if not target.exists():
            target.write_bytes(part.blob)
    return image_map


def write_index(paragraphs, document, image_map, output_path: Path) -> None:
    opening = render_range(paragraphs, 21, 36, document, image_map)
    toc = [
        "## Contents",
        "",
        "1. [Artificial Intelligence and the Hand of God](./01-artificial-intelligence-and-the-hand-of-god/)",
        "2. [The Magical Vision](./02-the-magical-vision/)",
        "3. [Chaos and Life](./03-chaos-and-life/)",
        "4. [Fractals in Nature](./04-fractals-in-nature/)",
        "5. [Cybernetics, the Seven Abodes of Consciousness and the Ancient Indian World Model](./05-cybernetics-seven-abodes-and-the-ancient-indian-world-model/)",
        "6. [Cybernetics, Dependent Origination and Zen](./06-cybernetics-dependent-origination-and-zen/)",
        "7. [Dependent Origination, the Third Crisis of Mathematics and Parinibbāna](./07-dependent-origination-the-third-crisis-of-mathematics-and-parinibbana/)",
        "8. [Appendix](./appendix/)",
        "",
        "The Chinese material remains available through the [中文专题入口](/talks/dong-xi-zhi/). The English manuscript follows the structure of the complete book supplied for this edition.",
    ]
    frontmatter = """---
title: Heading West Reaching East
description: A complete English book moving between cybernetics, cognition, dependent origination, and Buddhist liberation.
sidebar:
  label: A Few Words and contents
---

# Heading West Reaching East

*An Encounter of Buddhism in Cybernetics*

"""
    output_path.write_text(frontmatter + "## A Few Words\n\n" + opening + "\n" + "\n".join(toc) + "\n", encoding="utf-8")


def write_chapters(paragraphs, document, image_map, output_dir: Path) -> None:
    for slug, title, start, end in CHAPTERS:
        actual_end = end if end is not None else len(paragraphs)
        body = render_range(paragraphs, start, actual_end, document, image_map)
        description = f"{title}, from the complete English manuscript of Heading West Reaching East."
        frontmatter = f"""---
title: {title}
description: {description}
sidebar:
  label: {title}
---

"""
        output_dir.joinpath(f"{slug}.md").write_text(frontmatter + body, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("repo", type=Path)
    args = parser.parse_args()

    document = Document(args.source)
    paragraphs = document.paragraphs
    output_dir = args.repo / "src/content/docs/en/talks/dong-xi-zhi"
    image_dir = args.repo / "public/images/heading-west-reaching-east"
    output_dir.mkdir(parents=True, exist_ok=True)
    image_map = extract_images(document, image_dir)
    write_index(paragraphs, document, image_map, output_dir / "index.md")
    write_chapters(paragraphs, document, image_map, output_dir)
    print(f"wrote {len(CHAPTERS) + 1} markdown pages and {len(set(image_map.values()))} images")


if __name__ == "__main__":
    main()
