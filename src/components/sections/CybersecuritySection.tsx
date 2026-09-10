import React from 'react';
import { motion } from 'motion/react';
import { Shield, Wifi, Target, Crosshair } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CybersecuritySection = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: 'Cybersecurity',
      desc: 'My approach to cybersecurity blends theoretical networking foundations with intense, hands-on practical labs. Understanding how systems communicate is the first step to securing them—or exploiting them in a controlled environment.',
      projectTitle: 'High School Diploma Project (Maturità)',
      projectSubtitle: 'Kali Linux & 2.4 GHz Wi-Fi Denial of Service',
      projectDesc1: 'For my final project, I researched and demonstrated wireless network vulnerabilities using Kali Linux. The project focused on executing a Denial of Service (DoS) attack on a 2.4 GHz Wi-Fi network.',
      projectDesc2: 'This involved understanding the 802.11 protocol, deauthentication frames, and the practical implications of unsecured wireless communications, practically proving the necessity of robust network configurations.',
      labTitle: 'Practical Laboratory Path',
      labDesc: 'I strongly believe in a hands-on learning strategy. By utilizing platforms like Hack The Box, I engage with realistic, practical scenarios aimed at industry certifications. This perfectly complements traditional academic theory, bridging the gap between textbook networking and real-world exploitation.',
      foundationsTitle: 'Solid Foundations',
      foundationsDesc: 'Before attempting to break a system, one must understand how to build it. My background in IT and Telecommunications provides the necessary baseline in TCP/IP, routing, and system administration required for advanced penetration testing and defense.'
    },
    it: {
      title: 'Cybersecurity & Reti',
      desc: 'Il mio approccio alla cybersecurity unisce solide basi teoriche sulle reti con un\'intensa pratica laboratoriale. Capire come i sistemi comunicano è il primo passo per metterli in sicurezza—o per sfruttarne le vulnerabilità in un ambiente controllato.',
      projectTitle: 'Progetto di Maturità',
      projectSubtitle: 'Kali Linux & Denial of Service su Reti Wi-Fi 2.4 GHz',
      projectDesc1: 'Per il mio progetto finale, ho analizzato e dimostrato le vulnerabilità delle reti wireless utilizzando Kali Linux, focalizzandomi sull\'esecuzione di un attacco Denial of Service (DoS) su una rete a 2.4 GHz.',
      projectDesc2: 'Questo ha richiesto una profonda comprensione del protocollo 802.11 e dei frame di deautenticazione, dimostrando all\'atto pratico la necessità di configurazioni di rete robuste.',
      labTitle: 'Percorso Laboratoriale Pratico',
      labDesc: 'Credo fortemente nell\'apprendimento "hands-on". Sfruttando piattaforme come Hack The Box, affronto scenari pratici realistici orientati alle certificazioni di settore. Questo percorso integra perfettamente la teoria accademica, colmando il divario tra i libri di testo e l\'exploitation reale.',
      foundationsTitle: 'Basi Solide',
      foundationsDesc: 'Prima di poter violare un sistema, è necessario saperlo costruire. Il mio background in Informatica e Telecomunicazioni fornisce la base essenziale (TCP/IP, routing, amministrazione di sistema) necessaria per il penetration testing avanzato.'
    }
  };

  const content = t[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="pt-32 px-6 max-w-5xl mx-auto pb-20 space-y-16"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{content.title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
          {content.desc}
        </p>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="p-5 bg-red-500/10 rounded-2xl shrink-0">
            <Wifi className="text-red-400" size={36} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">{content.projectTitle}</h3>
            <h4 className="text-red-400 font-medium mb-5">{content.projectSubtitle}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {content.projectDesc1}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {content.projectDesc2}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <Target className="text-emerald-400 mb-5" size={28} />
          <h3 className="text-xl font-semibold text-white mb-3">{content.labTitle}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {content.labDesc}
          </p>
        </div>
        
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <Crosshair className="text-sky-400 mb-5" size={28} />
          <h3 className="text-xl font-semibold text-white mb-3">{content.foundationsTitle}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {content.foundationsDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CybersecuritySection;
