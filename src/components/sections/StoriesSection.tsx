
import React from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

const StoriesSection = () => {
  return (
    <Section id="stories" title="📖 stories">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="the tales of nani: beyond the screens"
          description="a modern grandma helps her screen-addicted grandkids reconnect with real life and love."
          year=""
          link="https://thetalesofnani.com"
          linkText="visit the tales of nani"
          status="green"
        />
        <ProjectCard
          title="twinkle stories"
          description="a collection of bedtime stories written to bring peace and imagination back into children's nights."
          year=""
          link="https://www.amazon.in/Twinkle-Stories-1-Vikas-Sabbi/dp/935565085X"
          linkText="twinkle stories on amazon"
          status="green"
        />
      </div>
    </Section>
  );
};

export default StoriesSection;
