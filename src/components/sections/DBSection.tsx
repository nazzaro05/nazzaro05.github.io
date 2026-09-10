import React from 'react';
import { motion } from 'motion/react';
import { Database, Server, Cloud, Zap, Shield, Search, Cpu, Globe, Table, Layers, ShieldCheck } from 'lucide-react';

const DBSection = () => {
  const dbTypes = [
    {
      title: 'Relational (SQL)',
      icon: Table,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      desc: 'Structured data with predefined schemas. Ideal for complex queries and transactional integrity (ACID compliance).',
      examples: ['PostgreSQL', 'MySQL', 'MariaDB'],
      details: 'Relational databases use tables to store data and SQL for querying. They are the backbone of financial systems and traditional enterprise applications where data consistency is paramount.'
    },
    {
      title: 'NoSQL (Document)',
      icon: Layers,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      desc: 'Flexible, schema-less data storage. Perfect for rapid development and handling unstructured data at scale.',
      examples: ['MongoDB', 'CouchDB', 'Firestore'],
      details: 'NoSQL databases prioritize scalability and flexibility. They are excellent for content management, real-time analytics, and applications with evolving data structures.'
    },
    {
      title: 'Cloud Native',
      icon: Cloud,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      desc: 'Fully managed, globally distributed databases designed for high availability and zero maintenance.',
      examples: ['DynamoDB', 'CosmosDB', 'Spanner'],
      details: 'Built for the modern web, these databases offer automatic scaling, multi-region replication, and pay-as-you-go pricing models, removing the burden of server management.'
    },
    {
      title: 'Vector Databases',
      icon: Zap,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      desc: 'Optimized for storing and searching high-dimensional vectors. The engine behind modern AI and LLMs.',
      examples: ['Pinecone', 'Milvus', 'Weaviate'],
      details: 'Vector databases enable semantic search and long-term memory for AI models by performing efficient similarity searches across millions of data points represented as vectors.'
    }
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-xs font-black uppercase tracking-widest mb-6">
          <Database size={14} />
          Data Architecture
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">Database Systems</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
          From traditional relational models to high-performance vector stores for AI. 
          Explore the technologies that power modern data-driven applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {dbTypes.map((type, idx) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 group hover:border-purple-500/20 transition-all"
          >
            <div className="flex items-start justify-between mb-8">
              <div className={`p-4 ${type.bg} rounded-2xl group-hover:scale-110 transition-transform`}>
                <type.icon className={type.color} size={32} />
              </div>
              <div className="flex gap-2">
                {type.examples.map(ex => (
                  <span key={ex} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{type.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed font-medium">{type.desc}</p>
            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-slate-500 leading-relaxed italic">
                {type.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-10 bg-purple-500/[0.02]">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Shield className="text-purple-400" />
            ACID vs. BASE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-purple-400 font-black uppercase tracking-widest text-xs">ACID (SQL)</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Atomicity, Consistency, Isolation, Durability. Guarantees that database transactions are processed reliably. If any part of a transaction fails, the entire transaction fails.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Strict Consistency</li>
                <li>• Complex Joins</li>
                <li>• Vertical Scaling</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-emerald-400 font-black uppercase tracking-widest text-xs">BASE (NoSQL)</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Basically Available, Soft state, Eventual consistency. Prioritizes availability and scalability over immediate consistency. Data will eventually be consistent across all nodes.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Eventual Consistency</li>
                <li>• High Availability</li>
                <li>• Horizontal Scaling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 bg-sky-500/[0.02]">
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Globe className="text-sky-400" />
            Security
          </h3>
          <div className="space-y-6">
            <div className="p-4 bg-white/5 rounded-2xl">
              <h4 className="text-white text-sm font-bold mb-2">Encryption at Rest</h4>
              <p className="text-xs text-slate-500">Protecting data stored on disks using AES-256 or similar standards.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl">
              <h4 className="text-white text-sm font-bold mb-2">RBAC</h4>
              <p className="text-xs text-slate-500">Role-Based Access Control ensures users only see what they need.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl">
              <h4 className="text-white text-sm font-bold mb-2">Audit Logs</h4>
              <p className="text-xs text-slate-500">Tracking every query and modification for compliance and security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBSection;
