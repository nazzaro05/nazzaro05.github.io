import React from 'react';
import { motion } from 'motion/react';
import { Server, Terminal, Network, ShieldAlert, Cpu, HardDrive } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const InfrastructureSection = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: 'Infrastructure & HomeLab',
      desc: 'I transformed an old laptop and unused SSDs into a fully functional private cloud. This self-hosted environment acts as my personal laboratory for container orchestration, reverse proxying, and Linux system administration.',
      containerTitle: 'Container Orchestration',
      containerDesc: 'Management of the containerization stack using Docker and Portainer. This allows me to deploy, isolate, and monitor local services efficiently.',
      securityTitle: 'Security Check',
      securityDesc: 'Container ports must not be exposed directly to the external network. Traffic is strictly routed through Nginx. Automated updates via Watchtower are evaluated carefully to prevent breaking changes.',
      proxyTitle: 'Reverse Proxy & Web Server',
      proxyDesc1: 'Nginx is configured to manage traffic routing towards various self-hosted services and web projects. Remote secure access is provided via a WireGuard VPN tunnel.',
      proxyDesc2: 'A centralized dashboard serves as the homepage, providing quick links to active services and study materials.',
      linuxTitle: 'Linux Administration & Shell',
      shellTitle: 'Shell Environment',
      shellDesc: 'Advanced Zsh configuration with a minimal and reactive prompt, strict user/root privilege management, and essential plugins.',
      hwTitle: 'Hardware Monitoring',
      hwDesc: 'Auto-mounting disks at boot via fstab. Hardware monitoring in real-time tracking CPU, RAM, and thermals using Conky.',
      fsTitle: 'Filesystem Optimization',
      fsDesc: 'Using NTFS limits POSIX native permissions (chmod/chown). For Docker volumes and Nginx roots, migrating to ext4 or btrfs is the optimal solution for reliability.'
    },
    it: {
      title: 'Infrastruttura & HomeLab',
      desc: 'Ho trasformato un vecchio laptop e degli SSD inutilizzati in un vero e proprio cloud privato. Questo ambiente self-hosted funge da laboratorio personale per l\'orchestrazione di container, reverse proxy e amministrazione di sistemi Linux.',
      containerTitle: 'Orchestrazione Container',
      containerDesc: 'Gestione dello stack di containerizzazione tramite Docker e Portainer. Mi permette di distribuire, isolare e monitorare i servizi locali in modo efficiente.',
      securityTitle: 'Verifica di Sicurezza',
      securityDesc: 'Le porte dei container non devono essere esposte direttamente alla rete esterna senza passare da Nginx. Policy di aggiornamento automatico (es. Watchtower) valutate attentamente per evitare vulnerabilità.',
      proxyTitle: 'Reverse Proxy & Web Server',
      proxyDesc1: 'Configurazione di Nginx per gestire il routing del traffico verso i vari servizi self-hosted e progetti web. Accesso remoto sicuro tramite tunnel VPN WireGuard.',
      proxyDesc2: 'Dashboard centralizzata come homepage per monitorare i servizi attivi e fornire link rapidi alle risorse.',
      linuxTitle: 'Amministrazione Linux & Ambiente Shell',
      shellTitle: 'Ambiente Shell',
      shellDesc: 'Personalizzazione avanzata di Zsh (prompt minimale/reattivo, gestione dei privilegi utente/root e configurazione plugin).',
      hwTitle: 'Monitoraggio Hardware',
      hwDesc: 'Configurazione del montaggio automatico all\'avvio di dischi via fstab. Setup di Conky per il tracciamento in tempo reale (CPU, RAM, dischi, temperature).',
      fsTitle: 'Ottimizzazione Filesystem',
      fsDesc: 'L\'uso di NTFS è un compromesso (limita i permessi POSIX). Per i volumi Docker o Nginx root, la migrazione a ext4 o btrfs risolverebbe problemi di permessi e affidabilità.'
    }
  };

  const content = t[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-32 px-6 max-w-5xl mx-auto pb-20 space-y-16"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">{content.title}</h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
          {content.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-sky-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <Server className="text-sky-400 mb-6" size={32} />
          <h3 className="text-xl font-semibold text-text-primary mb-3">{content.containerTitle}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {content.containerDesc}
          </p>
          <div className="bg-sky-500/5 p-4 rounded-xl border border-sky-500/10">
            <h4 className="text-sky-400 text-xs font-semibold uppercase mb-2 flex items-center gap-2">
              <ShieldAlert size={14}/> {content.securityTitle}
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              {content.securityDesc}
            </p>
          </div>
        </div>

        <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <Network className="text-emerald-400 mb-6" size={32} />
          <h3 className="text-xl font-semibold text-text-primary mb-3">{content.proxyTitle}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {content.proxyDesc1}
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            {content.proxyDesc2}
          </p>
        </div>
      </div>

      <div className="bg-bg-card border border-border-subtle rounded-2xl p-10">
        <div className="flex items-center gap-4 mb-8 border-b border-border-subtle pb-6">
          <Terminal className="text-purple-400" size={32} />
          <h2 className="text-2xl font-semibold text-text-primary">{content.linuxTitle}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="text-text-primary font-medium flex items-center gap-2">
              <Terminal size={16} className="text-text-muted"/> {content.shellTitle}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {content.shellDesc}
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-text-primary font-medium flex items-center gap-2">
              <Cpu size={16} className="text-text-muted"/> {content.hwTitle}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {content.hwDesc}
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-text-primary font-medium flex items-center gap-2">
              <HardDrive size={16} className="text-text-muted"/> {content.fsTitle}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {content.fsDesc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfrastructureSection;
