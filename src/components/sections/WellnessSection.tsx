import React from 'react';
import { motion } from 'motion/react';
import { Activity, Heart, Brain, Zap, Moon, Sun, Watch, Smartphone, Wind, Lightbulb } from 'lucide-react';

const WellnessSection = () => (
  <div className="pt-32 px-6 max-w-5xl mx-auto space-y-20 pb-20">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-emerald-500/10 rounded-2xl">
          <Activity className="text-emerald-400" size={36} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Tech-Wellness & IoT</h1>
      </div>
      
      <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
        Technology shouldn't just be a source of distraction or stress. When used intentionally, 
        electronic tools and the Internet of Things (IoT) become powerful allies 
        in monitoring and optimizing our physical and mental performance.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="glass-card p-10 border-l-4 border-emerald-500/30">
        <div className="flex items-center gap-4 mb-8">
          <Watch className="text-emerald-400" size={32} />
          <h2 className="text-3xl font-bold text-white tracking-tight">Wearables & Biometrics</h2>
        </div>
        <ul className="space-y-6 text-slate-500">
          <li className="flex gap-4">
            <Heart className="text-emerald-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">HRV Monitoring:</strong> Tracking Heart Rate Variability as a primary indicator of nervous system balance, stress resilience, and recovery quality.</span>
          </li>
          <li className="flex gap-4">
            <Activity className="text-emerald-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">CGM Biohacking:</strong> Continuous Glucose Monitors provide real-time data on metabolic responses to nutrition, exercise, and sleep.</span>
          </li>
          <li className="flex gap-4">
            <Moon className="text-emerald-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">Sleep Architecture:</strong> Utilizing smart rings and under-mattress sensors to analyze deep and REM sleep cycles for cognitive optimization.</span>
          </li>
        </ul>
      </section>

      <section className="glass-card p-10 border-l-4 border-sky-500/30">
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="text-sky-400" size={32} />
          <h2 className="text-3xl font-bold text-white tracking-tight">Smart Environments</h2>
        </div>
        <ul className="space-y-6 text-slate-500">
          <li className="flex gap-4">
            <Sun className="text-sky-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">Circadian Lighting:</strong> IoT-enabled lighting systems that automatically adjust color temperature to align with natural biological rhythms.</span>
          </li>
          <li className="flex gap-4">
            <Wind className="text-sky-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">Air Quality Optimization:</strong> Real-time CO2 and PM2.5 monitoring to ensure peak cognitive focus and respiratory health in workspaces.</span>
          </li>
          <li className="flex gap-4">
            <Zap className="text-sky-400 shrink-0 mt-1" size={24} />
            <span><strong className="text-slate-200 block mb-1">Neuro-Feedback:</strong> Portable EEG devices that provide real-time brainwave data to train focus, flow states, and deep meditation.</span>
          </li>
        </ul>
      </section>
    </div>

    <section className="glass-card p-10">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Digital Ecosystem for Performance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900/40 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all">
          <Smartphone className="text-emerald-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-3">Digital Detox</h4>
          <p className="text-sm text-slate-500 leading-relaxed">Selective notification filtering and screen-time analytics to protect cognitive bandwidth.</p>
        </div>
        <div className="p-6 bg-slate-900/40 rounded-3xl border border-white/5 hover:border-sky-500/20 transition-all">
          <Brain className="text-sky-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-3">Neuro-Acoustics</h4>
          <p className="text-sm text-slate-500 leading-relaxed">Binaural beats and specialized frequencies designed to induce specific neural states.</p>
        </div>
        <div className="p-6 bg-slate-900/40 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all">
          <Activity className="text-orange-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-3">Smart Hydration</h4>
          <p className="text-sm text-slate-500 leading-relaxed">Connected hydration systems that calculate fluid needs based on activity and climate.</p>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
        <Brain size={32} className="text-emerald-500" />
        Biohacking Fundamentals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Intermittent Fasting', desc: 'Cycling between periods of eating and fasting to improve metabolic health and cellular repair.', icon: Activity },
          { title: 'Cold Exposure', desc: 'Using cold showers or ice baths to stimulate the vagus nerve and boost immune response.', icon: Wind },
          { title: 'Red Light Therapy', desc: 'Exposing the body to specific wavelengths of light to enhance mitochondrial function.', icon: Sun },
          { title: 'Nootropics', desc: 'Natural or synthetic substances that may improve cognitive function, memory, and creativity.', icon: Brain },
          { title: 'Breathwork', desc: 'Conscious control of breathing to influence the autonomic nervous system and reduce stress.', icon: Wind },
          { title: 'Sleep Hygiene', desc: 'Optimizing the environment and habits to maximize restorative sleep quality.', icon: Moon },
        ].map((hack, i) => (
          <div key={i} className="glass-card p-8 border-l-4 border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <hack.icon className="text-emerald-400" size={24} />
              <h4 className="text-xl font-bold text-white">{hack.title}</h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{hack.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="glass-card p-10 bg-sky-500/[0.02] border border-sky-500/10">
      <h2 className="text-3xl font-bold text-sky-400 mb-6 flex items-center gap-3 tracking-tight">
        <Zap size={32} />
        The Future of Connected Living
      </h2>
      <p className="text-slate-400 leading-relaxed text-lg font-medium">
        The synergy between biometric data and home automation allows for environments that 
        proactively adapt to our physiological needs. Imagine a room that cools down as you enter 
        deep sleep, or lighting that shifts to energizing blue as your focus begins to wane. 
        This is the promise of the integrated wellness laboratory.
      </p>
    </section>
  </div>
);

export default WellnessSection;
