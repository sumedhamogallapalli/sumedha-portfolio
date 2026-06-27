import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Play, RefreshCcw } from 'lucide-react';
import { personalInfo, skillsList, educationList } from '../data';
import { ThemePreset } from '../types';

interface TerminalQAProps {
  currentTheme: ThemePreset;
}

interface CommandLog {
  command: string;
  response: string | React.ReactNode;
}

export default function TerminalQA({ currentTheme }: TerminalQAProps) {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'system-init',
      response: (
        <div className="space-y-1">
          <p className="text-emerald-400">⚡ Sumedha Dev Terminal [v1.0.4] Online</p>
          <p className="text-slate-500">Welcome recruiter! Type a command below to audit this applicant's profile.</p>
          <p className="text-slate-400">Type <span className="text-white font-bold font-mono">help</span> to view available system commands.</p>
        </div>
      )
    }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

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
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-500';
      case 'emerald': return 'bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold';
      case 'amber': return 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold';
      case 'crimson': return 'bg-rose-600 hover:bg-rose-500';
      default: return 'bg-slate-900 hover:bg-slate-800';
    }
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let res: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1">
            <p className="text-slate-300 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 pl-2 text-slate-400">
              <div>&gt; <span className="text-white font-bold">bio</span> - Applicant bio</div>
              <div>&gt; <span className="text-white font-bold">education</span> - Degrees & GPA</div>
              <div>&gt; <span className="text-white font-bold">skills</span> - Full languages & stacks</div>
              <div>&gt; <span className="text-white font-bold">gate</span> - GATE exam status</div>
              <div>&gt; <span className="text-white font-bold">projects</span> - Engineering projects</div>
              <div>&gt; <span className="text-white font-bold">contact</span> - Contact endpoints</div>
              <div>&gt; <span className="text-white font-bold">clear</span> - Clear terminal logs</div>
              <div>&gt; <span className="text-white font-bold">hobbies</span> - Interests & sport</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        res = (
          <div className="space-y-1.5 max-w-2xl text-slate-300 leading-relaxed">
            <p className="text-indigo-400 font-bold uppercase text-[10px]">Candidate Bio Summary:</p>
            <p>{personalInfo.bio}</p>
            <p className="text-slate-500 text-[10px]">&gt; Fluent in: {personalInfo.languages.join(', ')}</p>
          </div>
        );
        break;

      case 'gate':
        res = (
          <div className="space-y-1.5 text-slate-300 leading-relaxed border-l-2 border-amber-500/40 pl-3">
            <p className="text-amber-400 font-bold uppercase text-[10px]">National Gate Entrance Examination Audit:</p>
            <p className="text-white font-bold">Status: Qualified Graduate Aptitude Test in Engineering (GATE 2026)</p>
            <p>Score: <strong className="text-amber-400 text-lg">350</strong></p>
            <p className="text-xs text-slate-400">The exam tests full university levels in core software subjects including Computer Architecture, Algorithms, Graph Theory, Network Layers, and Database normalization.</p>
          </div>
        );
        break;

      case 'education':
        res = (
          <div className="space-y-3">
            <p className="text-emerald-400 font-bold uppercase text-[10px]">Academic Ledgers Found:</p>
            {educationList.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-slate-800 pl-3.5 space-y-0.5">
                <p className="text-white font-bold">{edu.degree}</p>
                <p className="text-slate-300 text-xs">{edu.institution} | {edu.location}</p>
                <p className="text-xs text-slate-400">Score: <strong className="text-emerald-400">{edu.score}</strong> ({edu.period})</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-2">
            <p className="text-indigo-400 font-bold uppercase text-[10px]">Core Skills Proficiency Charts:</p>
            <div className="space-y-1.5 max-w-md">
              {skillsList.slice(0, 10).map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 w-32">{skill.name}</span>
                  <div className="flex-1 flex gap-1 items-center px-4">
                    <span className="text-slate-600">[</span>
                    <span className="text-emerald-400">{'#'.repeat(skill.level)}{' '.repeat(5 - skill.level)}</span>
                    <span className="text-slate-600">]</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">{skill.level}/5</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500">&gt; Showing top 10 skills. View full panel in Skills section above.</p>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-3">
            <p className="text-indigo-400 font-bold uppercase text-[10px]">Verified GitHub Projects Loaded:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              <div>
                <p className="text-white font-bold">1. ProTask Manager</p>
                <p className="text-slate-400 text-xs">React, Node, Express, Axios. Fullstack tasks with priority state management.</p>
              </div>
              <div>
                <p className="text-white font-bold">2. Banking Application</p>
                <p className="text-slate-400 text-xs">Vanilla JS, HTML5, CSS3. Simulated transaction log accounts.</p>
              </div>
              <div>
                <p className="text-white font-bold">3. Personal Voice Assistant</p>
                <p className="text-slate-400 text-xs">Python, SpeechRecognition module, basic NLP queries.</p>
              </div>
              <div>
                <p className="text-white font-bold">4. URL Shortener</p>
                <p className="text-slate-400 text-xs">Java, JDBC, MySQL. Alphanumeric links hash map persistence.</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-indigo-400 font-bold uppercase text-[10px]">Candidate Reachability Ports:</p>
            <p>&gt; Email: <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 underline">{personalInfo.email}</a></p>
            <p>&gt; Phone: <span className="text-slate-200">{personalInfo.phone}</span></p>
            <p>&gt; GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{personalInfo.github}</a></p>
            <p>&gt; LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{personalInfo.linkedin}</a></p>
            <p>&gt; HackerRank: <a href={personalInfo.hackerrank} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{personalInfo.hackerrank}</a></p>
          </div>
        );
        break;

      case 'hobbies':
        res = (
          <div className="space-y-1">
            <p className="text-rose-400 font-bold uppercase text-[10px]">Extracurricular interests:</p>
            <p className="text-slate-300">🏸 Playing competitive Badminton</p>
            <p className="text-slate-300">🏏 Watching Cricket matches</p>
            <p className="text-slate-300">🎵 Listening to instrumental programming soundtracks</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      default:
        res = `Command '${cmd}' not recognized. Type 'help' to see valid commands.`;
        break;
    }

    setLogs(prev => [...prev, { command: cmd, response: res }]);
    setInput('');
  };

  const handlePredefinedClick = (commandText: string) => {
    setInput(commandText);
    // Submit command
    setTimeout(() => {
      const form = document.getElementById('terminal-form') as HTMLFormElement;
      if (form) {
        // Construct simulated event
        const event = new Event('submit', { cancelable: true, bubbles: true });
        form.dispatchEvent(event);
      }
    }, 50);
  };

  return (
    <section id="terminal" className="py-20 border-t border-slate-200 bg-white no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-sans font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Developer <span className={getThemeTextClass()}>Q&A Terminal</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
            Query Sumedha's resume database directly in this live retro sandboxed shell! Perfect for developer-focused technical audits.
          </p>
        </div>

        {/* Terminal Case Wrapper */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto font-mono text-xs">
          {/* Window Control Header */}
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={14} className={getThemeTextClass()} />
              <span className="text-[11px] font-bold text-slate-500">bash - sumedha@portfolio ~ query-shell</span>
            </div>
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300" />
              <span className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300" />
              <span className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300" />
            </div>
          </div>

          {/* Quick-run helper buttons bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Quick Query:</span>
            {['help', 'bio', 'skills', 'gate', 'education', 'contact'].map(command => (
              <button
                key={command}
                id={`terminal-quick-btn-${command}`}
                onClick={() => handlePredefinedClick(command)}
                className="text-[10px] bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 px-2.5 py-1 rounded transition-colors cursor-pointer shadow-sm font-semibold"
              >
                &gt; {command}
              </button>
            ))}
          </div>

          {/* Terminal Output Stream */}
          <div className="p-5 h-72 overflow-y-auto space-y-4 bg-slate-950 text-slate-300 leading-relaxed scrollbar-thin">
            {logs.map((log, index) => (
              <div key={index} className="space-y-1 text-left">
                {log.command !== 'system-init' && (
                  <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                    <span className="text-emerald-400 font-bold">sumedha@dev:~$</span>
                    <span className="text-white font-semibold font-mono">{log.command}</span>
                  </div>
                )}
                <div className="text-slate-300 text-xs pl-3.5 pt-0.5">
                  {log.response}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            id="terminal-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleCommandSubmit(e);
            }}
            className="bg-slate-950 border-t border-slate-900 p-3.5 flex items-center gap-2"
          >
            <span className="text-emerald-400 shrink-0 font-bold font-mono">sumedha@dev:~$</span>
            <input
              id="terminal-keyboard-input"
              type="text"
              placeholder="Type command here (e.g. skills, gate, education) and hit Enter..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none text-slate-200 focus:outline-none placeholder-slate-600 font-mono text-xs"
              autoComplete="off"
              autoFocus={false}
            />
            <button
              id="terminal-send-command-btn"
              type="submit"
              className={`p-1.5 rounded-lg text-slate-200 hover:text-white transition-colors cursor-pointer ${getThemeBtnClass()}`}
              title="Execute command"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
