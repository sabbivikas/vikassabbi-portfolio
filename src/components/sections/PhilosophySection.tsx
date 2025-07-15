
import React from 'react';
import Section from '@/components/Section';
import AnimatedPhilosophy from '@/components/AnimatedPhilosophy';
import { Quote } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <Section id="philosophy" title={
      <div className="flex items-center gap-2">
        <Quote className="w-5 h-5" />
        <span>philosophy</span>
      </div>
    }>
      <AnimatedPhilosophy />
    </Section>
  );
};

export default PhilosophySection;
