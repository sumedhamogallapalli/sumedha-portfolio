import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import TerminalQA from './components/TerminalQA';
import Contact from './components/Contact';
import ThemeCustomizer from './components/ThemeCustomizer';
import PrintResume from './components/PrintResume';
import { ThemePreset } from './types';
import { personalInfo } from './data';
import { Heart } from 'lucide-react';

export default function App() {
  // Theme Presets defaults to premium 'indigo'
  const [theme, setTheme] = useState<ThemePreset>('indigo');
  // Load custom portrait image if user uploads one
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    // Read saved settings
    const savedTheme = localStorage.getItem('sumedha_portfolio_theme') as ThemePreset;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Force-clear the old couch selfie cache so the new professional portrait displays automatically
    const clearedOldPhoto = localStorage.getItem('sumedha_portfolio_photo_cleared_v3');
    if (!clearedOldPhoto) {
      localStorage.removeItem('sumedha_portfolio_photo');
      localStorage.setItem('sumedha_portfolio_photo_cleared_v3', 'true');
    } else {
      const savedPhoto = localStorage.getItem('sumedha_portfolio_photo');
      if (savedPhoto) {
        setUserPhoto(savedPhoto);
      }
    }
  }, []);

  const handleSetTheme = (newTheme: ThemePreset) => {
    setTheme(newTheme);
    localStorage.setItem('sumedha_portfolio_theme', newTheme);
  };

  const getThemeBgClass = () => {
    switch (theme) {
      case 'slate': return 'bg-slate-50 text-slate-900 selection:bg-slate-200 selection:text-slate-900';
      case 'emerald': return 'bg-[#f4fbf7] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900';
      case 'amber': return 'bg-[#fdfbf7] text-slate-900 selection:bg-amber-100 selection:text-amber-900';
      case 'crimson': return 'bg-[#fef5f6] text-slate-900 selection:bg-rose-100 selection:text-rose-900';
      default: return 'bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900'; // Indigo Cosmic
    }
  };

  const getThemeTextAccentClass = () => {
    switch (theme) {
      case 'indigo': return 'text-indigo-650';
      case 'emerald': return 'text-emerald-750';
      case 'amber': return 'text-amber-750';
      case 'crimson': return 'text-rose-750';
      default: return 'text-slate-800';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 relative overflow-x-hidden ${getThemeBgClass()}`}>
      
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* Screen Portfolio Version */}
      <div className="no-print relative z-10 flex flex-col justify-between min-h-screen">
        
        {/* Navigation Bar */}
        <Header currentTheme={theme} />

        {/* Portfolios Core Sections */}
        <main className="flex-grow">
          {/* Hero Landing */}
          <Hero currentTheme={theme} userPhoto={userPhoto} />
          
          {/* About Me & Milestones */}
          <About currentTheme={theme} />
          
          {/* Tech Matrix */}
          <Skills currentTheme={theme} />
          
          {/* Expanded Projects Showcase */}
          <Projects currentTheme={theme} />
          
          {/* Certifications and Experience */}
          <Certifications currentTheme={theme} />
          
          {/* Interactive Shell Q&A */}
          <TerminalQA currentTheme={theme} />
          
          {/* Secure Contact channels */}
          <Contact currentTheme={theme} />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-8 bg-white/80 mt-12 text-center text-xs text-slate-400 font-mono space-y-1">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Engineered with B.Tech focus and <Heart size={10} className="text-rose-500 fill-rose-500" /> for technical excellence.
          </p>
        </footer>

        {/* Real-time Theme Controls */}
        <ThemeCustomizer
          currentTheme={theme}
          setTheme={handleSetTheme}
          userPhoto={userPhoto}
          setUserPhoto={setUserPhoto}
        />

      </div>

      {/* Corporate PDF Printable Resume Version */}
      <PrintResume />

    </div>
  );
}
