import { getPage, getPeople } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function load() {
  const page = getPage('about');
  if (!page) throw error(404, 'Page not found');
  return { ...page, people: getPeople() };
}
