import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Shield, Cpu, Database, Activity, ArrowLeftRight, Menu, X, Terminal, Globe } from 'lucide-react';
import { Section } from '../../types';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'wellness', label: 'Tech-Wellness', icon: Activity },
    { id: 'cyber', label: 'Cybersecurity', icon: Shield },
    { id: 'linux', label: 'Linux/Unix', icon: Terminal },
    { id: 'networking', label: 'Networking', icon: Globe },
    { id: 'hardware', label: 'Hardware', icon: Cpu },
    { id: 'db', label: 'Databases', icon: Database },
    { id: 'converter', label: 'Converter', icon: ArrowLeftRight },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-xl font-semibold tracking-tight cursor-pointer flex items-center gap-1 group"
          onClick={() => setActiveSection('home')}
        >
          <span className="text-white group-hover:text-sky-400 transition-all">Nazz</span>
          <span className="text-sky-500 group-hover:text-white transition-all">Hub</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-400 p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card !rounded-none border-t border-glass-border overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as Section);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-4 text-xl font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.id ? 'text-sky-400' : 'text-slate-400'
                  }`}
                >
                  <item.icon size={24} strokeWidth={2.5} />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
