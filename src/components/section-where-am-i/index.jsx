import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const LABELS = {
  en: { title: 'Where am I', upcoming: 'Upcoming', past: 'Past' },
  he: { title: 'איפה אני', upcoming: 'בקרוב', past: 'היה' },
};

// ponytail: upcoming/past split is computed at build + hydration time; a rebuild re-sorts stale events
const SectionWhereAmI = ({ events, language = 'en' }) => {
  if (!events || !events.length) return null;
  const t = LABELS[language];
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
  const fmt = (d) =>
    new Date(d).toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  const group = (label, items) =>
    items.length > 0 && (
      <div className="mb-4">
        <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          {label}
        </h4>
        {items.map((e) => (
          <SummaryItem
            key={`${e.date}-${e.name}`}
            name={e.name}
            description={[fmt(e.date), e.place].filter(Boolean).join(' · ')}
            link={e.link}
          />
        ))}
      </div>
    );

  return (
    <Section title={t.title}>
      {group(t.upcoming, upcoming)}
      {group(t.past, past)}
    </Section>
  );
};

export default SectionWhereAmI;
