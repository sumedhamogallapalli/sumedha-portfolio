import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ArrowRight, Sparkles, FileCode } from 'lucide-react';
import { personalInfo } from '../data';
import { ThemePreset } from '../types';
// @ts-ignore
import defaultPhoto from './sumedha_portrait.jpg';

interface HeroProps {
  currentTheme: ThemePreset;
  userPhoto: string | null;
}

export default function Hero({ currentTheme, userPhoto }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  // Theme styling helpers
  const getThemeAccentClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-700 bg-indigo-55/60 border-indigo-100/80';
      case 'emerald': return 'text-emerald-700 bg-emerald-55/60 border-emerald-100/80';
      case 'amber': return 'text-amber-700 bg-amber-55/60 border-amber-100/80';
      case 'crimson': return 'text-rose-700 bg-rose-55/60 border-rose-100/80';
      default: return 'text-slate-700 bg-slate-100/80 border-slate-200';
    }
  };

  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-600';
      case 'emerald': return 'text-emerald-600';
      case 'amber': return 'text-amber-600';
      case 'crimson': return 'text-rose-600';
      default: return 'text-slate-800';
    }
  };

  const getThemeGlowClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'shadow-indigo-100 ring-indigo-50/50';
      case 'emerald': return 'shadow-emerald-100 ring-emerald-50/50';
      case 'amber': return 'shadow-amber-100 ring-amber-50/50';
      case 'crimson': return 'shadow-rose-100 ring-rose-50/50';
      default: return 'shadow-slate-100 ring-slate-100/50';
    }
  };

  const getThemeBtnPrimary = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-700 text-white';
      case 'emerald': return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'amber': return 'bg-amber-600 hover:bg-amber-700 text-white';
      case 'crimson': return 'bg-rose-600 hover:bg-rose-700 text-white';
      default: return 'bg-slate-900 hover:bg-slate-800 text-white';
    }
  };

  const getThemeBtnSecondary = () => {
    switch (currentTheme) {
      case 'indigo': return 'border-indigo-200 hover:border-indigo-300 text-indigo-600 bg-indigo-50/10 hover:bg-indigo-50/45';
      case 'emerald': return 'border-emerald-200 hover:border-emerald-300 text-emerald-700 bg-emerald-50/10 hover:bg-emerald-50/45';
      case 'amber': return 'border-amber-200 hover:border-amber-300 text-amber-700 bg-amber-50/10 hover:bg-amber-50/45';
      case 'crimson': return 'border-rose-200 hover:border-rose-300 text-rose-700 bg-rose-50/10 hover:bg-rose-50/45';
      default: return 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50';
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden no-print">
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-8 transition-all duration-700 ${
          currentTheme === 'indigo' ? 'bg-indigo-600' :
          currentTheme === 'emerald' ? 'bg-emerald-600' :
          currentTheme === 'amber' ? 'bg-amber-600' :
          currentTheme === 'crimson' ? 'bg-rose-600' : 'bg-slate-400'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 transition-all duration-700 ${
          currentTheme === 'indigo' ? 'bg-purple-600' :
          currentTheme === 'emerald' ? 'bg-teal-600' :
          currentTheme === 'amber' ? 'bg-yellow-600' :
          currentTheme === 'crimson' ? 'bg-red-600' : 'bg-slate-300'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getThemeAccentClass()}`}>
                <Sparkles size={11} className="animate-spin-slow" /> GATE 2026 QUALIFIED (SCORE: 350)
              </span>
            </motion.div>

            <div className="space-y-3">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-400 font-sans text-xs font-bold tracking-widest uppercase"
              >
                Welcome to my digital workspace
              </motion.h3>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Hi, I am <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  currentTheme === 'indigo' ? 'from-indigo-600 to-indigo-800' :
                  currentTheme === 'emerald' ? 'from-emerald-600 to-teal-700' :
                  currentTheme === 'amber' ? 'from-amber-600 to-yellow-700' :
                  currentTheme === 'crimson' ? 'from-rose-600 to-red-700' : 'from-slate-700 to-slate-950'
                }`}>{personalInfo.name}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl font-semibold text-slate-700 leading-relaxed font-sans flex flex-wrap items-center gap-x-2"
              >
                <span>{personalInfo.title}</span>
                <span className="text-slate-300">|</span>
                <span className={getThemeTextClass()}>{personalInfo.subtitle}</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl font-medium"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Quick Contact & Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs"
            >
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-all bg-white border border-slate-200 hover:border-slate-300 p-2 rounded-xl shadow-sm shadow-slate-100/50 group">
                <div className="h-7 w-7 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 group-hover:text-slate-800 transition-colors">
                  <Mail size={12} />
                </div>
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-all bg-white border border-slate-200 hover:border-slate-300 p-2 rounded-xl shadow-sm shadow-slate-100/50 group">
                <div className="h-7 w-7 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 group-hover:text-slate-800 transition-colors">
                  <Phone size={12} />
                </div>
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-600 bg-white border border-slate-200 p-2 rounded-xl shadow-sm shadow-slate-100/50 col-span-1 sm:col-span-2">
                <div className="h-7 w-7 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500">
                  <MapPin size={12} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a
                href="#projects"
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-md hover:scale-102 hover:shadow-lg duration-300 ${getThemeBtnPrimary()}`}
              >
                Interactive Project Sandbox <ArrowRight size={13} />
              </a>
              <a
                href="#contact"
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full border transition-all duration-300 hover:scale-102 ${getThemeBtnSecondary()}`}
              >
                Get In Touch <Mail size={13} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Connect:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm hover:shadow transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm hover:shadow transition-all"
                title="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm hover:shadow transition-all"
                title="HackerRank Profile"
              >
                <FileCode size={15} />
              </a>
            </motion.div>

          </div>

          {/* Profile Photo / Tech Fallback Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Spinning/floating decorative elements */}
              <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-15 animate-pulse transition-all duration-700 ${
                currentTheme === 'indigo' ? 'bg-indigo-500' :
                currentTheme === 'emerald' ? 'bg-emerald-500' :
                currentTheme === 'amber' ? 'bg-amber-500' :
                currentTheme === 'crimson' ? 'bg-rose-500' : 'bg-slate-400'
              }`} />

              <div className={`relative h-72 w-72 sm:h-80 sm:w-80 rounded-3xl overflow-hidden border bg-white p-2.5 ring-4 transition-all duration-500 ${getThemeGlowClass()} border-slate-200 shadow-xl`}>
                <div className="h-full w-full rounded-2xl overflow-hidden relative group">
                  {!imageError ? (
                    <img
                      src={userPhoto || defaultPhoto}
                      alt="Sumedha Mogallapalli"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-150 text-slate-800">
                      <span className="text-6xl font-bold font-sans tracking-wide mb-1 text-slate-700">SM</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">AI & ML Engineer</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
                    <p className="text-white font-semibold text-sm leading-tight">{personalInfo.name}</p>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
