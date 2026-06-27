import React, { useState, useRef, useEffect } from 'react';
import { Settings, X, Palette, Image as ImageIcon, Sparkles, RefreshCw, EyeOff, Check, AlertCircle } from 'lucide-react';
import { ThemePreset } from '../types';

interface ThemeCustomizerProps {
  currentTheme: ThemePreset;
  setTheme: (theme: ThemePreset) => void;
  userPhoto: string | null;
  setUserPhoto: (photo: string | null) => void;
}

export default function ThemeCustomizer({
  currentTheme,
  setTheme,
  userPhoto,
  setUserPhoto,
}: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const presets: { id: ThemePreset; name: string; color: string; desc: string }[] = [
    { id: 'slate', name: 'Slate Neutral', color: 'bg-slate-400', desc: 'Sober and corporate' },
    { id: 'indigo', name: 'Cosmic Indigo', color: 'bg-indigo-500', desc: 'Premium dev tech feel' },
    { id: 'emerald', name: 'Emerald Mint', color: 'bg-emerald-500', desc: 'Bright cyber aesthetic' },
    { id: 'amber', name: 'Warm Amber', color: 'bg-amber-500', desc: 'Warm editorial bronze' },
    { id: 'crimson', name: 'Velvet Crimson', color: 'bg-rose-500', desc: 'High impact contrast' }
  ];

  // Handle image upload and scale to Base64 (compressing slightly)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file');
      return;
    }

    if (file.size > 2.5 * 1024 * 1024) {
      setErrorMsg('Image is too large. Please use an image smaller than 2.5MB');
      return;
    }

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const base64 = uploadEvent.target?.result as string;
      setUserPhoto(base64);
      localStorage.setItem('sumedha_portfolio_photo', base64);
    };
    reader.readAsDataURL(file);
  };

  const handleClearPhoto = () => {
    setUserPhoto(null);
    localStorage.removeItem('sumedha_portfolio_photo');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      {/* Trigger Button */}
      <button
        id="theme-customizer-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all cursor-pointer group"
        title="Customize Portfolio"
      >
        <Settings size={20} className={`group-hover:rotate-45 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-5 text-sans animate-fade-in text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-150 mb-4 text-left">
            <div className="flex items-center gap-2">
              <Palette className="text-indigo-600" size={18} />
              <h4 className="font-extrabold text-sm tracking-wide text-slate-800">Live Customizer</h4>
            </div>
            <button
              id="theme-customizer-close"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-5">
            {/* 1. Theme Selection */}
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">1. Color Vibe Accent</span>
              <div className="grid grid-cols-5 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    id={`theme-preset-btn-${preset.id}`}
                    onClick={() => setTheme(preset.id)}
                    className={`h-9 rounded-lg flex flex-col items-center justify-center relative transition-all duration-300 border cursor-pointer ${
                      currentTheme === preset.id
                        ? 'border-slate-350 bg-slate-50 shadow-sm scale-105'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:scale-102'
                    }`}
                    title={`${preset.name} - ${preset.desc}`}
                  >
                    <div className={`h-4.5 w-4.5 rounded-full ${preset.color} shadow-inner`} />
                    {currentTheme === preset.id && (
                      <div className="absolute -top-1 -right-1 bg-slate-800 text-white rounded-full p-0.5 shadow-sm">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Photo Personalizer */}
            <div className="space-y-2 border-t border-slate-150 pt-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">2. Self Portrait Upload</span>
                <Sparkles size={12} className="text-amber-500 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                Upload your portrait photo (such as <strong className="text-slate-700">the selfie you shared</strong>) to display it in the portfolio layout!
              </p>

              {userPhoto ? (
                <div className="flex items-center gap-3 bg-white border border-slate-200 p-2 rounded-lg shadow-sm">
                  <img
                    src={userPhoto}
                    alt="Custom Upload preview"
                    className="h-10 w-10 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active Cache
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium truncate">Saved locally</p>
                  </div>
                  <button
                    id="theme-clear-photo"
                    onClick={handleClearPhoto}
                    className="text-[10px] text-red-600 hover:text-red-500 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded transition-colors font-bold cursor-pointer border border-red-100"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    id="theme-photo-trigger-btn"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-2.5 px-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-800 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <ImageIcon size={14} className="text-indigo-650" /> Choose Profile Photo
                  </button>
                  <input
                    ref={fileInputRef}
                    id="customizer-file-input"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              )}

              {errorMsg && (
                <p className="text-[10px] text-red-500 flex items-center gap-1.5 pt-1 font-bold">
                  <AlertCircle size={10} /> {errorMsg}
                </p>
              )}
            </div>

            {/* 3. Export Help info */}
            <div className="border-t border-slate-150 pt-3 text-[10px] text-slate-400 flex flex-col gap-1 leading-relaxed text-left font-medium">
              <span className="font-mono uppercase text-[9px] text-slate-400 tracking-wider font-bold">💡 Tip for Recruiters</span>
              <span>All styling, layout, and photos save locally in real-time. Hit <kbd className="bg-slate-50 px-1 py-0.5 rounded text-slate-600 border border-slate-200">Ctrl + P</kbd> on any device to view or save the custom print-styled resume format!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
