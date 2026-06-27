import { Project, Education, Skill, Certification } from './types';

export const personalInfo = {
  name: 'Sumedha Mogallapalli',
  title: 'Computer Science & Engineering Student',
  subtitle: 'Aspiring AI & Machine Learning Engineer | Python Developer',
  email: 'sumedhamogallapalli@gmail.com',
  phone: '+91 8019801156',
  location: 'Nellore, Andhra Pradesh - 524001, India',
  linkedin: 'https://linkedin.com/in/sumedha-m',
  github: 'https://github.com/sumedhamogallapalli',
  hackerrank: 'https://hackerrank.com/profile/sumedhamogallap1',
  gateScore: 350,
  gateYear: 2026,
  languages: ['English (Upper Intermediate)', 'Telugu (Bilingual Proficiency)'],
  interests: ['Playing Badminton', 'Watching Cricket', 'Listening Music'],
  bio: 'A passionate Computer Science and Engineering student with strong programming skills in Python, Java, C, and C++. Deeply interested in Artificial Intelligence and Machine Learning, with practical experience building NLP applications, automated intelligent systems, and full-stack solutions. Driven by problem-solving, structured learning, and engineering highly intuitive, intelligent digital experiences.'
};

export const educationList: Education[] = [
  {
    institution: 'JNTUA College of Engineering',
    location: 'Kalikiri, Andhra Pradesh',
    degree: 'Bachelor of Technology (Computer Science and Engineering)',
    score: '8.92 CGPA',
    period: 'Aug 2024 - Ongoing'
  },
  {
    institution: 'Government Polytechnic for Women',
    location: 'Nellore, Andhra Pradesh',
    degree: 'Diploma in Computer Science and Engineering (CSE)',
    score: '95.08%',
    period: 'Apr 2024'
  },
  {
    institution: 'Narayana High School',
    location: 'Nellore, Andhra Pradesh',
    degree: 'SSC (Secondary School Certificate)',
    score: '10 CGPA',
    period: 'June 2021'
  }
];

export const skillsList: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', level: 5 },
  { name: 'Java', category: 'languages', level: 4 },
  { name: 'C++', category: 'languages', level: 4 },
  { name: 'C', category: 'languages', level: 4 },
  
  // Frontend
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'HTML5 / CSS3', category: 'frontend', level: 5 },
  { name: 'Bootstrap', category: 'frontend', level: 4 },
  { name: 'React.js', category: 'frontend', level: 4 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express.js', category: 'backend', level: 4 },
  { name: 'NLP & Speech Recognition', category: 'backend', level: 4 },
  
  // Databases
  { name: 'MySQL', category: 'databases', level: 4 },
  { name: 'MongoDB', category: 'databases', level: 4 },
  
  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 5 },
  { name: 'VS Code', category: 'tools', level: 5 },
  { name: 'Eclipse', category: 'tools', level: 4 },
  { name: 'PyCharm / Jupyter', category: 'tools', level: 5 },
  { name: 'Scikit-Learn / Pandas', category: 'tools', level: 4 },
  { name: 'XAMPP', category: 'tools', level: 4 },
  
  // Visualization
  { name: 'Power BI', category: 'visualization', level: 4 },
  
  // Core
  { name: 'Data Structures', category: 'core', level: 5 },
  { name: 'DBMS', category: 'core', level: 5 },
  { name: 'OOPs', category: 'core', level: 5 },
  { name: 'Machine Learning', category: 'core', level: 4 },
  { name: 'Deep Learning Basics', category: 'core', level: 4 },
  { name: 'Operating Systems', category: 'core', level: 4 },
  { name: 'Computer Networks', category: 'core', level: 4 }
];

export const projectsList: Project[] = [
  {
    id: 'protask',
    title: 'ProTask Manager',
    date: 'Jan 2026',
    description: 'Developed a modern, responsive Full-Stack Task Management system featuring direct RESTful communication. Integrated user-friendly priority levels and automated clean state updates to manage core tasks seamlessly.',
    longDescription: 'ProTask Manager provides an intuitive, high-performance interface for dynamic task tracking. By integrating reactive frontend status transitions with a robust Node.js backend, users can efficiently coordinate items, customize priorities, and experience flawless local-state persistence. Realizes professional agile workflow boards natively in the web browser.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Axios', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/sumedhamogallapalli/ProTask-Manager',
    category: 'web',
    demoType: 'task'
  },
  {
    id: 'banking',
    title: 'Banking Application',
    date: 'Nov 2023',
    description: 'Developed a user-friendly banking application using JavaScript with features such as secure login, money transfers, account creation, balance updates, and account information access, ensuring a smooth and intuitive user experience.',
    longDescription: 'An interactive financial simulation crafted with rich native script logic. Simulates secure multi-account transactions, instantaneous interest yields, balance ledger lookups, and account registration workflows, featuring custom client-side form verification.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/sumedhamogallapalli/banking-web-application',
    category: 'web',
    demoType: 'banking'
  },
  {
    id: 'voice_assistant',
    title: 'Personal Voice Assistant',
    date: 'Mar 2024',
    description: 'Developed a Python-based personal voice assistant using speech recognition and basic NLP to enable hands-free interaction with the system. The assistant performs tasks such as web browsing, file handling, system control, and utility operations through voice commands, improving user productivity and convenience.',
    longDescription: 'This desktop voice control utility harnesses Speech Recognition and Pyttsx3 modules, offering frictionless voice interaction. Users can run hands-free web queries, draft and query local files, command media controls, and check weather forecasts via simple audio prompts.',
    technologies: ['Python', 'SpeechRecognition', 'NLP', 'File IO'],
    githubUrl: 'https://github.com/sumedhamogallapalli/personal-voice-assistant',
    category: 'ai',
    demoType: 'assistant'
  },
  {
    id: 'url_shortener',
    title: 'URL Shortener Application',
    date: 'Oct 2025',
    description: 'Developed a Java-based URL Shortener application that converts long URLs into unique short links and retrieves the original URLs when required. The system uses JDBC to connect with a MySQL database for persistent storage of URL mappings.',
    longDescription: 'A enterprise-structured utility engineered in pure Java and JDBC. Resolves long links into collision-resistant alphanumeric hash shortcodes, safely backed by relational MySQL indexing to provide rapid sub-millisecond retrieval speeds.',
    technologies: ['Java', 'JDBC', 'MySQL', 'Database Design'],
    githubUrl: 'https://github.com/sumedhamogallapalli/java-url-shortener',
    category: 'system',
    demoType: 'shortener'
  }
];

export const certificationsList: Certification[] = [
  {
    title: 'Python Programming Internship',
    issuer: 'CodTech IT Solutions',
    period: 'Apr 2026 – June 2026',
    description: 'Engaged in hands-on backend development crafting Python implementations across Weather Analytics, natural language AI Chatbots, automated report compiling engines, and machine learning-powered spam detection classifiers.',
    link: 'https://github.com/sumedhamogallapalli/CODTECH-IT-SOLUTIONS-INTERNSHIP'
  },
  {
    title: 'Advanced Ethical Hacking Workshop',
    issuer: 'Technical Workshop',
    period: '2025',
    description: 'Comprehensive study of network vulnerabilities, penetration testing structures, and system security architectures.'
  },
  {
    title: 'Power BI Workshop / Dashboard Analysis',
    issuer: 'Data Analytics Association',
    period: '2025',
    description: 'Explored multi-source data modelling, structured DAX query optimizations, and premium dashboard visual storytelling.'
  },
  {
    title: 'Python (Basic) & Problem Solving (Basic)',
    issuer: 'HackerRank',
    period: '2024',
    description: 'Verified algorithmic proficiency across data structures, sorting techniques, complexity scaling, and fundamental Python logic.',
    link: 'https://hackerrank.com/profile/sumedhamogallap1'
  }
];
