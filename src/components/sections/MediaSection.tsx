
import React from 'react';
import Section from '@/components/Section';

const MediaSection = () => {
  return (
    <Section id="media" title="✨ spotlight">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">student success story: vikas sabbi connects people through nostalgia and comfort</h3>
          <p className="text-muted-foreground mb-3">cleveland state university newsroom</p>
          <a href="https://www.csuohio.edu/news/student-success-story-vikas-sabbi-connects-people-nostalgia-comfort" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-medium hover:text-black transition-colors">
            read article
          </a>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">vikas sabbi's bedtime stories bring family back together</h3>
          <p className="text-muted-foreground mb-3">cleveland state university engaged scholarship</p>
          <a href="https://engagedscholarship.csuohio.edu/stu_pub/5/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-medium hover:text-black transition-colors">
            read article
          </a>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">book written by csu student vikas sabbi is available in campus library</h3>
          <p className="text-muted-foreground mb-3">the cauldron (csu student media)</p>
          <a href="https://csu-cauldron.com/2023/02/05/book-written-by-csu-student-vikas-sabbi-is-available-in-campus-library/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-medium hover:text-black transition-colors">
            read article
          </a>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">interview with storycorps</h3>
          <p className="text-muted-foreground mb-3">storycorps interview</p>
          <a href="https://archive.storycorps.org/interviews/jessica-kohen-and-vikas-sabbi/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-medium hover:text-black transition-colors">
            listen to interview
          </a>
        </div>

        <div className="p-4 rounded-md hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium mb-1">i created a website that lets you send a love letter to the world</h3>
          <p className="text-muted-foreground mb-3">hacker noon</p>
          <a href="https://hackernoon.com/i-created-a-website-that-lets-you-send-a-love-letter-to-the-world" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-medium hover:text-black transition-colors">
            read article
          </a>
        </div>
      </div>
    </Section>
  );
};

export default MediaSection;
