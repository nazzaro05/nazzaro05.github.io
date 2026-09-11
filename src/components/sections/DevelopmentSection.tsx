import React from 'react';
import { motion } from 'motion/react';
import { Code, BookOpen, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DevelopmentSection = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: 'Web Apps & Educational Resources',
      desc: 'I develop and host custom web platforms dedicated to studying and organizing educational materials. These projects focus on modern web stacks that prioritize performance and low resource consumption.',
      studyTitle: 'Study Platforms',
      studyDesc: 'Development and hosting of dedicated websites for notes and materials covering complex academic subjects:',
      subj1: 'Computer Architecture',
      subj2: 'Mathematical Analysis',
      subj3: 'Physics',
      stackTitle: 'Application Stack',
      stackDesc: 'Utilizing modern JavaScript tools like Vite and Bun as a runtime and bundler. This setup guarantees rapid build times and reduced memory footprints.',
      deployTitle: 'Deployment Strategy',
      deployDesc: 'For static SPAs, Nginx serves the files using try_files $uri /index.html;. For active backend services utilizing Bun, process managers like systemd or pm2 are required to ensure automatic restarts upon crash or server reboot.'
    },
    it: {
      title: 'Web App & Risorse Didattiche',
      desc: 'Sviluppo e ospito piattaforme web personalizzate dedicate allo studio e all\'organizzazione di materiali didattici. Questi progetti si concentrano su stack web moderni che ottimizzano le prestazioni e riducono i consumi.',
      studyTitle: 'Piattaforme di Studio',
      studyDesc: 'Sviluppo e hosting di siti web dedicati per appunti e materiali su materie accademiche complesse:',
      subj1: 'Architettura dei Calcolatori',
      subj2: 'Analisi Matematica',
      subj3: 'Fisica',
      stackTitle: 'Stack Applicativo',
      stackDesc: 'Utilizzo di strumenti JavaScript moderni come Vite e Bun come runtime/bundler. Questo garantisce build rapide e consumi ridotti di memoria.',
      deployTitle: 'Strategia di Deploy',
      deployDesc: 'Per le SPA statiche, Nginx serve i file con try_files $uri /index.html;. Per servizi backend attivi che sfruttano Bun, è necessario l\'uso di un process manager come systemd o pm2 per garantire il riavvio automatico in caso di crash.'
    }
  };

  const content = t[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-32 px-6 max-w-5xl mx-auto pb-20 space-y-16"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">{content.title}</h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
          {content.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <BookOpen className="text-indigo-400 mb-6" size={32} />
          <h3 className="text-2xl font-semibold text-text-primary mb-4">{content.studyTitle}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {content.studyDesc}
          </p>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 
              {content.subj1}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 
              {content.subj2}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 
              {content.subj3}
            </li>
          </ul>
        </div>

        <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <Layers className="text-amber-400 mb-6" size={32} />
          <h3 className="text-2xl font-semibold text-text-primary mb-4">{content.stackTitle}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {content.stackDesc}
          </p>
          
          <div className="bg-amber-500/10 p-5 rounded-xl border border-amber-500/20 mt-6">
            <h4 className="text-amber-400 text-xs font-semibold uppercase mb-3 flex items-center gap-2">
              <Zap size={14}/> {content.deployTitle}
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              {content.deployDesc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevelopmentSection;
