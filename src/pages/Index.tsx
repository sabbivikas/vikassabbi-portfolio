
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import IntroAnimation from '@/components/IntroAnimation';
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
import RainAmbience from '@/components/RainAmbience';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
      setContentVisible(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentVisible(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <>
      <ReadingProgress />
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div className={`max-w-5xl mx-auto px-6 ${contentVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        <Header />
        <RainAmbience />
        
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
