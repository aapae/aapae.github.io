import { getPage, getAllPageSlugs } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = () => getAllPageSlugs().map(slug => ({ slug }));

export function load({ params }) {
  const page = getPage(params.slug);
  if (!page) throw error(404, 'Page not found');
  return page;
}
