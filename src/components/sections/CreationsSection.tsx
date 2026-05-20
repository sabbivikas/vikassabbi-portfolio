
import React from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

const CreationsSection = () => {
  return (
    <Section id="work" title="🛠 creations">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="🦕 dino initiative"
          description="a gentle, accessible platform offering free mental health resources and crisis support for anyone who needs a moment of care — no barriers, no judgment. available on ios."
          year=""
          link="https://apps.apple.com/us/app/dino-initiative/id6763940737"
          linkText="download on app store"
          status="green"
        />
        <ProjectCard
          title="🌟 aura"
          description="an emotional companion app that provides personalized support and guidance for mental wellness. available exclusively on ios."
          year=""
          link="https://apps.apple.com/us/app/aura-emotional-companion/id6752574726"
          linkText="download on app store"
          status="green"
        />
        <ProjectCard
          title="🎤 hireai"
          description="a real-time ai interviewer that conducts live technical and behavioral interviews, providing instant feedback and assessment to streamline your hiring process."
          year=""
          link="https://ai-hr-real-time-interviewer-78048118432.us-east1.run.app"
          linkText="try hireai"
          status="green"
        />
        <ProjectCard
          title="🔬 org research"
          description="an intelligent research assistant that helps you explore and understand organizations deeply — from company culture to market positioning."
          year=""
          link="https://orgresearch.lovable.app"
          linkText="visit org research"
          status="green"
        />
        <ProjectCard
          title="🌍 vihari.earth"
          description="a quiet, reflective story platform where one frame sparks a thousand imaginations. each scene in vihari's journey invites you to pause, feel, and write your own meaning. no rules, no right answers, just you, your thoughts, and a story waiting to be discovered within."
          year=""
          link="https://vihari.earth"
          linkText="visit vihari.earth"
          status="green"
        />
        <ProjectCard
          title="👵 ammamma.online"
          description="a tribute to the wisdom of grandmothers, preserving their values through storytelling."
          year=""
          link="https://ammamma.online"
          linkText="visit ammamma"
          status="green"
        />
        <ProjectCard
          title="💸 tip calculator"
          description="built while heading to a dinner where friends struggled to split the tip. i built it that night and sold it to a restaurant the next day. didn't even realize it was the first of its kind in the world.📷 used in real restaurants with qr code access."
          year=""
          link="https://tip-calculator.replit.app/"
          linkText="try tip calculator"
          status="green"
        />
      </div>
    </Section>
  );
};

export default CreationsSection;
