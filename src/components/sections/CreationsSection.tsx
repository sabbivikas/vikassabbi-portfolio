
import React from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

const CreationsSection = () => {
  return (
    <Section id="work" title="🛠 creations">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="🌟 aura"
          description="an emotional companion app that provides personalized support and guidance for mental wellness. available exclusively on ios."
          year=""
          link="https://apps.apple.com/us/app/aura-emotional-companion/id6752574726"
          linkText="download on app store"
          status="green"
        />
        <ProjectCard
          title="🎤 hireai"
          description="a real-time ai interviewer that conducts live technical and behavioral interviews, providing instant feedback and assessment to streamline your hiring process."
          year=""
          link="https://ai-hr-real-time-interviewer-761562630822.us-west1.run.app"
          linkText="try hireai"
          status="green"
        />
        <ProjectCard
          title="🔬 org research"
          description="an intelligent research assistant that helps you explore and understand organizations deeply — from company culture to market positioning."
          year=""
          link="https://orgresearch.lovable.app"
          linkText="visit org research"
          status="green"
        />
        <ProjectCard
          title="💌 dear me"
          description="a self-reflection platform where you write letters to your future self — capturing thoughts, dreams, and promises to be delivered when the time is right."
          year=""
          link="https://dearme.life"
          linkText="visit dear me"
          status="green"
        />
        <ProjectCard
          title="📝 noto.my"
          description="a smart writing platform where you can write or dictate your thoughts, enhance them with ai, and research directly within your content. just select any word, sentence, or paragraph and dive deeper without ever leaving your flow."
          year=""
          link="https://noto.my"
          linkText="visit noto"
          status="green"
        />
        <ProjectCard
          title="✍️ vibewriters.com"
          description="a creative writing community where writers connect, share their work, and find their unique voice."
          year=""
          link="https://vibewriters.com/"
          linkText="visit vibewriters"
          status="green"
        />
        <ProjectCard
          title="💌 walluv.com"
          description="a love-letter website where users can anonymously express their feelings to the world — no logins, just pure expression."
          year=""
          link="https://walluv.com"
          linkText="visit walluv"
          status="green"
        />
        <ProjectCard
          title="✍️ freewrite.space"
          description="a quiet corner of the internet to clear your mind and let your thoughts flow. no distractions, just a timer, a blank space, and you."
          year=""
          link="https://freewrite.space"
          linkText="visit freewrite"
          status="green"
        />
        <ProjectCard
          title="🌍 vihari.earth"
          description="a quiet, reflective story platform where one frame sparks a thousand imaginations. each scene in vihari's journey invites you to pause, feel, and write your own meaning. no rules, no right answers, just you, your thoughts, and a story waiting to be discovered within."
          year=""
          link="https://vihari.earth"
          linkText="visit vihari.earth"
          status="green"
        />
        <ProjectCard
          title="🪔 narad.world"
          description="an avatar storytelling platform to preserve moral stories and family values. built in collaboration with like-minded storytellers."
          year=""
          link="https://narad.world"
          linkText="visit narad.world"
          status="green"
        />
        <ProjectCard
          title="👵 ammamma.online"
          description="a tribute to the wisdom of grandmothers, preserving their values through storytelling."
          year=""
          link="https://ammamma.online"
          linkText="visit ammamma"
          status="green"
        />
        <ProjectCard
          title="🦕 dino initiative"
          description="a gentle, accessible platform offering free mental health resources and crisis support for anyone who needs a moment of care — no barriers, no judgment."
          year=""
          link="https://dinoinitiative.com/"
          linkText="visit dino initiative"
          status="green"
        />
        <ProjectCard
          title="💸 tip calculator"
          description="built while heading to a dinner where friends struggled to split the tip. i built it that night and sold it to a restaurant the next day. didn't even realize it was the first of its kind in the world.📷 used in real restaurants with qr code access."
          year=""
          link="https://tip-calculator.replit.app/"
          linkText="try tip calculator"
          status="green"
        />
      </div>
    </Section>
  );
};

export default CreationsSection;
