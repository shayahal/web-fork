import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionLectures = ({ lectures, title = "Subjects I'm talking about" }) => {
  if (!lectures.length) return null;

  return (
    <Section title={title}>
      {lectures.map((lecture, index) => (
        <div 
          key={lecture.name}
          className="animate-fade-in-up stagger-1"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={lecture.name}
            description={lecture.description}
            link={lecture.link}
          />
        </div>
      ))}
    </Section>
  );
};

export default SectionLectures;