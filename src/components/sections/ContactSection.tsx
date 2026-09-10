import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactSection = () => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const t = {
    en: {
      title: 'Contact Me',
      desc: 'Have a question or want to work together? Leave me a message below.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: 'Thanks for reaching out. I will get back to you as soon as possible.',
      sendAnother: 'Send another message'
    },
    it: {
      title: 'Contatti',
      desc: 'Hai una domanda o vuoi collaborare? Lasciami un messaggio qui sotto.',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Messaggio',
      sending: 'Invio in corso...',
      successTitle: 'Messaggio Inviato!',
      successDesc: 'Grazie per avermi contattato. Ti risponderò il prima possibile.',
      sendAnother: 'Invia un altro messaggio'
    }
  };

  const content = t[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for the contact form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="pt-32 px-6 max-w-3xl mx-auto pb-32"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{content.title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          {content.desc}
        </p>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 relative overflow-hidden">
        {isSent ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{content.successTitle}</h3>
            <p className="text-slate-400 mb-8 max-w-md">{content.successDesc}</p>
            <button
              onClick={() => setIsSent(false)}
              className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
            >
              {content.sendAnother}
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">{content.name}</label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">{content.email}</label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">{content.message}</label>
              <textarea
                id="message"
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all disabled:opacity-50 resize-none"
                placeholder="..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:bg-slate-200 font-medium rounded-xl px-6 py-4 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} /> {content.send}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactSection;
