import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();
  
  const text = {
    en: 'All rights reserved.',
    it: 'Tutti i diritti riservati.'
  };

  return (
    <footer className="border-t border-border-subtle py-12 px-6 bg-bg-base transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-base font-medium text-text-primary mb-1">Francesco Nazzaro</h3>
          <p className="text-text-muted text-xs">© 2026. {text[lang]}</p>
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:nazzaro2005@gmail.com" className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 text-sm">
            <Mail size={16} />
            nazzaro2005@gmail.com
          </a>
          <a href="https://nazzaro05.github.io" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 text-sm">
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
