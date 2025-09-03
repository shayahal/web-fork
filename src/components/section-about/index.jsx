import React from 'react';

import Section from '../section';

const SectionAbout = ({ aboutContent }) => {
  return (
    <Section title="About">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: aboutContent }}
          />
        </div>
        <div className="flex-shrink-0 relative group">
          <img 
            src="/fishing.jpg" 
            alt="Fishing Adventure" 
            className="rounded-lg shadow-lg w-56 h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
            just a girl fishing pirana in the amazon
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionAbout;
