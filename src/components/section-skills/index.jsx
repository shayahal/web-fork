import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills">
      {skills.map((skill, index) => (
        <div 
          key={skill.name}
          className="animate-fade-in-up stagger-1"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={skill.name}
            description={skill.description}
          />
        </div>
      ))}
    </Section>
  );
};

export default SectionSkills;
