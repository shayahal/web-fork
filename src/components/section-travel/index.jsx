import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionTravel = ({ posts }) => {
  // Filter posts that have "travel" in their tags
  const travelPosts = posts.filter(post => 
    post.node.frontmatter.tags && 
    post.node.frontmatter.tags.includes('travel')
  );

  if (travelPosts.length === 0) {
    return null;
  }

  return (
    <Section title="Travel Posts">
      {travelPosts.map((post) => (
        <SummaryItem
          key={post.node.fields?.slug || post.node.id}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields?.slug || '#'}
          internal
        />
      ))}
    </Section>
  );
};

export default SectionTravel; 