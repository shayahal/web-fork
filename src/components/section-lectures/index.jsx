import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const EMAIL_ADDRESS = 'shay.yahal@gmail.com';

// Lectures that should have email invite icon
const LECTURES_WITH_EMAIL = [
  'Workplace Coalitions',
  'How Not to Manage Your Time',
  'קואליציות במקום העבודה',
  'איך לא לנהל את הזמן שלכם'
];

const EmailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SectionLectures = ({ lectures, title = "Subjects I'm talking about" }) => {
  if (!lectures.length) return null;

  return (
    <Section title={title}>
      {lectures.map((lecture, index) => {
        const hasEmailInvite = LECTURES_WITH_EMAIL.includes(lecture.name);
        
        return (
          <div
            key={lecture.name}
            className="animate-fade-in"
            style={{animationDelay: `${(index + 1) * 0.05}s`}}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <SummaryItem
                  name={lecture.name}
                  description={lecture.description}
                  link={lecture.link}
                />
              </div>
              {hasEmailInvite && (
                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=Invitation to talk: ${encodeURIComponent(lecture.name)}`}
                  className="flex items-center gap-2 text-sage hover:text-terracotta transition-colors font-huninn text-sm whitespace-nowrap ml-4"
                  aria-label="Invite me to talk about it!"
                >
                  <EmailIcon />
                  <span>invite me to talk about it!</span>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export default SectionLectures;