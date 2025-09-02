import React from 'react';
import { graphql } from 'gatsby';

import Section from '../section';
import fishingImage from '../../images/fishing.jpg';

const SectionAbout = ({ aboutContent }) => {
  return (
    <Section title="About">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 md:w-64">
          <img 
            src={fishingImage} 
            alt="Fishing in a peaceful setting" 
            className="rounded-lg shadow-lg w-full h-auto"
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
