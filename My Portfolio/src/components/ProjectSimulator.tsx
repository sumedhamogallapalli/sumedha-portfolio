import React, { useState } from 'react';
import { Play, Check, Send, Plus, Trash, ArrowRight, Terminal, User, ShieldAlert, Wifi, Globe, Volume2 } from 'lucide-react';

interface SimulatorProps {
  type: 'task' | 'banking' | 'assistant' | 'shortener';
}

export default function ProjectSimulator({ type }: SimulatorProps) {
  // 1. Task Manager State
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Refactor portfolio layout', priority: 'high', completed: true },
    { id: '2', title: 'Prepare for GATE 2026 computer network exams', priority: 'medium', completed: false },
    { id: '3', title: 'Implement Express API endpoints', priority: 'low', completed: false }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'high' | 'medium' | 'low'>('medium');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: newTaskTitle,
        priority: newTaskPriority,
        completed: false
      }
    ]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // 2. Banking App State
  const [balance, setBalance] = useState(12500.50);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const [pin, setPin] = useState('');
  const [bankLogs, setBankLogs] = useState<string[]>([
    'Account initialized successfully',
    'Received matching stipend: +$500.00',
    'Transferred to Hostel Account: -$350.00'
  ]);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmt = parseFloat(amount);
    if (!recipient.trim() || isNaN(numAmt) || numAmt <= 0) return;
    if (numAmt > balance) {
      setBankLogs([`[FAILED] Insufficient balance for transfer of ₹${numAmt}`, ...bankLogs]);
      return;
    }
    setBalance(prev => prev - numAmt);
    setBankLogs([
      `Transferred ₹${numAmt.toFixed(2)} to ${recipient} successfully.`,
      ...bankLogs
    ]);
    setRecipient('');
    setAmount('');
  };

  // 3. Voice Assistant State
  const [voiceQuery, setVoiceQuery] = useState('');
  const [assistantLogs, setAssistantLogs] = useState<{ sender: 'user' | 'assistant'; text: string }[]>([
    { sender: 'assistant', text: 'Hello Sumedha! Personal Assistant ready. Try clicking a command below or typing a request!' }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const triggerAssistantResponse = (query: string) => {
    if (!query.trim()) return;
    const lower = query.toLowerCase();
    let responseText = "I'm sorry, I don't recognize that command. Try 'search weather' or 'open editor'.";
    
    if (lower.includes('search') || lower.includes('google')) {
      responseText = `🔍 Searching web for "${query.replace(/search|google/gi, '').trim()}"... Opened search portal in safety sandbox.`;
    } else if (lower.includes('file') || lower.includes('open')) {
      responseText = `📁 File Explorer initiated. Opening relative local buffers... Rendered "sumedha_resume.pdf" successfully.`;
    } else if (lower.includes('weather') || lower.includes('temperature')) {
      responseText = `🌦️ Local weather for Nellore, Andhra Pradesh: 31°C with 64% humidity. Clear skies.`;
    } else if (lower.includes('system') || lower.includes('status')) {
      responseText = `💻 System Diagnostic: GATE prep active. CPU utilization nominal. Power level optimal (100%).`;
    } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
      responseText = `👋 Hello! I am your custom voice assistant. How can I help make your developer day more productive?`;
    } else if (lower.includes('play') || lower.includes('music')) {
      responseText = `🎵 Playing instrumentals for deep programming focus. Let's write some code!`;
    }

    setAssistantLogs(prev => [
      ...prev,
      { sender: 'user', text: query },
      { sender: 'assistant', text: responseText }
    ]);
    setVoiceQuery('');

    // Simulate audio chime
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 1500);
  };

  // 4. URL Shortener State
  const [longUrl, setLongUrl] = useState('');
  const [shortLinks, setShortLinks] = useState<{ original: string; short: string; clicks: number }[]>([
    { original: 'https://github.com/sumedhamogallapalli/protask-manager', short: 'sumedha.dev/protask', clicks: 124 },
    { original: 'https://hackerrank.com/profile/sumedhamogallap1', short: 'sumedha.dev/hrank', clicks: 89 }
  ]);
  const [redirecting, setRedirecting] = useState<string | null>(null);

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl.trim()) return;
    
    // Simple validation
    let url = longUrl;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    const randomCode = Math.random().toString(36).substring(2, 7);
    const newShort = `sumedha.dev/${randomCode}`;

    setShortLinks([
      { original: url, short: newShort, clicks: 0 },
      ...shortLinks
    ]);
    setLongUrl('');
  };

  const testRedirect = (link: typeof shortLinks[0]) => {
    setRedirecting(link.short);
    setShortLinks(prev => prev.map(item => item.short === link.short ? { ...item, clicks: item.clicks + 1 } : item));
    setTimeout(() => {
      setRedirecting(null);
      window.open(link.original, '_blank');
    }, 2000);
  };

  return (
    <div id={`sim-${type}`} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden font-sans">
      
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Interactive Sandbox Simulator</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* 1. TASK MANAGER SANDBOX */}
      {type === 'task' && (
        <div className="space-y-4 text-left">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-150 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700">🛠️ Active Sprint Dashboard</span>
            <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-mono border border-indigo-200 font-bold">
              {tasks.filter(t => !t.completed).length} Pending
            </span>
          </div>

          {/* Add Form */}
          <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2">
            <input
              id="task-title-input"
              type="text"
              placeholder="e.g. Code database migrations..."
              value={newTaskTitle}
              onChange={e => setNewTaskTitle(e.target.value)}
              className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 transition-colors font-medium"
            />
            <div className="flex gap-2">
              <select
                id="task-priority-select"
                value={newTaskPriority}
                onChange={e => setNewTaskPriority(e.target.value as any)}
                className="bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs text-slate-600 focus:outline-none focus:border-indigo-600 font-semibold cursor-pointer"
              >
                <option value="high">🔴 High</option>
                <option value="medium">🟡 Medium</option>
                <option value="low">🟢 Low</option>
              </select>
              <button
                id="task-add-btn"
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                <Plus size={14} /> Add
              </button>
            </div>
          </form>

          {/* Task List */}
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {tasks.map(task => (
              <div
                key={task.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-sm transition-all duration-300 ${
                  task.completed
                    ? 'bg-slate-50/40 border-slate-150 opacity-60'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-350 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    id={`toggle-task-${task.id}`}
                    onClick={() => toggleTask(task.id)}
                    className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                      task.completed
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-600'
                        : 'border-slate-300 hover:border-slate-400 bg-white'
                    }`}
                  >
                    {task.completed && <Check size={12} strokeWidth={3} />}
                  </button>
                  <span className={`text-xs text-slate-700 font-medium ${task.completed ? 'line-through text-slate-400' : ''}`}>
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-mono uppercase tracking-wider font-bold ${
                      task.priority === 'high'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : task.priority === 'medium'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {task.priority}
                  </span>
                  <button
                    id={`delete-task-${task.id}`}
                    onClick={() => deleteTask(task.id)}
                    className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors cursor-pointer"
                  >
                    <Trash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. BANKING APPLICATION SANDBOX */}
      {type === 'banking' && (
        <div className="space-y-4 font-mono text-left">
          {/* Card Face Accent */}
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-950 space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span className="flex items-center gap-1 font-semibold"><User size={12} /> Sumedha Mogallapalli</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">Active Session</span>
            </div>
            <div className="text-xl font-bold text-white flex items-baseline justify-between pt-1">
              <span>₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Savings Balance</span>
            </div>
          </div>

          <form onSubmit={handleTransfer} className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <input
                id="bank-recipient"
                type="text"
                required
                placeholder="Recipient Name"
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 font-medium"
              />
              <input
                id="bank-amount"
                type="number"
                required
                placeholder="Amount (₹)"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 font-medium"
              />
            </div>
            <button
              id="bank-transfer-btn"
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Send size={12} /> Execute Fast Transfer
            </button>
          </form>

          {/* Mini Log */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 max-h-24 overflow-y-auto space-y-1">
            <div className="text-[9px] text-slate-400 border-b border-slate-200 pb-1 flex justify-between font-bold uppercase tracking-wider">
              <span>Transaction History Ledger</span>
              <span>Online Ledger</span>
            </div>
            {bankLogs.map((log, idx) => (
              <p
                key={idx}
                className={`text-[10px] truncate font-medium ${
                  log.startsWith('[FAILED]')
                    ? 'text-red-600'
                    : log.includes('Transferred')
                    ? 'text-slate-800'
                    : 'text-slate-500'
                }`}
              >
                &gt; {log}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* 3. PERSONAL VOICE ASSISTANT SANDBOX */}
      {type === 'assistant' && (
        <div className="space-y-4 text-left">
          {/* Conversational Screen */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 h-36 overflow-y-auto flex flex-col gap-2.5 text-xs">
            {assistantLogs.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 max-w-[85%] ${
                  msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-mono font-bold text-[9px] ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold'
                  }`}
                >
                  {msg.sender === 'user' ? 'U' : 'AI'}
                </div>
                <div
                  className={`p-2.5 rounded-lg leading-relaxed font-medium text-xs ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Click Prompts */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            <button
              id="va-prompt-weather"
              onClick={() => triggerAssistantResponse('How is the weather?')}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-sm"
            >
              🌦️ Check Weather
            </button>
            <button
              id="va-prompt-music"
              onClick={() => triggerAssistantResponse('Play some coding music')}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-sm"
            >
              🎵 Coding Beat
            </button>
            <button
              id="va-prompt-resume"
              onClick={() => triggerAssistantResponse('Open resume file')}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-sm"
            >
              📁 Open Resume
            </button>
            <button
              id="va-prompt-status"
              onClick={() => triggerAssistantResponse('System diagnostic check')}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-sm"
            >
              💻 Tech Status
            </button>
          </div>

          {/* Custom Input */}
          <div className="flex gap-2">
            <input
              id="va-text-input"
              type="text"
              placeholder="Or type voice command directly here..."
              value={voiceQuery}
              onChange={e => setVoiceQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && triggerAssistantResponse(voiceQuery)}
              className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 font-medium"
            />
            <button
              id="va-submit-btn"
              onClick={() => triggerAssistantResponse(voiceQuery)}
              className={`p-2.5 rounded-lg text-white flex items-center justify-center transition-all cursor-pointer ${
                isSpeaking ? 'bg-red-500 animate-pulse' : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              <Volume2 size={14} className={isSpeaking ? 'scale-110' : ''} />
            </button>
          </div>
        </div>
      )}

      {/* 4. URL SHORTENER SANDBOX */}
      {type === 'shortener' && (
        <div className="space-y-4 text-xs text-left">
          <form onSubmit={handleShorten} className="flex gap-1.5">
            <input
              id="shortener-url-input"
              type="text"
              required
              placeholder="Paste super long link e.g. https://linkedin.com/..."
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
              className="flex-1 bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 font-medium"
            />
            <button
              id="shortener-submit-btn"
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-lg font-bold shrink-0 transition-colors cursor-pointer shadow-sm"
            >
              Compress
            </button>
          </form>

          {/* Links List */}
          <div className="space-y-2">
            <p className="text-[10px] text-slate-400 font-bold font-mono uppercase tracking-wider">Simulated DB Records (MySQL Mapping via JDBC)</p>
            <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
              {shortLinks.map((link, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg flex items-center justify-between font-mono text-[10px] shadow-sm">
                  <div className="space-y-0.5 truncate max-w-[65%]">
                    <p className="text-emerald-600 font-bold truncate hover:underline cursor-pointer text-xs" onClick={() => testRedirect(link)}>
                      {link.short}
                    </p>
                    <p className="text-slate-400 truncate text-[10px]">{link.original}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[9px] bg-white border border-slate-200 px-1.5 py-0.5 rounded font-bold">
                      📊 {link.clicks} clicks
                    </span>
                    <button
                      id={`test-redirect-btn-${idx}`}
                      onClick={() => testRedirect(link)}
                      className="text-[9px] bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded transition-colors font-bold cursor-pointer"
                    >
                      Test Redirect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Redirect Simulator Overlay */}
          {redirecting && (
            <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center gap-3 animate-fade-in z-25">
              <div className="relative">
                <div className="h-10 w-10 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin" />
                <Globe size={16} className="absolute inset-0 m-auto text-indigo-600 animate-pulse" />
              </div>
              <div className="text-center">
                <p className="text-slate-700 font-mono text-xs font-bold">Simulating URL Shortener redirection...</p>
                <p className="text-[10px] text-emerald-600 font-mono mt-0.5 font-bold">&gt; Resolving: {redirecting} </p>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
