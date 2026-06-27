import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Laptop, Database, Sliders, LineChart, FileSpreadsheet, Eye } from 'lucide-react';
import { skillsList } from '../data';
import { Skill, ThemePreset } from '../types';

interface SkillsProps {
  currentTheme: ThemePreset;
}

export default function Skills({ currentTheme }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend-db', label: 'Backend & DBs' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'core', label: 'CS Foundations' }
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') return skillsList;
    if (activeTab === 'backend-db') {
      return skillsList.filter(s => s.category === 'backend' || s.category === 'databases');
    }
    if (activeTab === 'tools') {
      return skillsList.filter(s => s.category === 'tools' || s.category === 'visualization');
    }
    return skillsList.filter(s => s.category === activeTab);
  };

  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-800';
    }
  };

  const getThemeTabActive = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 text-white shadow-md shadow-indigo-100';
      case 'emerald': return 'bg-emerald-600 text-white shadow-md shadow-emerald-100';
      case 'amber': return 'bg-amber-600 text-white shadow-md shadow-amber-100';
      case 'crimson': return 'bg-rose-600 text-white shadow-md shadow-rose-100';
      default: return 'bg-slate-900 text-white shadow-md shadow-slate-100';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'languages': return <Code2 size={13} className="text-indigo-500" />;
      case 'frontend': return <Laptop size={13} className="text-teal-500" />;
      case 'backend':
      case 'databases': return <Database size={13} className="text-emerald-500" />;
      case 'visualization': return <LineChart size={13} className="text-amber-500" />;
      case 'tools': return <Sliders size={13} className="text-purple-500" />;
      default: return <FileSpreadsheet size={13} className="text-slate-500" />;
    }
  };

  const getSkillCategoryName = (cat: string) => {
    switch (cat) {
      case 'languages': return 'Language';
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend API';
      case 'databases': return 'Database';
      case 'visualization': return 'Analytics';
      case 'tools': return 'Dev Tool';
      case 'core': return 'Core Theory';
      default: return 'Tech Stack';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 bg-slate-50/40 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Technical <span className={getThemeTextClass()}>Expertise</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            Categorized technical stack built during B.Tech research, certifications, and project applications.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-tab-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? getThemeTabActive()
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 hover:border-slate-300 p-4.5 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:shadow-md shadow-sm shadow-slate-100/50"
              >
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-semibold font-mono flex items-center gap-1">
                      {getCategoryIcon(skill.category)} {getSkillCategoryName(skill.category)}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                      skill.level >= 5 ? 'bg-emerald-500 animate-pulse' :
                      skill.level >= 4 ? 'bg-indigo-500' : 'bg-slate-300'
                    }`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-650 transition-colors">
                    {skill.name}
                  </h4>
                </div>

                {/* Star-like dots indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Expertise</span>
                    <span className="text-[10px] font-mono text-slate-600 font-bold">
                      {skill.level === 5 ? 'Master' : skill.level === 4 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                  
                  {/* Row of custom rating pips */}
                  <div className="flex gap-1 mt-1.5">
                    {[1, 2, 3, 4, 5].map((pip) => (
                      <div
                        key={pip}
                        className={`h-1 flex-1 rounded-sm transition-all duration-500 ${
                          pip <= skill.level
                            ? currentTheme === 'indigo' ? 'bg-indigo-600' :
                              currentTheme === 'emerald' ? 'bg-emerald-600' :
                              currentTheme === 'amber' ? 'bg-amber-600' :
                              currentTheme === 'crimson' ? 'bg-rose-600' : 'bg-slate-900'
                            : 'bg-slate-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
