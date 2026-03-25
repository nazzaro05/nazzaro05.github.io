import React from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, Cpu, Database, ArrowLeftRight, ChevronRight, Terminal, Globe } from 'lucide-react';
import { Section } from '../../types';

interface HomeSectionProps {
  setActiveSection: (s: Section) => void;
}

const HomeSection = ({ setActiveSection }: HomeSectionProps) => {
  const cards = [
    { 
      id: 'wellness', 
      title: 'Tech-Wellness', 
      desc: 'Exploring the intersection of IoT and health. Biohacking, wearables, and smart environments for optimal living.', 
      icon: Activity, 
      color: 'text-emerald-500', 
      border: 'hover:border-emerald-500/50' 
    },
    { 
      id: 'cyber', 
      title: 'Cybersecurity', 
      desc: 'Advanced pentesting, privacy strategies, and the Parrot OS ecosystem. Securing the digital frontier.', 
      icon: Shield, 
      color: 'text-sky-400', 
      border: 'hover:border-sky-400/50' 
    },
    { 
      id: 'linux', 
      title: 'Linux/Unix', 
      desc: 'Master the power of the open-source kernel. From shell scripting to system architecture and essential commands.', 
      icon: Terminal, 
      color: 'text-purple-500', 
      border: 'hover:border-purple-500/50' 
    },
    { 
      id: 'networking', 
      title: 'Networking', 
      desc: 'The invisible threads of the internet. OSI model, core protocols, and modern cloud infrastructure.', 
      icon: Globe, 
      color: 'text-sky-400', 
      border: 'hover:border-sky-400/50' 
    },
    { 
      id: 'hardware', 
      title: 'Hardware', 
      icon: Cpu, 
      desc: 'Arduino and Raspberry Pi integration. Building custom IoT solutions and automated hardware systems.', 
      color: 'text-orange-500', 
      border: 'hover:border-orange-500/50' 
    },
    { 
      id: 'db', 
      title: 'Databases', 
      icon: Database, 
      desc: 'Mastering Relational, NoSQL, and Cloud databases. Architecture and optimization for scalable data.', 
      color: 'text-purple-500', 
      border: 'hover:border-purple-500/50' 
    },
    { 
      id: 'converter', 
      title: 'Converter', 
      icon: ArrowLeftRight, 
      desc: 'A precision numerical tool for base conversions. Supporting Binary, Base 5, Octal, Decimal, and Hex.', 
      color: 'text-sky-400', 
      border: 'hover:border-sky-400/50' 
    },
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-7xl md:text-9xl font-medium mb-8 tracking-tight">
          Nazz<span className="text-sky-500">Hub</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setActiveSection(card.id as Section)}
            className={`glass-card p-10 cursor-pointer group transition-all duration-500 ${card.border} hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]`}
          >
            <div className={`${card.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
              <card.icon size={48} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold mb-3 flex items-center gap-3 text-white">
              {card.title}
              <ChevronRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neon-cyan" />
            </h2>
            <p className="text-gray-500 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
