import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Globe, Award, Sparkles, Terminal } from 'lucide-react';
import { ThemePreset } from '../types';

interface HeaderProps {
  currentTheme: ThemePreset;
}

export default function Header({ currentTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Developer Q&A', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  // Map theme presets to color borders/text
  const getThemeTextClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 text-white';
      case 'emerald': return 'bg-emerald-600 text-white';
      case 'amber': return 'bg-amber-600 text-white';
      case 'crimson': return 'bg-rose-600 text-white';
      default: return 'bg-slate-950 text-white';
    }
  };

  const getThemeBtnClass = () => {
    switch (currentTheme) {
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100';
      case 'emerald': return 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100';
      case 'amber': return 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-100';
      case 'crimson': return 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-100';
      default: return 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-100';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm shadow-slate-100/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand/Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${getThemeTextClass()}`}>
              SM
            </div>
            <span className="font-sans font-extrabold text-base tracking-tight text-slate-900 group-hover:text-indigo-650 transition-colors">
              Sumedha<span className="text-slate-400"> Portfolio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-print-btn"
              onClick={handlePrint}
              className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full transition-all shadow-sm ${getThemeBtnClass()} cursor-pointer`}
            >
              <FileText size={12} /> Export PDF CV
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-1 rounded-lg focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-3 shadow-lg animate-slide-down">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 uppercase tracking-wider transition-colors py-2 px-2 rounded-lg hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-slate-200 pt-3">
            <button
              id="header-mobile-print-btn"
              onClick={() => {
                setIsOpen(false);
                handlePrint();
              }}
              className={`w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-full transition-all ${getThemeBtnClass()}`}
            >
              <FileText size={13} /> Export PDF CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
