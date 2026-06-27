import { motion } from 'motion/react';
import { GraduationCap, Trophy, Sparkles, BookOpen, Heart, Languages, Target } from 'lucide-react';
import { educationList, personalInfo } from '../data';
import { ThemePreset } from '../types';

interface AboutProps {
  currentTheme: ThemePreset;
}

export default function About({ currentTheme }: AboutProps) {
  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-850';
    }
  };

  const getThemeIconBg = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'amber': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'crimson': return 'bg-rose-50 text-rose-700 border-rose-100';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getThemeTimelineLine = () => {
    return 'bg-slate-200';
  };

  const getThemeTimelineDot = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 ring-indigo-100';
      case 'emerald': return 'bg-emerald-600 ring-emerald-100';
      case 'amber': return 'bg-amber-600 ring-amber-100';
      case 'crimson': return 'bg-rose-600 ring-rose-100';
      default: return 'bg-slate-500 ring-slate-100';
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-250 bg-white relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            About <span className={getThemeTextClass()}>Myself</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            A cohesive view of my academic milestones, personal drivers, and core goals in the field of engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Core Metrics & Highlights (Bento cards) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Bento Card: GATE qualification */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden group flex-1 shadow-sm"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border ${getThemeIconBg()}`}>
                  <Trophy size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">GATE 2026 Qualified</h4>
                  <p className="text-xl font-bold text-slate-900 font-sans">GATE Score: 350</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Verified national-level aptitude in core Computer Science concepts including algorithms, system programming, DBMS, and network topologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card: Academic Credentials */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden group flex-1 mt-6 shadow-sm"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border ${getThemeIconBg()}`}>
                  <GraduationCap size={18} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Scholastic Records</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">B.Tech CGPA</p>
                      <p className="text-base font-bold text-slate-900 font-mono">8.92 CGPA</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Diploma %</p>
                      <p className="text-base font-bold text-slate-900 font-mono">95.08%</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Maintained high rankings and honors across both standard degree programs and professional engineering diplomas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card: Extra details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Languages */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-700">
                  <Languages size={14} className={getThemeTextClass()} />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Languages</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 font-medium">
                  {personalInfo.languages.map((lang, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interests */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-700">
                  <Heart size={14} className={getThemeTextClass()} />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Interests</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 font-medium">
                  {personalInfo.interests.map((interest, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Column 2: Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <BookOpen size={18} className={getThemeTextClass()} />
              <h3 className="text-lg font-bold font-sans text-slate-900">Academic Milestones</h3>
            </div>

            {/* Timeline layout */}
            <div className="relative pl-6 sm:pl-8 space-y-10">
              {/* Center Line */}
              <div className={`absolute left-2 top-2 bottom-2 w-0.5 rounded ${getThemeTimelineLine()}`} />

              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[22px] sm:-left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-125 ring-4 ${getThemeTimelineDot()}`} />

                  {/* Card Content */}
                  <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm shadow-slate-100/50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{edu.period}</span>
                      <span className="inline-block text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-mono self-start sm:self-center">
                        🏆 {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-650 transition-colors font-sans">
                      {edu.degree}
                    </h4>
                    
                    <p className={`text-xs font-semibold ${getThemeTextClass()} mt-1`}>
                      {edu.institution}
                    </p>
                    
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">
                      📍 {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
