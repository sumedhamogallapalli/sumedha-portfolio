import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Play, ChevronDown, ChevronUp, Layers, Cpu, Database, Network, Calendar, ExternalLink } from 'lucide-react';
import { projectsList } from '../data';
import { Project, ThemePreset } from '../types';
import ProjectSimulator from './ProjectSimulator';

interface ProjectsProps {
  currentTheme: ThemePreset;
}

export default function Projects({ currentTheme }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('protask'); // Expand ProTask by default to draw interest

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI & NLP' },
    { id: 'system', label: 'Systems & DBs' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-850';
    }
  };

  const getThemeFilterActive = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 text-white shadow-md shadow-indigo-100';
      case 'emerald': return 'bg-emerald-600 text-white shadow-md shadow-emerald-100';
      case 'amber': return 'bg-amber-600 text-white shadow-md shadow-amber-100';
      case 'crimson': return 'bg-rose-600 text-white shadow-md shadow-rose-100';
      default: return 'bg-slate-900 text-white shadow-md shadow-slate-100';
    }
  };

  const getThemeAccentBorder = (id: string) => {
    if (expandedProjectId !== id) return 'border-slate-200';
    switch (currentTheme) {
      case 'indigo': return 'border-indigo-300 shadow-md shadow-indigo-50/50';
      case 'emerald': return 'border-emerald-300 shadow-md shadow-emerald-50/50';
      case 'amber': return 'border-amber-300 shadow-md shadow-amber-50/50';
      case 'crimson': return 'border-rose-300 shadow-md shadow-rose-50/50';
      default: return 'border-slate-350 shadow-md shadow-slate-100/50';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'web': return <Layers size={13} className="text-indigo-550" />;
      case 'ai': return <Cpu size={13} className="text-teal-550" />;
      default: return <Database size={13} className="text-emerald-550" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200 bg-white relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Interactive <span className={getThemeTextClass()}>Projects Showcase</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            Review detailed case files of my engineered code. Click a card to expand a fully functional <strong className="text-slate-800 font-semibold">interactive sandbox simulation</strong> and test the application instantly!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`project-filter-${f.id}`}
              onClick={() => {
                setActiveFilter(f.id);
                // Auto expand first match if not already expanded
                const matches = f.id === 'all' ? projectsList : projectsList.filter(p => p.category === f.id);
                if (matches.length > 0) {
                  setExpandedProjectId(matches[0].id);
                }
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? getThemeFilterActive()
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Layout Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            
            return (
              <motion.div
                key={project.id}
                layout="position"
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-500 shadow-sm ${getThemeAccentBorder(project.id)}`}
              >
                {/* Expandable Header Banner */}
                <div
                  id={`project-banner-${project.id}`}
                  onClick={() => toggleExpand(project.id)}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors relative z-10"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {getCategoryIcon(project.category)} {project.category === 'web' ? 'Web App' : project.category === 'ai' ? 'AI Speech System' : 'Backend System'}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                        <Calendar size={10} /> {project.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-sans font-extrabold text-slate-900 flex items-center gap-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent trigger collapse
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-all shadow-sm"
                      title="Github Repository"
                    >
                      <Github size={15} />
                    </a>
                    <button
                      id={`expand-btn-${project.id}`}
                      onClick={() => toggleExpand(project.id)}
                      className={`p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown size={15} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details & Live Sandbox */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="border-t border-slate-200 overflow-hidden"
                    >
                      <div className="p-6 bg-slate-50/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Technical Brief Card */}
                        <div className="lg:col-span-5 space-y-5 text-left">
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Engineering Summary</span>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                              {project.longDescription}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Tech Stack Integration</span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-mono font-bold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg shadow-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Link block */}
                          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-slate-400">Source files verified</span>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-bold ${getThemeTextClass()} hover:underline`}
                            >
                              Browse GitHub Repository <ExternalLink size={11} />
                            </a>
                          </div>
                        </div>

                        {/* Interactive Simulator Side */}
                        <div className="lg:col-span-7">
                          <ProjectSimulator type={project.demoType} />
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
