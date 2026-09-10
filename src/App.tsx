import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './types';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import InfrastructureSection from './components/sections/InfrastructureSection';
import DevelopmentSection from './components/sections/DevelopmentSection';
import CybersecuritySection from './components/sections/CybersecuritySection';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { lang } = useLanguage();

  // Scroll to top and update title on section change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const sectionTitles: Record<Section, { en: string, it: string }> = {
      home: { en: 'Francesco Nazzaro | Portfolio', it: 'Francesco Nazzaro | Portfolio' },
      about: { en: 'About Me | Francesco Nazzaro', it: 'Chi Sono | Francesco Nazzaro' },
      infrastructure: { en: 'Infrastructure & HomeLab', it: 'Infrastruttura & HomeLab' },
      development: { en: 'Web Apps | Francesco Nazzaro', it: 'App Web | Francesco Nazzaro' },
      cybersecurity: { en: 'Cybersecurity | Francesco Nazzaro', it: 'Cybersecurity | Francesco Nazzaro' }
    };
    
    document.title = sectionTitles[activeSection]?.[lang] || 'Francesco Nazzaro';
  }, [activeSection, lang]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection setActiveSection={setActiveSection} />;
      case 'about': return <AboutSection />;
      case 'infrastructure': return <InfrastructureSection />;
      case 'development': return <DevelopmentSection />;
      case 'cybersecurity': return <CybersecuritySection />;
      default: return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-sky-500/30 selection:text-white font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
