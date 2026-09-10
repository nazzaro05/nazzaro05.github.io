import React from 'react';
import { motion } from 'motion/react';
import { Shield, Terminal, Lock, Eye, Zap, Search, Globe, Cpu, Layers, ShieldCheck, Database, Code, Activity } from 'lucide-react';

const CyberSection = () => (
  <div className="pt-32 px-6 max-w-5xl mx-auto space-y-20 pb-20">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-sky-500/10 rounded-2xl">
          <Shield className="text-sky-400" size={36} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Cybersecurity & Pentesting</h1>
      </div>
      
      <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
        Cybersecurity is more than a profession; it's a mindset. In an increasingly connected world, 
        understanding how systems are attacked is the only way to defend them effectively. 
        We leverage advanced tools and specialized operating systems like <strong className="text-sky-400">Parrot OS</strong> for professional security audits.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="glass-card p-8 border-t-2 border-sky-500/30">
        <Eye className="text-sky-400 mb-6" size={32} />
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">OSINT</h3>
        <p className="text-slate-500 text-sm leading-relaxed">Open Source Intelligence: gathering information from public sources to map the attack surface and identify potential entry points.</p>
      </div>
      <div className="glass-card p-8 border-t-2 border-emerald-500/30">
        <Lock className="text-emerald-400 mb-6" size={32} />
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">Cryptography</h3>
        <p className="text-slate-500 text-sm leading-relaxed">The study of secure communication techniques, ensuring data confidentiality, integrity, and authenticity through advanced algorithms.</p>
      </div>
      <div className="glass-card p-8 border-t-2 border-purple-500/30">
        <Terminal className="text-purple-400 mb-6" size={32} />
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">Exploitation</h3>
        <p className="text-slate-500 text-sm leading-relaxed">Identifying and leveraging software vulnerabilities to demonstrate critical security flaws and assess potential impact.</p>
      </div>
    </div>

    <section className="space-y-10">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
            <Cpu size={32} className="text-sky-400" />
            Why Parrot OS?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Parrot Security OS is a Debian-based Linux distribution with a core focus on computer security. 
            It is designed to be lightweight, secure, and fully portable. Unlike other distros, 
            Parrot includes development and privacy tools out-of-the-box, making it the ideal choice for "Red Teamers" and security researchers.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Hardened Kernel for enhanced security",
              "Integrated Anonsurf for total anonymity",
              "Firejail Sandboxing for all applications",
              "Full support for software development",
              "Lightweight MATE and KDE versions",
              "Cloud-ready for remote pentesting"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-80 glass-card p-8 bg-sky-500/[0.02] border-sky-500/10">
          <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-6">Security Mindset</h4>
          <p className="text-sm text-slate-500 leading-relaxed italic font-medium">
            "A system is only as secure as its weakest link. Often, that link is the human being through social engineering."
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
        <Terminal size={32} className="text-sky-500" />
        Advanced Security Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="glass-card p-10 group hover:border-sky-500/20 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-sky-400" size={28} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Anonsurf</h3>
          </div>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed font-medium">
            Parrot's signature anonymity module. It reroutes all system traffic through the Tor network, cleans traces left in the system, and closes dangerous applications that could expose your true IP.
          </p>
          <div className="bg-slate-950 p-6 rounded-2xl font-mono text-xs text-emerald-500 border border-white/5 shadow-inner">
            <p className="opacity-50"># sudo anonsurf start</p>
            <p className="mt-2 text-sky-400 font-bold">[+] Iptables rules updated</p>
            <p className="font-bold">[+] Tor service started</p>
            <p className="font-bold">[+] Your IP is now hidden</p>
          </div>
        </div>

        <div className="glass-card p-10 group hover:border-sky-500/20 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <Search className="text-sky-400" size={28} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Nmap</h3>
          </div>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed font-medium">
            Network Mapper: the industry standard for network discovery. Essential for uncovering open ports, vulnerable services, and remote operating systems with precision.
          </p>
          <div className="bg-slate-950 p-6 rounded-2xl font-mono text-xs text-emerald-500 border border-white/5 shadow-inner">
            <p className="opacity-50"># nmap -sC -sV -oA scan_results target_ip</p>
            <p className="mt-2 text-sky-400 font-bold">PORT   STATE SERVICE VERSION</p>
            <p className="font-bold">80/tcp open  http    Apache 2.4.41</p>
            <p className="font-bold">22/tcp open  ssh     OpenSSH 8.2p1</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Metasploit", desc: "The world's most used framework for developing and executing exploit code." },
          { icon: Globe, title: "Burp Suite", desc: "An intercepting proxy for testing the security of modern web applications." },
          { icon: Search, title: "Wireshark", desc: "A network protocol analyzer for deep packet inspection and traffic monitoring." },
          { icon: Lock, title: "John the Ripper", desc: "A powerful password cracking tool for credential auditing and recovery." },
          { icon: Shield, title: "Social Engineering", desc: "Tools like SET for testing the human factor and phishing resilience." },
          { icon: Layers, title: "Ghidra", desc: "A reverse engineering suite developed by the NSA for malware analysis." },
          { icon: Terminal, title: "Aircrack-ng", desc: "A complete suite for auditing wireless networks and WPA/WPA2 cracking." },
          { icon: Search, title: "Maltego", desc: "An OSINT tool for link analysis and mapping entity relationships." },
          { icon: ShieldCheck, title: "Sqlmap", desc: "Automating the detection and exploitation of SQL injection flaws." },
        ].map((tool, idx) => (
          <div key={idx} className="glass-card p-8 hover:bg-white/[0.03] transition-all border-white/5">
            <tool.icon className="text-sky-400 mb-6" size={28} />
            <h4 className="font-bold text-white text-lg mb-3 tracking-tight">{tool.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
        <Layers size={32} className="text-sky-500" />
        Getting Started with Parrot
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">1. Installation</h3>
          <p className="text-slate-400 text-base leading-relaxed font-medium">
            Download the official ISO from <a href="https://parrotsec.org" target="_blank" className="text-sky-400 hover:underline font-bold">parrotsec.org</a>. 
            Choose the <strong>Security Edition</strong> for the full toolset. 
            We recommend starting in a Virtual Machine (VirtualBox or VMware) for safety.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">2. System Update</h3>
          <p className="text-slate-400 text-base leading-relaxed font-medium">
            Once installed, open the terminal and ensure everything is updated to the latest stable version.
          </p>
          <div className="bg-slate-950 p-6 rounded-2xl font-mono text-xs text-sky-400 border border-white/5 shadow-inner">
            <p className="font-bold">sudo apt update && sudo apt full-upgrade</p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">3. Privacy Config</h3>
          <p className="text-slate-400 text-base leading-relaxed font-medium">
            Activate Anonsurf to protect your browsing and use the default browser pre-configured with security extensions.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">4. Explore the Tools</h3>
          <p className="text-slate-400 text-base leading-relaxed font-medium">
            The Parrot menu is organized by category (Information Gathering, Vulnerability Analysis, etc.). 
            Start by exploring the Information Gathering tools to map your targets.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white flex items-center gap-4 tracking-tight">
        <Shield size={32} className="text-red-500" />
        Common Attack Vectors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Phishing', desc: 'Deceptive messages designed to trick users into revealing sensitive information or installing malware.', icon: Globe },
          { title: 'SQL Injection', desc: 'Injecting malicious SQL queries into input fields to manipulate or steal data from a database.', icon: Database },
          { title: 'Cross-Site Scripting (XSS)', desc: 'Injecting malicious scripts into trusted websites to steal user cookies or session tokens.', icon: Code },
          { title: 'Man-in-the-Middle (MitM)', desc: 'Intercepting and potentially altering communications between two parties without their knowledge.', icon: Activity },
          { title: 'Brute Force', desc: 'Systematically trying all possible password combinations until the correct one is found.', icon: Lock },
          { title: 'DDoS', desc: 'Overwhelming a target server or network with a flood of internet traffic to disrupt service.', icon: Zap },
        ].map((attack, i) => (
          <div key={i} className="glass-card p-8 border-l-4 border-red-500/20 hover:bg-red-500/[0.02] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <attack.icon className="text-red-400" size={24} />
              <h4 className="text-xl font-bold text-white">{attack.title}</h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{attack.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="glass-card p-10 bg-sky-500/[0.02] border border-sky-500/10">
      <h2 className="text-3xl font-bold text-sky-400 mb-6 flex items-center gap-3 tracking-tight">
        <ShieldCheck className="text-sky-400" size={32} />
        Ethics & Legality
      </h2>
      <p className="text-slate-400 leading-relaxed text-lg font-medium">
        Cybersecurity skills must be used exclusively for ethical and legal purposes. 
        Accessing systems without authorization is a criminal offense. 
        A true hacker protects the network and contributes to the security of the community.
      </p>
    </section>
  </div>
);


export default CyberSection;
