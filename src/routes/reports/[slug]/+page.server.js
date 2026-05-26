import { getAllPosts, getPost } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = () => getAllPosts('reports').map(p => ({ slug: p.slug }));

export function load({ params }) {
  const post = getPost('reports', params.slug);
  if (!post) throw error(404, 'Not found');
  return post;
}
