import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionTopPosts = ({ posts }) => {
  // Filter posts that have "top" in their tags
  const topPosts = posts.filter(post => 
    post.node.frontmatter.tags && 
    post.node.frontmatter.tags.includes('top')
  );

  if (topPosts.length === 0) {
    return null;
  }

  return (
    <Section title="Top Posts">
      {topPosts.map((post, index) => (
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
    </Section>
  );
};

export default SectionTopPosts; 