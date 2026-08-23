import React from 'react';
import ResumeSection from '@/components/sections/ResumeSection';

const L: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="prose-link">
    {children}
  </a>
);

const Bio = () => {
  return (
    <div className="space-y-6 text-muted-foreground">
      <p>i'm just a guy that makes things that feel.</p>

      <p>
        things that tell stories, spark emotion, and make people pause, even for a moment, to
        remember what really matters.
      </p>

      <p>
        i started <L href="https://chatrasahaya.org">chatrasahaya</L> in 2020, a nonprofit built on
        the idea that our generation can build for good. i still run it.
      </p>

      <p>
        right now i'm a product engineer at <L href="https://woz.com">woz (yc w25)</L> and a founder
        in residence at <L href="https://founders.inc">founders, inc</L>.
      </p>

      <p>
        the thing i'm most proud of is{' '}
        <L href="https://apps.apple.com/us/app/dino-initiative/id6763940737">dino initiative</L> — a
        gentle, free place for mental health resources and crisis support, no barriers, no judgment.
        it's backed by one of the largest mental health communities online: 258k on instagram, 94k on
        tiktok. it's on ios.
      </p>

      <p>
        i also built <L href="https://www.tryducky.app/">ducky</L>, a new social layer for desktop —
        you send a friend a message and instead of another boring notification, a duck flies across
        their screen and delivers it. encrypted in transit, deleted after delivery, and you get a
        confirmation when the duck lands.
      </p>

      <p>
        other things i've made: <L href="https://apps.apple.com/us/app/aura-emotional-companion/id6752574726">aura</L>,
        an emotional companion on ios.{' '}
        <L href="https://ai-hr-real-time-interviewer-78048118432.us-east1.run.app">hireai</L>, a
        real-time ai interviewer that runs live technical and behavioral interviews.{' '}
        <L href="https://orgresearch.lovable.app">org research</L>, a research assistant for
        understanding companies deeply.{' '}
        <L href="https://vihari.earth">vihari.earth</L>, a quiet story platform where one frame
        sparks a thousand imaginations.{' '}
        <L href="https://ammamma.online">ammamma.online</L>, a tribute to the wisdom of grandmothers.
        and a <L href="https://tip-calculator.replit.app/">tip calculator</L> i built the night
        friends struggled to split a bill and sold to a restaurant the next morning.
      </p>

      <p>
        i write too. <L href="https://www.amazon.in/Twinkle-Stories-1-Vikas-Sabbi/dp/935565085X">twinkle stories</L>{' '}
        was written to bring imagination back to bedtime.{' '}
        <L href="https://thetalesofnani.com">the tales of nani: beyond the screens</L> follows a
        modern grandma helping her screen-addicted grandkids rediscover presence, connection, and
        family. i also write on <L href="https://vikassabbi.substack.com/">substack</L>.
      </p>

      <p>
        before all this: app creator at wabi, founder in residence at the residency sf, associate
        product manager at spawn, product ops at betteryou, and associate technical engineer at ibm.
      </p>

      <p>
        i studied a master's in computer and information sciences at cleveland state university, and
        computer science before that at sathyabama institute of science &amp; technology in chennai.
      </p>

      <p>
        some people wrote about the work:{' '}
        <L href="https://www.csuohio.edu/news/student-success-story-vikas-sabbi-connects-people-nostalgia-comfort">csu newsroom</L>,{' '}
        <L href="https://engagedscholarship.csuohio.edu/stu_pub/5/">engaged scholarship</L>,{' '}
        <L href="https://csu-cauldron.com/2023/02/05/book-written-by-csu-student-vikas-sabbi-is-available-in-campus-library/">the cauldron</L>,{' '}
        <L href="https://archive.storycorps.org/interviews/jessica-kohen-and-vikas-sabbi/">storycorps</L>, and{' '}
        <L href="https://hackernoon.com/i-created-a-website-that-lets-you-send-a-love-letter-to-the-world">hacker noon</L>.
      </p>

      <p>
        i come from a software engineering background, but the work lives at the intersection of
        storytelling, technology, and human connection. my goal isn't to follow trends. it's to make
        things that matter. things with soul.
      </p>

      <p>
        vasudhaiva kutumbakam. the world is one family. 🌍
      </p>

      <ResumeSection />

      <p>
        p.s. if you want to talk, just{' '}
        <L href="https://mail.google.com/mail/?view=cm&fs=1&to=sabbi.vikas@gmail.com">email me</L>. i
        read everything.
      </p>
    </div>
  );
};

export default Bio;
