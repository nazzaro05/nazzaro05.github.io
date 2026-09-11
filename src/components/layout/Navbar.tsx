import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Server, Code, Shield, Menu, X, Globe, Terminal, Sun, Moon } from 'lucide-react';
import { Section } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  activeSection: Section;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    // Give mobile touch events a brief moment to finish before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 72; // Account for the fixed navbar height
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - navHeight;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    }, 80);
  };

  const navItems = {
    en: [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'infrastructure', label: 'Infrastructure', icon: Server },
      { id: 'development', label: 'Web Apps', icon: Code },
      { id: 'cybersecurity', label: 'Cyber', icon: Shield },
    ],
    it: [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'Chi Sono', icon: User },
      { id: 'infrastructure', label: 'Infrastruttura', icon: Server },
      { id: 'development', label: 'Web App', icon: Code },
      { id: 'cybersecurity', label: 'Cyber', icon: Shield },
    ]
  };

  const items = navItems[lang];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-nav backdrop-blur-md border-b border-border-subtle transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-lg font-semibold tracking-tight cursor-pointer flex items-center gap-2 text-text-primary hover:text-sky-500 transition-colors"
          onClick={() => handleNavClick('home')}
        >
          <Terminal size={22} className="text-sky-500" />
          F. Nazzaro
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-sky-500 font-semibold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors bg-bg-card hover:bg-bg-card-hover border border-border-subtle px-3 py-1.5 rounded-full shadow-sm"
          >
            <Globe size={14} />
            {lang === 'it' ? 'IT' : 'EN'}
          </button>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="text-text-secondary hover:text-text-primary transition-colors p-2 rounded-lg hover:bg-bg-card border border-border-subtle shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="text-text-secondary hover:text-text-primary transition-colors p-2 rounded-lg hover:bg-bg-card border border-border-subtle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors bg-bg-card border border-border-subtle px-2.5 py-1.5 rounded-full"
          >
            <Globe size={14} />
            {lang === 'it' ? 'IT' : 'EN'}
          </button>
          <button 
            className="text-text-primary p-2 rounded-lg hover:bg-bg-card active:scale-95 transition-all" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
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
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden bg-bg-nav/98 backdrop-blur-xl border-b border-border-subtle shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1.5">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-medium transition-all active:scale-[0.98] ${
                    activeSection === item.id 
                      ? 'bg-sky-500/15 text-sky-500 font-semibold shadow-xs' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card active:bg-bg-card'
                  }`}
                >
                  <item.icon size={20} className={activeSection === item.id ? 'text-sky-500' : 'text-text-muted'} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
