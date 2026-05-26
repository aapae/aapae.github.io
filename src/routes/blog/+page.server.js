import { getAllPosts } from '$lib/content.js';

export const prerender = true;

export function load() {
  const all = [
    ...getAllPosts('events'),
    ...getAllPosts('australian-ethics'),
    ...getAllPosts('book-reviews'),
    ...getAllPosts('reports')
  ].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  return { posts: all };
}
