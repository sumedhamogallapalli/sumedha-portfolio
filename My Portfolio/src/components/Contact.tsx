import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, FileCode, CheckCircle, Trash, Lock } from 'lucide-react';
import { personalInfo } from '../data';
import { Message, ThemePreset } from '../types';

interface ContactProps {
  currentTheme: ThemePreset;
}

export default function Contact({ currentTheme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);

  // Load existing local messages on mount
  useEffect(() => {
    const saved = localStorage.getItem('sumedha_portfolio_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-800';
    }
  };

  const getThemeBtnClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-500 text-white';
      case 'emerald': return 'bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold';
      case 'amber': return 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold';
      case 'crimson': return 'bg-rose-600 hover:bg-rose-500 text-white';
      default: return 'bg-slate-900 hover:bg-slate-800 text-white';
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderName: name,
      senderEmail: email,
      messageText: text,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('sumedha_portfolio_messages', JSON.stringify(updated));

    // Clear form inputs
    setName('');
    setEmail('');
    setText('');

    // Trigger visual success notification
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('sumedha_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 bg-slate-50/20 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get In <span className={getThemeTextClass()}>Touch</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            I am open to summer internships, junior full-stack developer roles, or collaboration queries. Drop a line below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Column 1: Core details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-6 shadow-sm">
              <h3 className="text-base font-bold font-sans text-slate-800 flex items-center gap-2">
                <MessageSquare size={16} className={getThemeTextClass()} /> Contact Channels
              </h3>

              <div className="space-y-4 font-sans text-xs">
                {/* Email link */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-350 transition-all group shadow-sm"
                >
                  <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 transition-colors shrink-0 shadow-inner">
                    <Mail size={14} />
                  </div>
                  <div className="space-y-0.5 min-w-0 text-left">
                    <p className="font-bold text-slate-400 uppercase text-[9px]">Direct Email</p>
                    <p className="text-slate-700 font-bold group-hover:text-indigo-650 transition-colors truncate font-mono">{personalInfo.email}</p>
                  </div>
                </a>

                {/* Phone link */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-350 transition-all group shadow-sm"
                >
                  <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 transition-colors shrink-0 shadow-inner">
                    <Phone size={14} />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className="font-bold text-slate-400 uppercase text-[9px]">Call / Mobile</p>
                    <p className="text-slate-700 font-bold group-hover:text-indigo-650 transition-colors font-mono">{personalInfo.phone}</p>
                  </div>
                </a>

                {/* Location Map */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 shrink-0 shadow-inner">
                    <MapPin size={14} />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className="font-bold text-slate-400 uppercase text-[9px]">Location Base</p>
                    <p className="text-slate-700 font-bold">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social row */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-2.5 text-left">Candidate Social Ports</p>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-350 text-slate-500 hover:text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <Linkedin size={13} className="text-indigo-650" /> LinkedIn
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-350 text-slate-500 hover:text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <Github size={13} className="text-slate-800" /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Admin toggle */}
            <div className="text-center">
              <button
                id="contact-admin-toggle"
                onClick={() => setShowAdmin(!showAdmin)}
                className="text-[10px] font-mono text-slate-400 hover:text-slate-600 inline-flex items-center gap-1 hover:underline cursor-pointer font-bold uppercase tracking-wider"
              >
                <Lock size={9} /> {showAdmin ? 'Hide' : 'Show'} Submitted Messages Dashboard
              </button>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-name" className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 transition-colors font-medium shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-1 text-left">
                    <label htmlFor="contact-email" className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 transition-colors font-medium shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="contact-message" className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Message Text</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Type your recruitment inquiry or project details here..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 transition-colors resize-none font-medium shadow-sm"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-sm ${getThemeBtnClass()} cursor-pointer`}
                >
                  <Send size={13} /> Send Secure Message
                </button>
              </form>

              {/* Form submit response toast */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center gap-3.5 p-6 text-center animate-fade-in z-20"
                  >
                    <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-sm">
                      <CheckCircle size={18} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-extrabold text-slate-800">Message Dispatched!</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-sm">
                        Thank you! Your inquiry was successfully queued in <strong className="text-slate-800">Sumedha's local resume dashboard</strong> below. You can toggle the admin panel to view it!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Local submissions audit panel */}
        <AnimatePresence>
          {showAdmin && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-8 border-t border-slate-200 pt-8 max-w-4xl mx-auto overflow-hidden text-left font-mono text-xs"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-sans">
                    🛡️ Admin Logs: Incoming Local Messages ({messages.length})
                  </span>
                  <span className="text-[9px] bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full uppercase font-bold">
                    Sandbox Mode
                  </span>
                </div>

                {messages.length === 0 ? (
                  <p className="text-slate-400 text-xs py-4 text-center font-sans font-medium">No messages submitted on this local browser session yet. Send one above to populate this log!</p>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {messages.map(msg => (
                      <div key={msg.id} className="bg-white border border-slate-150 p-3.5 rounded-xl space-y-2 flex justify-between items-start shadow-sm">
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 text-[10px]">
                            <span className="text-slate-800 font-extrabold font-sans">{msg.senderName}</span>
                            <span className="text-slate-300">|</span>
                            <span className="text-indigo-650 font-bold">{msg.senderEmail}</span>
                            <span className="text-slate-300">|</span>
                            <span className="text-slate-400 font-bold text-[9px]">{msg.timestamp}</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed pt-0.5 font-sans whitespace-pre-line text-xs font-medium">
                            {msg.messageText}
                          </p>
                        </div>
                        <button
                          id={`msg-delete-${msg.id}`}
                          onClick={() => deleteMessage(msg.id)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                          title="Delete message"
                        >
                          <Trash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
