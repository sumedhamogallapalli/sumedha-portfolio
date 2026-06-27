import { motion } from 'motion/react';
import { Award, ShieldCheck, FileSpreadsheet, Code2, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsList } from '../data';
import { ThemePreset } from '../types';

interface CertificationsProps {
  currentTheme: ThemePreset;
}

export default function Certifications({ currentTheme }: CertificationsProps) {
  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-850';
    }
  };

  const getThemeAccentClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-700 bg-indigo-50 border-indigo-100';
      case 'emerald': return 'text-emerald-700 bg-emerald-50 border-emerald-100';
      case 'amber': return 'text-amber-700 bg-amber-50 border-amber-100';
      case 'crimson': return 'text-rose-700 bg-rose-50 border-rose-100';
      default: return 'text-slate-800 bg-slate-100 border-slate-200';
    }
  };

  const getCertIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('hacking') || t.includes('ethical')) return <ShieldCheck className="text-red-500" size={18} />;
    if (t.includes('power bi') || t.includes('dashboard')) return <FileSpreadsheet className="text-amber-500" size={18} />;
    if (t.includes('hackerrank') || t.includes('problem solving')) return <Code2 className="text-emerald-600" size={18} />;
    return <Award className="text-indigo-600" size={18} />;
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-250 bg-slate-50/40 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Certifications & <span className={getThemeTextClass()}>Workshops</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            Verified accomplishments, industry accreditations, and active hands-on internship programs.
          </p>
        </div>

        {/* Certifications Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsList.map((cert, idx) => {
            const isInternship = cert.title.toLowerCase().includes('internship');
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border rounded-2xl p-6 hover:border-slate-300 transition-all duration-300 shadow-sm relative overflow-hidden flex flex-col justify-between group ${
                  isInternship 
                    ? 'border-indigo-300 bg-indigo-50/5 md:col-span-2 shadow-sm' 
                    : 'border-slate-200'
                }`}
              >
                {/* Decorative Internship Banner */}
                {isInternship && (
                  <div className="absolute top-0 right-0 bg-indigo-600/10 text-indigo-700 text-[9px] font-mono font-bold tracking-widest uppercase py-1.5 px-4 rounded-bl-xl border-l border-b border-indigo-200 shadow-sm">
                    Featured Internship
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top section */}
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {getCertIcon(cert.title)}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1 font-bold">
                        <Calendar size={10} /> {cert.period}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-800 group-hover:text-indigo-650 transition-colors font-sans">
                        {cert.title}
                      </h3>
                      <p className={`text-xs font-bold ${getThemeTextClass()}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-medium font-sans">
                    {cert.description}
                  </p>

                  {/* Expand on Internship Specific Worksheets */}
                  {isInternship && (
                    <div className="bg-white border border-slate-200 p-4.5 rounded-xl space-y-3 mt-2 shadow-sm">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Key Project Modules Crafted</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                        <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-150 hover:border-slate-200">
                          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 size={11} className="text-emerald-500 shrink-0" /> Weather Analytics
                          </p>
                          <p className="text-[10px] text-slate-500 leading-relaxed">Engineered Python scripts aggregating multi-city meteorological APIs into statistical tabular reports.</p>
                        </div>
                        
                        <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-150 hover:border-slate-200">
                          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 size={11} className="text-emerald-500 shrink-0" /> AI Natural Chatbot
                          </p>
                          <p className="text-[10px] text-slate-500 leading-relaxed">Developed a terminal conversational agent parsing string structures for customized prompt replies.</p>
                        </div>

                        <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-150 hover:border-slate-200">
                          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 size={11} className="text-emerald-500 shrink-0" /> Automated Report Engine
                          </p>
                          <p className="text-[10px] text-slate-500 leading-relaxed">Programmed PDF/CSV generation processes dynamically parsing relational lists using python tools.</p>
                        </div>

                        <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-150 hover:border-slate-200">
                          <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 size={11} className="text-emerald-500 shrink-0" /> Spam Classifier
                          </p>
                          <p className="text-[10px] text-slate-500 leading-relaxed">Wrote machine learning pipelines evaluating corpus weights using basic NLP classifiers.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Link footer */}
                {cert.link && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">Credential active</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs font-bold flex items-center gap-1 hover:underline ${getThemeTextClass()}`}
                    >
                      Verify Credentials <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
