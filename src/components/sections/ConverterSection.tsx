import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Info, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const ConverterSection = () => {
  const [input, setInput] = useState('');
  const [base, setBase] = useState('10');
  const [results, setResults] = useState({ dec: '', bin: '', oct: '', hex: '', base5: '' });
  const [expandedInfo, setExpandedInfo] = useState<string | null>(null);

  const convert = (val: string, fromBase: string) => {
    if (!val) {
      setResults({ dec: '', bin: '', oct: '', hex: '', base5: '' });
      return;
    }
    try {
      const decimal = parseInt(val, parseInt(fromBase));
      if (isNaN(decimal)) throw new Error();
      
      setResults({
        dec: decimal.toString(10),
        bin: decimal.toString(2),
        oct: decimal.toString(8),
        hex: decimal.toString(16).toUpperCase(),
        base5: decimal.toString(5),
      });
    } catch {
      setResults({ dec: 'Invalid', bin: 'Invalid', oct: 'Invalid', hex: 'Invalid', base5: 'Invalid' });
    }
  };

  useEffect(() => {
    convert(input, base);
  }, [input, base]);

  const explanations: Record<string, { title: string, content: string, example: string }> = {
    'Decimal': {
      title: 'Base 10 (Decimal)',
      content: 'The standard system used globally. It uses ten digits (0-9). Each position represents a power of 10.',
      example: '123 = 1×10² + 2×10¹ + 3×10⁰'
    },
    'Binary': {
      title: 'Base 2 (Binary)',
      content: 'The foundation of digital computing. Uses only 0 and 1. Each position represents a power of 2.',
      example: '101 = 1×2² + 0×2¹ + 1×2⁰ = 5'
    },
    'Base 5': {
      title: 'Base 5 (Quinary)',
      content: 'Uses five digits (0-4). Historically used by cultures that counted on one hand. Each position represents a power of 5.',
      example: '23 = 2×5¹ + 3×5⁰ = 13'
    },
    'Octal': {
      title: 'Base 8 (Octal)',
      content: 'Uses eight digits (0-7). Often used in computing as a shorthand for binary (3 bits per digit).',
      example: '17 = 1×8¹ + 7×8⁰ = 15'
    },
    'Hex': {
      title: 'Base 16 (Hexadecimal)',
      content: 'Uses 16 digits (0-9 and A-F). Widely used in programming for memory addresses and colors (4 bits per digit).',
      example: '1A = 1×16¹ + 10×16⁰ = 26'
    }
  };

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Smart Utility
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">Numerical Converter</h1>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            A sleek, high-precision tool for seamless base transformations. 
            Convert between standard and custom numerical systems instantly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-10 bg-white/[0.01]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Input Value</label>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a number..."
                    className="w-full bg-slate-900/50 border border-white/5 rounded-3xl p-6 text-white font-mono text-2xl focus:outline-none focus:border-sky-500/30 transition-all placeholder:text-slate-800"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Source Base</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {[
                      { val: '2', label: 'BIN' },
                      { val: '5', label: 'B5' },
                      { val: '8', label: 'OCT' },
                      { val: '10', label: 'DEC' },
                      { val: '16', label: 'HEX' },
                    ].map((b) => (
                      <button
                        key={b.val}
                        onClick={() => setBase(b.val)}
                        className={`py-4 rounded-2xl font-black text-xs transition-all border ${
                          base === b.val 
                            ? 'bg-sky-500 text-white border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.3)]' 
                            : 'bg-white/5 text-slate-500 border-white/5 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Decimal', key: 'dec', base: '10' },
                { label: 'Binary', key: 'bin', base: '2' },
                { label: 'Base 5', key: 'base5', base: '5' },
                { label: 'Octal', key: 'oct', base: '8' },
                { label: 'Hex', key: 'hex', base: '16' },
              ].map((res) => (
                <div key={res.label} className="group">
                  <div className="glass-card p-6 flex flex-col gap-4 hover:border-sky-500/20 transition-all">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{res.label}</span>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-600 font-bold">BASE {res.base}</span>
                      </div>
                      <button 
                        onClick={() => setExpandedInfo(expandedInfo === res.label ? null : res.label)}
                        className={`p-2 rounded-xl transition-all ${expandedInfo === res.label ? 'bg-sky-500/10 text-sky-400' : 'text-slate-600 hover:text-white hover:bg-white/5'}`}
                      >
                        <Info size={16} />
                      </button>
                    </div>
                    <div className="font-mono text-2xl font-black text-sky-400 break-all">
                      {(results as any)[res.key] || '—'}
                    </div>
                    
                    <AnimatePresence>
                      {expandedInfo === res.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                            <h4 className="text-sm font-bold text-white">{explanations[res.label].title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{explanations[res.label].content}</p>
                            <div className="p-3 bg-black/20 rounded-xl font-mono text-[10px] text-sky-500/70">
                              {explanations[res.label].example}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-10 bg-sky-500/[0.02] border-sky-500/10">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <Sparkles size={20} className="text-sky-400" />
                Quick Guide
              </h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Valid Ranges</h4>
                  <ul className="space-y-3">
                    {[
                      { label: 'Binary', range: '0 - 1' },
                      { label: 'Base 5', range: '0 - 4' },
                      { label: 'Octal', range: '0 - 7' },
                      { label: 'Decimal', range: '0 - 9' },
                      { label: 'Hex', range: '0 - 9, A - F' },
                    ].map(item => (
                      <li key={item.label} className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-bold">{item.label}</span>
                        <span className="font-mono text-sky-500/60">{item.range}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5">
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Pro tip: Click the <Info size={12} className="inline mx-1" /> icon on any result card to see the manual conversion logic and examples.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 bg-emerald-500/[0.02] border-emerald-500/10">
              <h3 className="text-xl font-black text-white mb-4">Did you know?</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Base 5 (Quinary) is one of the oldest counting systems, as it corresponds to the number of fingers on one hand. 
                It was used by the Gumatj people of Australia and in some ancient Mesoamerican cultures.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConverterSection;
