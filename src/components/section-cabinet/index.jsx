// src/components/section-cabinet/index.jsx
import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCabinet = ({ cabinet }) => {
  return (
    <Section title="My Cabinet">
      {cabinet.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {cabinet.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/cabinet">
          View all cabinet items &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionCabinet;