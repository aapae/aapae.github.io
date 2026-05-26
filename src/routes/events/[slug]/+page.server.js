import { getAllPosts, getPost } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = () => getAllPosts('events').map(p => ({ slug: p.slug }));

export function load({ params }) {
  const post = getPost('events', params.slug);
  if (!post) throw error(404, 'Not found');
  return post;
}
