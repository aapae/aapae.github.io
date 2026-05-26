import { getAllPosts } from '$lib/content.js';

export const prerender = true;

export function load() {
  return {
    articles: getAllPosts('australian-ethics'),
    reviews: getAllPosts('book-reviews')
  };
}
