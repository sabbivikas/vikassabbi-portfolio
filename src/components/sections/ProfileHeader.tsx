
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl mb-2 lowercase">vikas sabbi</h1>
      <p className="text-lg text-muted-foreground mb-3 lowercase">creator · storyteller · dreamer</p>
      <p className="text-sm text-muted-foreground lowercase">
        🌍 based on earth | <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabbi.vikas@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> gmail</a> | <a href="https://www.linkedin.com/in/vikas-sabbi-801010a9/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" /> linkedin</a> | <a href="https://github.com/sabbivikas" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1"><Github className="w-3.5 h-3.5" /> github</a>
      </p>
    </div>
  );
};

export default ProfileHeader;
