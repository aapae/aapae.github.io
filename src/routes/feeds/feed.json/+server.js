import { getAllPosts, getPost, getAllPageSlugs, getPage } from '$lib/content.js';
import { json } from '@sveltejs/kit';

export const prerender = true;

export function GET() {
  const categories = ['events', 'australian-ethics', 'book-reviews', 'reports'];

  const postEntries = categories.flatMap(cat =>
    getAllPosts(cat).map(post => {
      const full = getPost(cat, post.slug);
      const text = full?.html?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() ?? '';
      return {
        title:   post.title ?? '',
        link:    `/${cat}/${post.slug}`,
        date:    post._fileDate ?? '',
        excerpt: text.slice(0, 200),
        content: text
      };
    })
  );

  const pageEntries = getAllPageSlugs().map(slug => {
    const page = getPage(slug);
    const text = page?.html?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() ?? '';
    return {
      title:   page?.metadata?.title ?? slug,
      link:    `/${slug}`,
      date:    '',
      excerpt: text.slice(0, 200),
      content: text
    };
  });

  return json([...postEntries, ...pageEntries]);
}
