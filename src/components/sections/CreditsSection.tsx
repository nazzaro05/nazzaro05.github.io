import React from 'react';
import { Info } from 'lucide-react';

const CreditsSection = () => (
  <div className="pt-32 px-6 max-w-3xl mx-auto pb-20">
    <div className="flex items-center gap-4 mb-12">
      <div className="p-4 bg-sky-500/10 rounded-2xl">
        <Info className="text-sky-400" size={36} />
      </div>
      <h1 className="text-5xl font-black text-text-primary tracking-tighter">Icon Credits</h1>
    </div>
    
    <div className="glass-card p-10">
      <p className="text-text-secondary mb-10 text-lg font-medium">All icons used in this project are sourced from Flaticon, created by talented designers:</p>
      <ul className="space-y-6">
        {[
          { name: 'Home Icon', creator: 'Vectors Market' },
          { name: 'Instagram Icon', creator: 'Indygo' },
          { name: 'Youtube Icon', creator: 'Md Tanvirul Haque' },
          { name: 'Facebook Icon', creator: 'Freepik' },
          { name: 'Motherboard Icon', creator: 'Kise1ki' },
          { name: 'Coding Icon', creator: 'Freepik' },
          { name: 'Database Icon', creator: 'Freepik' },
          { name: 'Linux Icons', creator: 'Freepik' },
          { name: 'Healthy Icon', creator: 'Saepul Nahwan' },
        ].map(item => (
          <li key={item.name} className="flex justify-between items-center border-b border-border-subtle pb-4 group">
            <span className="text-text-primary font-bold tracking-tight group-hover:text-sky-400 transition-colors">{item.name}</span>
            <span className="text-text-muted text-sm font-medium italic">by {item.creator}</span>
          </li>
        ))}
      </ul>
      <div className="mt-12 p-6 bg-bg-card rounded-2xl border border-border-subtle text-center">
        <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">Attribution License</p>
        <p className="text-xs text-text-muted mt-2">Icons are used under the Flaticon license with proper attribution to the original creators.</p>
      </div>
    </div>
  </div>
);

export default CreditsSection;
