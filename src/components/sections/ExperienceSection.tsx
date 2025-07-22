
import React from 'react';
import Section from '@/components/Section';

const ExperienceSection = () => {
  return (
    <Section id="experience" title="💼 experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium mb-1">founder</h3>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-status-pulse"></span>
          </div>
          <p className="text-muted-foreground mb-2">chatrasahaya.org · 2020 – present</p>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium mb-1">associate product manager</h3>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-status-pulse"></span>
          </div>
          <p className="text-muted-foreground mb-2">spawn · july 2025 – present</p>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium mb-1">project manager</h3>
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-status-pulse"></span>
          </div>
          <p className="text-muted-foreground mb-2">betteryou · jan 2024 – july 2025</p>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium mb-1">associate technical engineer</h3>
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-status-pulse"></span>
          </div>
          <p className="text-muted-foreground mb-2">ibm · may 2020 - dec 2021 · 1 yr 8 mos</p>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
