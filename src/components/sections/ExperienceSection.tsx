
import React from 'react';
import Section from '@/components/Section';

type Role = {
  title: string;
  company: string;
  period: string;
  status: 'green' | 'red';
};

const roles: Role[] = [
  { title: 'product engineer', company: 'woz (yc w25)', period: 'feb 2025 – present', status: 'green' },
  { title: 'founder in residence', company: 'founders, inc', period: 'april 2026 – present', status: 'green' },
  { title: 'founder', company: 'chatrasahaya.org', period: '2020 – present', status: 'green' },
  { title: 'app creator', company: 'wabi', period: 'oct 2025 – dec 2025', status: 'red' },
  { title: 'founder in residence', company: 'the residency sf', period: 'oct 2025 – nov 2025', status: 'red' },
  { title: 'associate product manager', company: 'spawn', period: 'july 2025 – sept 2025', status: 'red' },
  { title: 'product ops', company: 'betteryou', period: 'jan 2024 – july 2025', status: 'red' },
  { title: 'associate technical engineer', company: 'ibm', period: 'may 2020 – dec 2021 · 1 yr 8 mos', status: 'red' },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" title="💼 experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((r, i) => (
          <div
            key={i}
            className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-2 mb-2">
              <span
                className={`mt-2 w-2 h-2 rounded-full animate-status-pulse ${
                  r.status === 'green' ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
              <h3 className="text-xl font-medium leading-tight">{r.title}</h3>
            </div>
            <p className="text-muted-foreground">{r.company}</p>
            <p className="text-sm text-muted-foreground/80 mt-1">{r.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
