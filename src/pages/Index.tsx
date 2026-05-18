
import React from 'react';
import Header from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';

// Import section components
import ProfileHeader from '@/components/sections/ProfileHeader';
import About from '@/components/sections/About';
import CreationsSection from '@/components/sections/CreationsSection';
import StoriesSection from '@/components/sections/StoriesSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import MediaSection from '@/components/sections/MediaSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import Footer from '@/components/sections/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import FallAmbience from '@/components/FallAmbience';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <ReadingProgress />
      
      <div className="max-w-5xl mx-auto px-6">
        <Header />
        
        <main className="py-12 lowercase">
          <ProfileHeader />
          <About />
          <CreationsSection />
          <StoriesSection />
          <ExperienceSection />
          <EducationSection />
          <MediaSection />
          <PhilosophySection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
