import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Section } from '../../types';

interface FooterProps {
  setActiveSection: (s: Section) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => (
  <footer className="mt-32 border-t border-white/5 py-20 px-6 bg-[#050505]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="text-center md:text-left group cursor-pointer" onClick={() => setActiveSection('home')}>
        <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
          Nazz<span className="text-sky-500 group-hover:text-sky-400 transition-colors">Hub</span>
        </h3>
        <p className="text-slate-500 text-sm font-medium tracking-tight">© 2026 Francesco Nazzaro. All rights reserved.</p>
      </div>
      
      <div className="flex gap-10">
        <a href="https://www.instagram.com/nazzaro__/" target="_blank" className="text-slate-500 hover:text-sky-400 hover:scale-110 transition-all duration-300">
          <Instagram size={32} strokeWidth={1.5} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100072541764085" target="_blank" className="text-slate-500 hover:text-sky-500 hover:scale-110 transition-all duration-300">
          <Facebook size={32} strokeWidth={1.5} />
        </a>
        <a href="https://www.youtube.com/channel/UCSNos0Ikbp_P7d4r8YioqJg" target="_blank" className="text-slate-500 hover:text-red-500 hover:scale-110 transition-all duration-300">
          <Youtube size={32} strokeWidth={1.5} />
        </a>
      </div>

      <div className="flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
        <a href="https://www.iubenda.com/privacy-policy/50715823" target="_blank" className="text-slate-500 hover:text-sky-400 transition-colors">Privacy</a>
        <button onClick={() => setActiveSection('credits')} className="text-slate-500 hover:text-sky-400 transition-colors">Credits</button>
      </div>
    </div>
  </footer>
);

export default Footer;
