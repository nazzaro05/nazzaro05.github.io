import React, { useState, useEffect } from 'react';
import { Section } from './types';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import InfrastructureSection from './components/sections/InfrastructureSection';
import DevelopmentSection from './components/sections/DevelopmentSection';
import CybersecuritySection from './components/sections/CybersecuritySection';
import BackToTop from './components/ui/BackToTop';
import SectionDivider from './components/ui/SectionDivider';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { lang } = useLanguage();

  // Scroll spy to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (how much of it is visible)
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id as Section);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Adjusted to trigger when section is in top/middle part of viewport
        threshold: [0, 0.2, 0.5, 0.8, 1.0]
      }
    );

    const sections = ['home', 'about', 'infrastructure', 'development', 'cybersecurity'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Update title on section change
  useEffect(() => {
    const sectionTitles: Record<Section, { en: string, it: string }> = {
      home: { en: 'Francesco Nazzaro | Portfolio', it: 'Francesco Nazzaro | Portfolio' },
      about: { en: 'About Me | Francesco Nazzaro', it: 'Chi Sono | Francesco Nazzaro' },
      infrastructure: { en: 'Infrastructure & HomeLab', it: 'Infrastruttura & HomeLab' },
      development: { en: 'Web Apps | Francesco Nazzaro', it: 'App Web | Francesco Nazzaro' },
      cybersecurity: { en: 'Cybersecurity | Francesco Nazzaro', it: 'Cybersecurity | Francesco Nazzaro' }
    };
    
    document.title = sectionTitles[activeSection]?.[lang] || 'Francesco Nazzaro';
  }, [activeSection, lang]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-sky-500/30 selection:text-white font-sans">
      <Navbar activeSection={activeSection} />
      
      <main className="flex flex-col">
        <section id="home" className="scroll-mt-20">
          <HomeSection />
        </section>
        
        <SectionDivider />
        
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        
        <SectionDivider />
        
        <section id="infrastructure" className="scroll-mt-20">
          <InfrastructureSection />
        </section>
        
        <SectionDivider />
        
        <section id="development" className="scroll-mt-20">
          <DevelopmentSection />
        </section>
        
        <SectionDivider />
        
        <section id="cybersecurity" className="scroll-mt-20">
          <CybersecuritySection />
        </section>
      </main>

      <BackToTop />
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
