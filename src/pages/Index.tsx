import React from 'react';
import Header from '@/components/Header';
import Bio from '@/components/sections/Bio';
import ReadingProgress from '@/components/ReadingProgress';

const Index = () => {
  return (
    <>
      <ReadingProgress />

      <div className="max-w-[600px] px-6 sm:px-12 pb-24 lowercase">
        <Header />

        <main>
          <h1 className="text-[2.75rem] leading-none font-bold tracking-tight text-foreground mb-8">
            hi i'm vikas.
          </h1>

          <Bio />
        </main>

        <footer className="pt-16 text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} vikas sabbi
        </footer>
      </div>
    </>
  );
};

export default Index;
