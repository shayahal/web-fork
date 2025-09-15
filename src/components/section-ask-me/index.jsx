import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAskMe = ({ subjects, title = "Subjects you should ask me to talk about" }) => {
  if (!subjects.length) return null;

  return (
    <Section title={title}>
      {subjects.map((subject, index) => (
        <div 
          key={subject.name}
          className="animate-fade-in-up stagger-1"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={subject.name}
            description={subject.description}
            link={subject.link}
          />
        </div>
      ))}
    </Section>
  );
};

export default SectionAskMe;