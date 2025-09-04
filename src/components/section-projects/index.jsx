import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project, index) => (
        <div 
          key={project.name}
          className="animate-fade-in-up stagger-1"
          style={{animationDelay: `${(index + 1) * 0.1}s`}}
        >
          <SummaryItem
            name={project.name}
            description={project.description}
            link={project.link}
          />
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
