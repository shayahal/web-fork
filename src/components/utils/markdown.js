// src/utils/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Get all markdown files from the posts directory
export function getMarkdownFiles(directory) {
  const files = fs.readdirSync(path.join(process.cwd(), directory));
  return files.filter(file => file.endsWith('.md'));
}

// Get markdown content and metadata
export function getMarkdownContent(filename, directory) {
  const filePath = path.join(process.cwd(), directory, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    content,
    metadata: {
      ...data,
      // You can specify direction in your markdown frontmatter
      direction: data.direction || 'auto'
    }
  };
}