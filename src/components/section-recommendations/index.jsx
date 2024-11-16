import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionRecommendations = ({ recommendations }) => {
  if (!recommendations.length) return null;

  return (
    <Section title="Recommendations">
      {recommendations.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionRecommendations;
