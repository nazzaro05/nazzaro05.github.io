import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Heart, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import TechMarquee from '../ui/TechMarquee';

const AboutSection = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: 'About Me',
      bio: 'Born in 2005, I have always been fascinated by how technology connects people and systems. I recently graduated with top marks in IT and Telecommunications, and I am continuously expanding my skillset across systems administration and web development.',
      education: 'Education',
      diplomaTitle: 'Diploma in Informatica e Telecomunicazioni',
      grade: 'Grade: 100/100',
      certs: 'Certifications & Courses',
      cert1: 'Cybersecurity & PHP Web Development',
      cert1Subtitle: 'Online Courses (2025)',
      cert2: 'Google Challenge Campania (AI Tools)',
      cert3: 'Smart Maintenance e Industria 4.0',
      cert4: 'Robotics and AI',
      volunteering: 'Volunteering',
      volSubtitle: 'Volunteer (1.5+ years)',
      certBLS: 'BLS-D Certified (2024)',
      certSoc: 'Soccorritore di I Livello (2025)',
      languages: 'Languages',
      italian: 'Italian',
      native: 'Native',
      english: 'English',
      b2: 'B2 Level'
    },
    it: {
      title: 'Chi Sono',
      bio: 'Nato nel 2005, sono sempre stato affascinato da come la tecnologia connette persone e sistemi. Mi sono recentemente diplomato con il massimo dei voti in Informatica e Telecomunicazioni, e sto espandendo continuamente le mie competenze in amministrazione di sistema e sviluppo web.',
      education: 'Istruzione',
      diplomaTitle: 'Diploma in Informatica e Telecomunicazioni',
      grade: 'Voto: 100/100',
      certs: 'Certificazioni e Corsi',
      cert1: 'Sviluppo Web PHP e Cybersecurity',
      cert1Subtitle: 'Corsi Online (2025)',
      cert2: 'Google Challenge Campania (Strumenti AI)',
      cert3: 'Smart Maintenance e Industria 4.0',
      cert4: 'Robotica e IA',
      volunteering: 'Volontariato',
      volSubtitle: 'Volontario (1.5+ anni)',
      certBLS: 'Attestato BLS-D (2024)',
      certSoc: 'Soccorritore di I Livello (2025)',
      languages: 'Lingue',
      italian: 'Italiano',
      native: 'Madrelingua',
      english: 'Inglese',
      b2: 'Livello B2'
    }
  };

  const content = t[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="pt-32 px-6 max-w-4xl mx-auto pb-20 space-y-16"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{content.title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          {content.bio}
        </p>
      </div>

      <div className="-mx-6 md:-mx-12">
        <TechMarquee />
      </div>

      {/* Education & Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-sky-400" size={24} />
            <h3 className="text-xl font-semibold text-white">{content.education}</h3>
          </div>
          <ul className="space-y-4">
            <li>
              <p className="text-white font-medium">{content.diplomaTitle}</p>
              <p className="text-slate-500 text-sm mt-1">ITT Guido Dorso (2019-2024)</p>
              <p className="text-emerald-400 text-sm font-medium mt-1">{content.grade}</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-sky-400" size={24} />
            <h3 className="text-xl font-semibold text-white">{content.certs}</h3>
          </div>
          <ul className="space-y-5">
            <li>
              <p className="text-white font-medium text-sm">{content.cert1}</p>
              <p className="text-slate-500 text-xs mt-1">{content.cert1Subtitle}</p>
            </li>
            <li>
              <p className="text-white font-medium text-sm">{content.cert2}</p>
              <p className="text-slate-500 text-xs mt-1">Università degli Studi del Sannio (2026)</p>
            </li>
            <li>
              <p className="text-white font-medium text-sm">{content.cert3}</p>
              <p className="text-slate-500 text-xs mt-1">Università degli Studi del Sannio (2026)</p>
            </li>
            <li>
              <p className="text-white font-medium text-sm">{content.cert4}</p>
              <p className="text-slate-500 text-xs mt-1">ITT Guido Dorso (2024)</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Volunteering & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-red-400" size={24} />
            <h3 className="text-xl font-semibold text-white">{content.volunteering}</h3>
          </div>
          <ul className="space-y-4">
            <li>
              <p className="text-white font-medium">Misericordia di Avellino</p>
              <p className="text-slate-500 text-sm mb-2">{content.volSubtitle}</p>
              <ul className="text-slate-400 text-sm space-y-1 ml-4 list-disc marker:text-red-500/50">
                <li>{content.certBLS}</li>
                <li>{content.certSoc}</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Languages className="text-emerald-400" size={24} />
            <h3 className="text-xl font-semibold text-white">{content.languages}</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-white font-medium">{content.italian}</span>
              <span className="text-slate-400 text-sm">{content.native}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-white font-medium">{content.english}</span>
              <span className="text-slate-400 text-sm px-2 py-1 bg-white/5 rounded-md">{content.b2}</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
