import { getAllPosts } from '$lib/content.js';

export const prerender = true;

export function load() {
  return { posts: getAllPosts('reports') };
}
