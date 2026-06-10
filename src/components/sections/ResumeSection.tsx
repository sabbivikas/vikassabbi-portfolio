import React, { useState } from 'react';
import Section from '@/components/Section';
import resumeAsset from '@/assets/vikas-resume.pdf.asset.json';

const ResumeSection = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <Section id="resume" title="📄 resume">
      <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
        <p className="text-muted-foreground mb-4">
          download or view my full resume.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowViewer((v) => !v)}
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
          >
            {showViewer ? 'hide resume' : 'view resume'}
          </button>
          <a
            href={resumeAsset.url}
            download="S.V.S.-Vikas-Resume.pdf"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
          >
            download pdf
          </a>
        </div>
        {showViewer && (
          <div className="mt-6 w-full aspect-[3/4] sm:aspect-[4/5] border border-border rounded-md overflow-hidden bg-background">
            <object
              data={resumeAsset.url}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                  window.location.origin + resumeAsset.url
                )}&embedded=true`}
                title="Resume preview"
                className="w-full h-full"
              />
            </object>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ResumeSection;
