import fs from 'fs';
import path from 'path';

const notesDirectory = path.join(process.cwd(), 'src/content/notes');

export interface NoteData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}

export function getSortedNotesData(): NoteData[] {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Extract title from the first heading # Title
      const titleMatch = fileContents.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : id;

      // Extract excerpt (first paragraph that is not a heading)
      const paragraphs = fileContents.split('\n\n').filter(p => !p.startsWith('#') && p.trim().length > 0);
      const excerpt = paragraphs.length > 0 ? paragraphs[0].replace(/\n/g, '') : '';
      
      // Limit excerpt length
      const truncatedExcerpt = excerpt.length > 80 ? excerpt.slice(0, 80) + '...' : excerpt;

      return {
        id,
        title,
        excerpt: truncatedExcerpt,
        content: fileContents,
      };
    });

  return allNotesData;
}

export function getNoteData(id: string): NoteData | null {
  const fullPath = path.join(notesDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const titleMatch = fileContents.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : id;

  // Remove the # Title from the content so we don't render it twice
  const contentWithoutTitle = fileContents.replace(/^#\s+(.+)$/m, '');

  return {
    id,
    title,
    excerpt: '',
    content: contentWithoutTitle,
  };
}
