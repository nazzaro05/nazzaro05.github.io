import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Globe, Code, BookOpen, Command, ChevronRight, Info, Zap } from 'lucide-react';

const LinuxSection = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const commands = [
    { cmd: 'ls', desc: 'List directory contents', example: 'ls -la' },
    { cmd: 'cd', desc: 'Change directory', example: 'cd /home/user' },
    { cmd: 'mkdir', desc: 'Make directory', example: 'mkdir my_project' },
    { cmd: 'rm', desc: 'Remove files or directories', example: 'rm -rf temp' },
    { cmd: 'cp', desc: 'Copy files or directories', example: 'cp file.txt backup.txt' },
    { cmd: 'mv', desc: 'Move or rename files', example: 'mv old.txt new.txt' },
    { cmd: 'chmod', desc: 'Change file permissions', example: 'chmod 755 script.sh' },
    { cmd: 'grep', desc: 'Search for patterns in files', example: 'grep "error" log.txt' },
    { cmd: 'sudo', desc: 'Execute command as superuser', example: 'sudo apt update' },
    { cmd: 'top', desc: 'Display system processes', example: 'top' },
    { cmd: 'ps', desc: 'Report a snapshot of current processes', example: 'ps aux' },
    { cmd: 'df', desc: 'Report file system disk space usage', example: 'df -h' },
    { cmd: 'free', desc: 'Display amount of free and used memory', example: 'free -m' },
    { cmd: 'ssh', desc: 'Secure shell remote login client', example: 'ssh user@host' },
    { cmd: 'curl', desc: 'Transfer data from or to a server', example: 'curl -O https://example.com/file' },
    { cmd: 'nano/vim', desc: 'Text editors for the terminal', example: 'nano config.txt' },
    { cmd: 'cat', desc: 'Concatenate and display file content', example: 'cat /etc/os-release' },
    { cmd: 'man', desc: 'Display the manual for a command', example: 'man grep' },
  ];

  const architectureLayers = [
    { title: 'User Space', desc: 'Where your applications (browsers, editors, shells) run. Isolated from the core for safety.', color: 'bg-emerald-500/10', icon: Globe },
    { title: 'Shell', desc: 'The command interpreter (Bash, Zsh) that translates user input into kernel instructions.', color: 'bg-emerald-500/20', icon: Terminal },
    { title: 'System Calls', desc: 'The bridge between user space and kernel space for resource requests.', color: 'bg-emerald-500/30', icon: Code },
    { title: 'Kernel', desc: 'The heart of the OS. Manages CPU, memory, device drivers, and file systems.', color: 'bg-emerald-500/40', icon: Cpu },
    { title: 'Hardware', desc: 'The physical components: Processor, RAM, Disk, and Network interfaces.', color: 'bg-emerald-500/50', icon: Zap },
  ];

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-emerald-500/10 rounded-2xl">
            <Terminal className="text-emerald-400" size={36} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Linux & Unix</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'intro', label: 'Introduction', icon: BookOpen },
              { id: 'history', label: 'History & Creators', icon: Globe },
              { id: 'architecture', label: 'Architecture', icon: Cpu },
              { id: 'commands', label: 'Essential Commands', icon: Command },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="glass-card p-10 min-h-[600px]">
              {activeTab === 'intro' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <h2 className="text-4xl font-black text-white tracking-tight">What is Linux?</h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    Linux is a family of open-source Unix-like operating systems based on the Linux kernel. 
                    It is the foundation of modern computing, powering everything from smartphones (Android) 
                    to the world's fastest supercomputers and the vast majority of the internet's servers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                      <h4 className="text-emerald-400 font-bold mb-2">Open Source</h4>
                      <p className="text-sm text-slate-500">The source code is freely available for anyone to view, modify, and distribute.</p>
                    </div>
                    <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                      <h4 className="text-emerald-400 font-bold mb-2">Multi-user</h4>
                      <p className="text-sm text-slate-500">Multiple users can access system resources simultaneously with strict permission controls.</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-6">Why use Linux?</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Security', desc: 'Granular permissions and rapid security patches make it highly resistant to malware.' },
                        { title: 'Stability', desc: 'Linux systems can run for years without needing a reboot, even under heavy load.' },
                        { title: 'Privacy', desc: 'Unlike proprietary OSs, Linux doesn\'t track your usage or sell your data.' },
                        { title: 'Customization', desc: 'You can change everything from the kernel to the desktop environment.' },
                      ].map((benefit, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                            <ChevronRight className="text-emerald-400" size={14} />
                          </div>
                          <div>
                            <span className="text-white font-bold block">{benefit.title}</span>
                            <span className="text-slate-500 text-sm">{benefit.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'history' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <h2 className="text-4xl font-black text-white tracking-tight">The Pioneers</h2>
                  <div className="space-y-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-3xl font-black text-emerald-400">LT</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Linus Torvalds</h3>
                        <p className="text-slate-400 leading-relaxed">
                          In 1991, while a student at the University of Helsinki, Linus Torvalds began developing the Linux kernel 
                          as a free alternative to the Minix operating system. Today, he remains the lead developer of the kernel.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-3xl font-black text-blue-400">UN</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Ken Thompson & Dennis Ritchie</h3>
                        <p className="text-slate-400 leading-relaxed">
                          The creators of the original Unix at Bell Labs in the late 1960s. Their work on Unix and the C programming 
                          language laid the architectural foundation for nearly all modern operating systems, including Linux and macOS.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'architecture' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <h2 className="text-4xl font-black text-white tracking-tight">System Layers</h2>
                  <div className="space-y-4">
                    {architectureLayers.map((layer, i) => (
                      <div key={i} className={`${layer.color} p-6 rounded-2xl border border-white/10 flex items-start gap-6 group hover:border-emerald-500/30 transition-all`}>
                        <div className="p-3 bg-white/5 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                          <layer.icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{layer.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{layer.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'commands' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <h2 className="text-4xl font-black text-white tracking-tight">The Terminal</h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    The command line is the most powerful tool in a Linux user's arsenal. 
                    Beyond simple commands, <strong>Shell Scripting</strong> allows you to automate complex tasks, 
                    manage system configurations, and process large amounts of data with ease.
                  </p>
                  <div className="bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                    <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <span className="text-[10px] text-slate-500 font-mono ml-2">bash — 80x24</span>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-4">
                      {commands.map((c, i) => (
                        <div key={i} className="group cursor-help">
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-bold">$ {c.cmd}</span>
                            <span className="text-slate-600">— {c.desc}</span>
                          </div>
                          <div className="hidden group-hover:block mt-1 text-slate-500 pl-5 italic">
                            Example: {c.example}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Distro Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-black text-white mb-10 tracking-tight">Popular Distributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ubuntu', desc: 'The most popular desktop Linux, known for ease of use.', color: 'border-orange-500/30' },
              { name: 'Debian', desc: 'The "Universal Operating System", known for stability.', color: 'border-red-500/30' },
              { name: 'Arch Linux', desc: 'A lightweight and flexible distro for advanced users.', color: 'border-blue-500/30' },
            ].map((distro, i) => (
              <div key={i} className={`glass-card p-8 border-t-4 ${distro.color} hover:translate-y-[-4px] transition-all`}>
                <h4 className="text-xl font-bold text-white mb-3">{distro.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{distro.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LinuxSection;
