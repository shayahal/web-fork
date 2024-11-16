// src/pages/[slug].js
import { serialize } from 'next-mdx-remote/serialize';
import { getMarkdownFiles, getMarkdownContent } from '../utils/markdown';
import RTLMarkdownViewer from '../components/RTLMarkdownViewer';

export default function MarkdownPage({ content, metadata }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <RTLMarkdownViewer content={content} metadata={metadata} />
    </div>
  );
}

// Generate static paths for all markdown files
export async function getStaticPaths() {
  const posts = getMarkdownFiles('content/blog'); // Adjust path as needed
  
  const paths = posts.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

// Get content for each page
export async function getStaticProps({ params }) {
  const { content, metadata } = getMarkdownContent(`${params.slug}.md`, 'content/blog');
  
  // Serialize the content
  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
      metadata
    }
  };
}