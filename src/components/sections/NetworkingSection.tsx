import React from 'react';
import { motion } from 'motion/react';
import { Globe, Server, Shield, Zap, Layers, Search, Cpu, Activity } from 'lucide-react';

const NetworkingSection = () => {
  const osiLayers = [
    { layer: 7, name: 'Application', desc: 'HTTP, FTP, SMTP, DNS. Where user interaction happens.', color: 'bg-sky-500/10' },
    { layer: 6, name: 'Presentation', desc: 'Encryption, Compression, Translation (SSL/TLS).', color: 'bg-sky-500/20' },
    { layer: 5, name: 'Session', desc: 'Managing connections between applications.', color: 'bg-sky-500/30' },
    { layer: 4, name: 'Transport', desc: 'TCP, UDP. End-to-end communication and error recovery.', color: 'bg-sky-500/40' },
    { layer: 3, name: 'Network', desc: 'IP, ICMP. Routing and logical addressing.', color: 'bg-sky-500/50' },
    { layer: 2, name: 'Data Link', desc: 'Ethernet, MAC addresses. Physical addressing.', color: 'bg-sky-500/60' },
    { layer: 1, name: 'Physical', desc: 'Cables, hubs, bits. The raw electrical signal.', color: 'bg-sky-500/70' },
  ];

  const protocols = [
    { name: 'TCP/IP', desc: 'The fundamental suite of protocols for internet communication.', icon: Globe },
    { name: 'DNS', desc: 'Domain Name System: translating human names to IP addresses.', icon: Search },
    { name: 'HTTP/S', desc: 'Hypertext Transfer Protocol: the foundation of the web.', icon: Globe },
    { name: 'DHCP', desc: 'Dynamic Host Configuration Protocol: automatic IP assignment.', icon: Cpu },
    { name: 'BGP', desc: 'Border Gateway Protocol: the routing protocol of the internet.', icon: Activity },
    { name: 'VPN', desc: 'Virtual Private Network: secure tunnels over public networks.', icon: Shield },
  ];

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto space-y-20 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-sky-500/10 rounded-2xl">
            <Globe className="text-sky-400" size={36} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Networking & Infrastructure</h1>
        </div>
        
        <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
          Understanding the invisible threads that connect the world. From the physical layer of fiber optics 
          to the complex routing protocols that power the global internet.
        </p>
      </motion.div>

      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
          <Layers size={32} className="text-sky-400" />
          The OSI Model
        </h2>
        <div className="space-y-3">
          {osiLayers.map((l) => (
            <div key={l.layer} className={`${l.color} p-6 rounded-2xl border border-white/5 flex items-center gap-8 group hover:border-sky-500/30 transition-all`}>
              <span className="text-3xl font-black text-white/20 group-hover:text-sky-400 transition-colors w-12">{l.layer}</span>
              <div>
                <h4 className="text-white font-bold text-lg">{l.name}</h4>
                <p className="text-slate-500 text-sm">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
          <Zap size={32} className="text-sky-400" />
          Core Protocols
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((p, i) => (
            <div key={i} className="glass-card p-8 hover:bg-white/[0.03] transition-all border-white/5">
              <p.icon className="text-sky-400 mb-6" size={28} />
              <h4 className="font-bold text-white text-lg mb-3 tracking-tight">{p.name}</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-10 bg-sky-500/[0.02] border border-sky-500/10">
        <h2 className="text-3xl font-bold text-sky-400 mb-6 flex items-center gap-3 tracking-tight">
          <Server size={32} />
          The Modern Web Stack
        </h2>
        <p className="text-slate-400 leading-relaxed text-lg font-medium">
          Modern infrastructure relies on virtualization, containerization (Docker/K8s), and cloud-native 
          architectures. The shift from physical servers to serverless functions and edge computing 
          has revolutionized how we build and deploy global applications.
        </p>
      </section>
    </div>
  );
};

export default NetworkingSection;
