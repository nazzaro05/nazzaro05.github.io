import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Radio, Settings, Code, Lightbulb, Smartphone, Wifi, Terminal } from 'lucide-react';

const HardwareSection = () => {
  const platforms = [
    {
      title: 'Arduino Ecosystem',
      icon: Settings,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      desc: 'The gold standard for microcontrollers. Perfect for real-time sensing, motor control, and rapid prototyping of embedded systems.',
      specs: ['ATmega328P', '5V/3.3V Logic', 'Digital/Analog I/O'],
      useCases: ['Home Automation', 'Robotics', 'Sensor Networks']
    },
    {
      title: 'Raspberry Pi',
      icon: Cpu,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      desc: 'A complete Linux computer on a single board. Ideal for edge computing, media servers, and complex high-level applications.',
      specs: ['ARM Cortex-A72', '4GB/8GB RAM', '40-pin GPIO'],
      useCases: ['AI at the Edge', 'Media Centers', 'Network Security']
    },
    {
      title: 'ESP32 / ESP8266',
      icon: Wifi,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      desc: 'Power-efficient Wi-Fi and Bluetooth enabled chips. The backbone of modern IoT and smart-home connectivity.',
      specs: ['Dual-core 240MHz', 'Integrated BT/WiFi', 'Deep Sleep Mode'],
      useCases: ['Smart Lighting', 'Remote Monitoring', 'IoT Gateways']
    }
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-xs font-black uppercase tracking-widest mb-6">
          <Cpu size={14} />
          Embedded Systems
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">Hardware Engineering</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
          Bridging the gap between software logic and physical reality. 
          Master the tools and platforms used to build the next generation of smart devices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {platforms.map((platform, idx) => (
          <motion.div
            key={platform.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 group hover:border-orange-500/20 transition-all"
          >
            <div className={`p-4 ${platform.bg} rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform`}>
              <platform.icon className={platform.color} size={32} />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{platform.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">{platform.desc}</p>
            
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div>
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Key Specs</h4>
                <div className="flex flex-wrap gap-2">
                  {platform.specs.map(spec => (
                    <span key={spec} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-slate-400">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Common Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {platform.useCases.map(use => (
                    <span key={use} className="px-3 py-1 rounded-lg bg-orange-500/10 text-[10px] font-bold text-orange-400">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-10 bg-emerald-500/[0.02]">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Code className="text-emerald-400" />
            Programming Languages
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-400 font-mono text-xs font-bold">C++</div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Arduino / ESP32</h4>
                <p className="text-xs text-slate-500">Low-level control, memory efficiency, and direct register access for maximum performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-400 font-mono text-xs font-bold">PY</div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">MicroPython / CircuitPython</h4>
                <p className="text-xs text-slate-500">Rapid prototyping and high-level logic for IoT devices and Raspberry Pi scripts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 bg-orange-500/[0.02]">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Lightbulb className="text-orange-400" />
            Getting Started
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
            The best way to learn hardware is by doing. Start with a simple "Blink" sketch, then move to reading sensors (DHT11, Ultrasonic), and finally integrate Wi-Fi connectivity.
          </p>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-xs text-slate-400 italic">
              "Hardware is where the code meets the real world. It's messy, it's physical, and it's incredibly rewarding."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareSection;
