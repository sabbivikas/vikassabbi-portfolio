import React from 'react';
import Section from '@/components/Section';
import resumeAsset from '@/assets/vikas-resume.pdf.asset.json';

const ResumeSection = () => {
  return (
    <Section id="resume" title="📄 resume">
      <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
        <p className="text-muted-foreground mb-4">
          download or view my full resume.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
          >
            view resume
          </a>
          <a
            href={resumeAsset.url}
            download="S.V.S.-Vikas-Resume.pdf"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
          >
            download pdf
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;
