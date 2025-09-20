
import React from 'react';
import Section from '@/components/Section';

const ExperienceSection = () => {
  return (
    <Section id="experience" title="💼 experience">
      <ol className="relative border-l border-muted-foreground/20 pl-6 space-y-8">
        <li className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
          <div className="group">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium mb-1">founder</h3>
            </div>
            <p className="text-muted-foreground">makesomethingwonderful.co · present</p>
          </div>
        </li>

        <li className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
          <div className="group">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium mb-1">founder</h3>
            </div>
            <p className="text-muted-foreground">chatrasahaya.org · 2020 – present</p>
          </div>
        </li>

        <li className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium mb-1">associate product manager</h3>
            </div>
            <p className="text-muted-foreground">spawn · july 2025 – present</p>
          </div>
        </li>

        <li className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-red-500 animate-status-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium mb-1">project manager</h3>
            </div>
            <p className="text-muted-foreground">betteryou · jan 2024 – july 2025</p>
          </div>
        </li>

        <li className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-red-500 animate-status-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium mb-1">associate technical engineer</h3>
            </div>
            <p className="text-muted-foreground">ibm · may 2020 - dec 2021 · 1 yr 8 mos</p>
          </div>
        </li>
      </ol>
    </Section>
  );
};

export default ExperienceSection;
