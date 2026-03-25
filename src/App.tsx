import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './types';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HomeSection from './components/sections/HomeSection';
import WellnessSection from './components/sections/WellnessSection';
import CyberSection from './components/sections/CyberSection';
import LinuxSection from './components/sections/LinuxSection';
import HardwareSection from './components/sections/HardwareSection';
import DBSection from './components/sections/DBSection';
import ConverterSection from './components/sections/ConverterSection';
import CreditsSection from './components/sections/CreditsSection';
import NetworkingSection from './components/sections/NetworkingSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Scroll to top and update title on section change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update browser tab title
    const sectionTitles: Record<Section, string> = {
      home: 'NazzHub | Tech & Wellness Hub',
      wellness: 'Tech-Wellness | NazzHub',
      cyber: 'Cybersecurity | NazzHub',
      linux: 'Linux & Unix | NazzHub',
      networking: 'Networking | NazzHub',
      hardware: 'Hardware | NazzHub',
      db: 'Databases | NazzHub',
      converter: 'Unit Converter | NazzHub',
      credits: 'Credits | NazzHub'
    };
    
    document.title = sectionTitles[activeSection] || 'NazzHub';
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection setActiveSection={setActiveSection} />;
      case 'wellness': return <WellnessSection />;
      case 'cyber': return <CyberSection />;
      case 'linux': return <LinuxSection />;
      case 'networking': return <NetworkingSection />;
      case 'hardware': return <HardwareSection />;
      case 'db': return <DBSection />;
      case 'converter': return <ConverterSection />;
      case 'credits': return <CreditsSection />;
      default: return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-neon-cyan selection:text-black">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
