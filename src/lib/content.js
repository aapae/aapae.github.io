import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

function renderMarkdown(content) {
  const cleaned = content
    .replace(/<!--[\s\S]*?-->/g, '')           // strip HTML comments
    .replace(/\]\(([^)]+)\)/g, (_, url) =>    // encode spaces in link URLs
      `](${url.replace(/ /g, '%20')})`);
  return marked(cleaned);
}

const CONTENT_DIR = join(process.cwd(), 'src/content');

export function getSlug(filename) {
  return filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

// Extract YYYY-MM-DD from filename prefix for reliable sorting
function getFilenameDate(filename) {
  const m = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : '0000-00-00';
}

export function getAllPosts(category) {
  const dir = join(CONTENT_DIR, category);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = readFileSync(join(dir, file), 'utf-8');
      const { data } = matter(raw);
      return { slug: getSlug(file), _fileDate: getFilenameDate(file), ...data };
    })
    .sort((a, b) => b._fileDate.localeCompare(a._fileDate));
}

export function getPost(category, slug) {
  const dir = join(CONTENT_DIR, category);
  if (!existsSync(dir)) return null;
  const file = readdirSync(dir).find(f => getSlug(f) === slug);
  if (!file) return null;
  const raw = readFileSync(join(dir, file), 'utf-8');
  const { data: metadata, content } = matter(raw);
  return { metadata, html: renderMarkdown(content) };
}

export function getPage(slug) {
  const file = join(CONTENT_DIR, 'pages', `${slug}.md`);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf-8');
  const { data: metadata, content } = matter(raw);
  return { metadata, html: renderMarkdown(content) };
}

export function getAllPageSlugs() {
  const dir = join(CONTENT_DIR, 'pages');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getPeople() {
  const dir = join(CONTENT_DIR, 'people');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map(file => {
      const raw = readFileSync(join(dir, file), 'utf-8');
      const { data: metadata, content } = matter(raw);
      return { ...metadata, bio: marked(content) };
    });
}
