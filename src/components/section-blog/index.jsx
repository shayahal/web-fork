import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionBlog = ({ posts }) => {
  // Filter to only include posts that have a slug (blog posts)
  const blogPosts = posts.filter(post => post.node.fields?.slug);
  
  return (
    <Section title="Latest Posts">
      {blogPosts.map((post, index) => (
        <div 
          key={post.node.fields?.slug || post.node.id}
          className="animate-fade-in-up"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields?.slug || '#'}
            internal
          />
        </div>
      ))}
      {blogPosts.length >= 5 && (
        <div className="animate-fade-in-up" style={{animationDelay: `${(blogPosts.length + 1) * 0.1}s`}}>
          <Link className="text-gray-500 text-sm hover:text-black font-heebo animated-link" to="/blog">
            View all posts &rarr;
          </Link>
        </div>
      )}
    </Section>
  );
};

export default SectionBlog;
