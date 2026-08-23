import React, { useState } from 'react';
import resumeAsset from '@/assets/vikas-resume.pdf.asset.json';

const ResumeSection = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div id="resume">
      <p>
        my full resume is here —{' '}
        <button type="button" onClick={() => setShowViewer((v) => !v)} className="prose-link">
          {showViewer ? 'hide it' : 'view it'}
        </button>{' '}
        or{' '}
        <a href={resumeAsset.url} download="S.V.S.-Vikas-Resume.pdf" className="prose-link">
          download the pdf
        </a>
        .
      </p>

      {showViewer && (
        <div className="mt-4 w-full aspect-[3/4] overflow-hidden">
          <object data={resumeAsset.url} type="application/pdf" className="w-full h-full">
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
  );
};

export default ResumeSection;
