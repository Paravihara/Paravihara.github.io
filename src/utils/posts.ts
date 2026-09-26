export function isPostId(id: string) {
  return id !== 'index' && id !== 'en' && !id.endsWith('/index') && !['concepts', 'sutras', 'talks', 'en/concepts', 'en/sutras', 'en/talks'].includes(id);
}

export function isEnglishPost(id: string) {
  return id.startsWith('en/');
}

export const headingWestReachingEastTags = {
  zh: '东辕西辙',
  en: 'heading-west-reaching-east',
} as const;

export function isHeadingWestPost(id: string) {
  return id.startsWith('heading-west-reaching-east/') || id.startsWith('en/heading-west-reaching-east/');
}

export function postTags(post: { id: string; data: { tags?: string[] } }) {
  const tags = [...(post.data.tags ?? [])];
  if (isHeadingWestPost(post.id)) {
    const seriesTag = post.id.startsWith('en/') ? headingWestReachingEastTags.en : headingWestReachingEastTags.zh;
    if (!tags.includes(seriesTag)) tags.unshift(seriesTag);
  }
  return tags;
}

export function postPath(id: string, english = false) {
  const cleanId = english ? id.replace(/^en\//, '') : id;
  return `${english ? '/en' : ''}/posts/${cleanId}/`;
}

export function readTime(text: string, english = false) {
  const units = english ? text.trim().split(/\s+/).filter(Boolean).length : text.replace(/\s/g, '').length;
  return Math.max(1, Math.ceil(units / (english ? 200 : 420)));
}

export function excerpt(text: string, length = 110) {
  const clean = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`\[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return clean.length > length ? `${clean.slice(0, length).trim()}…` : clean;
}

export function headingId(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function tableOfContents(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.match(/^(#{2,4})\s+(.+?)\s*#*$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({ depth: match[1].length, label: match[2], id: headingId(match[2]) }));
}

export function sortPosts<T extends { data: { pin?: boolean | number; published?: Date }; body?: string }>(posts: T[]) {
  return [...posts].sort((a, b) => {
    const pinScore = (value?: boolean | number) => typeof value === 'number' ? value : value ? 1 : 0;
    if (pinScore(a.data.pin) !== pinScore(b.data.pin)) return pinScore(b.data.pin) - pinScore(a.data.pin);
    return (b.data.published?.getTime() ?? 0) - (a.data.published?.getTime() ?? 0);
  });
}
