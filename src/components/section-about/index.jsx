import React from 'react';

import Section from '../section';

const SectionAbout = ({ aboutContent }) => {
  return (
    <Section title="About">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <img 
            src="/fishing.jpg" 
            alt="Fishing Adventure" 
            className="rounded-lg shadow-lg w-48 h-auto"
          />
        </div>
        <div className="flex-1">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: aboutContent }}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionAbout;
