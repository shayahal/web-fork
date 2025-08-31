import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map((post, index) => (
        <div 
          key={post.node.fields.slug}
          className="animate-fade-in-up"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
        </div>
      ))}
    </Section>
  );
};

export default BlogPosts;
