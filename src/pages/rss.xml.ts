import { getCollection } from 'astro:content';
import { isPostId, postPath, sortPosts } from '../utils/posts';

export async function GET({ site }: { site: URL }) {
  const posts = sortPosts((await getCollection('posts')).filter((post) => isPostId(post.id) && !post.id.startsWith('en/') && !post.data.draft));
  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${new URL(postPath(post.id), site)}</link>
      <guid>${new URL(postPath(post.id), site)}</guid>
      <pubDate>${(post.data.published ?? new Date()).toUTCString()}</pubDate>
      <description><![CDATA[${post.data.description ?? ''}]]></description>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel><title>Pārāvihāra</title><link>${site}</link><description>文章、经文与开示</description>${items}
  </channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
