
import React from 'react';
import Section from '@/components/Section';

const EducationSection = () => {
  return (
    <Section id="education" title="🎓 education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">master's in computer and information sciences</h3>
          <p className="text-muted-foreground mb-2">cleveland state university · jan 2022 to dec 2023</p>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">bachelor of engineering, computer science</h3>
          <p className="text-muted-foreground mb-2">sathyabama institute of science & technology, chennai · 2015 to 2019</p>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
