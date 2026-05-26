import { getAllPosts } from '$lib/content.js';

export const prerender = true;

export function load() {
  const all = [
    ...getAllPosts('events'),
    ...getAllPosts('australian-ethics'),
    ...getAllPosts('book-reviews'),
    ...getAllPosts('reports')
  ].sort((a, b) => b._fileDate.localeCompare(a._fileDate));
  return { posts: all };
}
