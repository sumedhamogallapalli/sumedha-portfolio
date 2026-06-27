import { personalInfo, educationList, skillsList, projectsList, certificationsList } from '../data';

export default function PrintResume() {
  return (
    <div className="print-only text-black bg-white p-8 max-w-4xl mx-auto space-y-5 font-sans leading-tight text-xs no-print:hidden">
      
      {/* Header Info */}
      <div className="text-center space-y-1 pb-4 border-b border-black">
        <h1 className="text-2xl font-bold uppercase tracking-wide">{personalInfo.name}</h1>
        <p className="text-[10px] font-semibold text-slate-700">
          📍 {personalInfo.location} | 📞 {personalInfo.phone} | ✉️ {personalInfo.email}
        </p>
        <p className="text-[9px] text-slate-600 font-mono">
          🔗 linkedin.com/in/sumedha-m | 💻 github.com/sumedhamogallapalli | 📊 hackerrank.com/profile/sumedhamogallap1
        </p>
      </div>

      {/* Education */}
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-1.5">
          🎓 Education
        </h2>
        <div className="space-y-3">
          {educationList.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-start">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900">{edu.degree}</p>
                <p className="text-slate-700 italic">{edu.institution}, {edu.location}</p>
              </div>
              <div className="text-right space-y-0.5 font-mono">
                <p className="font-bold text-slate-800">{edu.period}</p>
                <p className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-1.5">
          🛠️ Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-1 pl-1">
          <p className="leading-relaxed text-[11px]">
            <strong>Languages:</strong> C, C++, Java, Python
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Frontend Technologies:</strong> HTML, CSS, Bootstrap, JavaScript
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Backend Technologies (Basic):</strong> Node.js, Express
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Databases:</strong> MySQL, MongoDB
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Tools:</strong> GitHub, VS Code, Eclipse, PyCharm, XAMPP
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Data & Visualization:</strong> Power BI
          </p>
          <p className="leading-relaxed text-[11px]">
            <strong>Core Subjects:</strong> Data Structures, DBMS, OOPs, Operating Systems, Computer Networks
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-1.5">
          🚀 Projects
        </h2>
        <div className="space-y-3">
          {projectsList.map((proj, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-start">
                <p className="font-bold text-slate-900">{proj.title}</p>
                <p className="font-mono font-bold text-slate-700">{proj.date}</p>
              </div>
              <p className="text-slate-600 text-justify text-[11px] leading-relaxed">
                {proj.description}
              </p>
              <p className="text-[10px] font-mono text-slate-500">
                Technologies: {proj.technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-1.5">
          🏅 Certifications & Experience
        </h2>
        <div className="space-y-3">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex justify-between items-start">
                <p className="font-bold text-slate-900">{cert.title} – {cert.issuer}</p>
                <p className="font-mono font-bold text-slate-700">{cert.period}</p>
              </div>
              {cert.description && (
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-2 pt-1">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-1.5">
          📊 Additional Information
        </h2>
        <div className="grid grid-cols-1 gap-1.5 text-[11px]">
          <p>🌟 <strong>GATE Status:</strong> Qualified GATE 2026 with a GATE Score of 350</p>
          <p>🗣️ <strong>Languages:</strong> English (Upper Intermediate), Telugu (Bilingual Proficiency)</p>
          <p>🏆 <strong>Interests:</strong> Playing Badminton, Watching Cricket, Listening Music</p>
        </div>
      </div>

    </div>
  );
}
