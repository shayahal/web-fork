import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionRecommendations = ({ recommendations }) => {
  if (!recommendations.length) return null;

  return (
    <Section title="Recommendations">
      {recommendations.map((item, index) => (
        <div 
          key={item.name}
          className="animate-fade-in-up stagger-1"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={item.name}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}
    </Section>
  );
};

export default SectionRecommendations;
