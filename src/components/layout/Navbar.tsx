import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Server, Code, Shield, Menu, X, Globe, Mail, Terminal } from 'lucide-react';
import { Section } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavbarProps {
  activeSection: Section;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = {
    en: [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'infrastructure', label: 'Infrastructure', icon: Server },
      { id: 'development', label: 'Web Apps', icon: Code },
      { id: 'cybersecurity', label: 'Cyber', icon: Shield },
      { id: 'contact', label: 'Contact', icon: Mail },
    ],
    it: [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'Chi Sono', icon: User },
      { id: 'infrastructure', label: 'Infrastruttura', icon: Server },
      { id: 'development', label: 'Web App', icon: Code },
      { id: 'cybersecurity', label: 'Cyber', icon: Shield },
      { id: 'contact', label: 'Contatti', icon: Mail },
    ]
  };

  const items = navItems[lang];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-lg font-medium tracking-tight cursor-pointer flex items-center gap-2 text-white hover:text-sky-400 transition-colors"
          onClick={() => handleNavClick('home')}
        >
          <Terminal size={22} className="text-sky-400" />
          F. Nazzaro
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-sky-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full"
          >
            <Globe size={14} />
            {lang === 'it' ? 'IT' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full"
          >
            <Globe size={14} />
            {lang === 'it' ? 'IT' : 'EN'}
          </button>
          <button className="text-slate-400 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-sky-400' : 'text-slate-400'
                  }`}
                >
                  <item.icon size={18} />
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
