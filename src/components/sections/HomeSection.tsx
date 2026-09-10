import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../types';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HomeSection = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      role: 'IT & Telecommunications Specialist',
      desc: 'I am a recent graduate (100/100) with a profound passion for systems engineering. Welcome to my digital portfolio, where I document my work in self-hosting, Linux administration, web development, and ethical hacking.',
      explore: 'Explore My Work',
      contact: 'Contact Me'
    },
    it: {
      role: 'Specialista IT & Telecomunicazioni',
      desc: 'Mi sono diplomato di recente (100/100) con una profonda passione per l\'ingegneria dei sistemi. Benvenuto nel mio portfolio digitale, dove documento i miei progetti di self-hosting, amministrazione Linux, sviluppo web e cybersecurity.',
      explore: 'Esplora i Progetti',
      contact: 'Contattami'
    }
  };

  const content = t[lang];

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20 min-h-[85vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-semibold text-text-primary tracking-tight">
          Francesco Nazzaro
        </h1>
        
        <h2 className="text-xl md:text-2xl text-text-secondary font-normal tracking-tight">
          {content.role}
        </h2>
        
        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed pt-4">
          {content.desc}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-8">
          <button 
            onClick={() => document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' })} 
            className="px-6 py-3 bg-text-primary text-bg-base hover:bg-text-secondary font-medium rounded-xl transition-all flex items-center gap-2 text-sm"
          >
            {content.explore} <ArrowRight size={16} />
          </button>
          
          <a 
            href="mailto:nazzaro2005@gmail.com" 
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover text-text-primary font-medium rounded-xl transition-all flex items-center gap-2 border border-border-subtle text-sm"
          >
            <Mail size={16} /> {content.contact}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection;
