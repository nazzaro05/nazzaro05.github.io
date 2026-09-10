import React from 'react';
import { 
  SiDocker, 
  SiNginx, 
  SiLinux, 
  SiGnubash, 
  SiUbuntu, 
  SiVite, 
  SiReact, 
  SiTypescript, 
  SiWireguard,
  SiJavascript,
  SiPython
} from 'react-icons/si';

const TechMarquee = () => {
  const icons = [
    { Icon: SiLinux, name: 'Linux' },
    { Icon: SiUbuntu, name: 'Ubuntu' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: SiNginx, name: 'Nginx' },
    { Icon: SiWireguard, name: 'WireGuard' },
    { Icon: SiGnubash, name: 'Bash' },
    { Icon: SiPython, name: 'Python' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiVite, name: 'Vite' },
  ];

  return (
    <div className="w-full relative py-12 overflow-hidden border-y border-border-subtle bg-bg-card">
      {/* Left/Right fading masks */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee min-w-max">
        {/* We duplicate the array to create a seamless infinite scroll loop */}
        {[...icons, ...icons].map((tech, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center justify-center mx-10 text-text-muted hover:text-sky-400 transition-colors duration-300"
          >
            <tech.Icon size={42} />
            <span className="text-xs mt-3 font-medium opacity-0 hover:opacity-100 transition-opacity absolute -bottom-5">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
