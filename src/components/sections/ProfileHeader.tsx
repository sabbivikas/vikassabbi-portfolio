
import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl mb-2 lowercase">vikas sabbi</h1>
      <p className="text-lg text-muted-foreground mb-3 lowercase">creator · storyteller · dreamer</p>
      <p className="text-sm text-muted-foreground lowercase">
        🌍 based on earth | 📬 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabbi.vikas@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">sabbi.vikas@gmail.com</a> | <a href="https://www.linkedin.com/in/vikas-sabbi-801010a9/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">linkedin</a>
      </p>
    </div>
  );
};

export default ProfileHeader;
