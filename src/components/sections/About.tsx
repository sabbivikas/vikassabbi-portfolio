
import React from 'react';
import Section from '@/components/Section';

const About = () => {
  return (
    <Section id="about" title="👋 about me">
      <div className="prose max-w-none">
        <p className="mb-4 text-lg">
          hi, i'm v.
        </p>
        <p className="mb-4">
          i create things that feel. things that tell stories, spark emotion, and make people pause, even for a moment, to remember what really matters.
        </p>
        <p className="mb-4">
          my journey began with chatrasahaya, a nonprofit rooted in the idea that our generation can build for good. since then, i've been exploring how creativity, culture, and code can shape more meaningful experiences.
        </p>
        <p className="mb-4">
          i wrote twinkle stories to bring imagination back to bedtime. my second book, the tales of nani: beyond the screens, follows a modern grandma helping her tech addicted grandkids rediscover the beauty of presence, connection, and family.
        </p>
        <p className="mb-4">
          i come from a software engineering background, but my work lives at the intersection of storytelling, technology, and human connection. i build games that raise awareness, avatars that preserve moral stories, and tools like noto.my, a distraction free space where writing feels like thinking.
        </p>
        <p className="mb-4">
          my goal isn't to follow trends. it's to create things that matter, things with soul.
        </p>
        <p className="mb-4 font-medium italic">
          to make something wonderful for humanity.
        </p>
      </div>
    </Section>
  );
};

export default About;
