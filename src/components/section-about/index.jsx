import React from 'react';

import Section from '../section';

const SectionAbout = ({ aboutContent }) => {
  return (
    <Section title="About">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: aboutContent }}
      />
    </Section>
  );
};

export default SectionAbout;
