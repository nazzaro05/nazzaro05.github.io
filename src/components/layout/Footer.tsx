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
    <footer className="border-t border-white/5 py-12 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-base font-medium text-white mb-1">Francesco Nazzaro</h3>
          <p className="text-slate-500 text-xs">© 2026. {text[lang]}</p>
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:nazzaro2005@gmail.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Mail size={16} />
            nazzaro2005@gmail.com
          </a>
          <a href="https://nazzaro05.github.io" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
