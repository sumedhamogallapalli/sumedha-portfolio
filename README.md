# Sumedha Mogallapalli Portfolio 🌟

An interactive, high-performance, and visually stunning developer portfolio designed to showcase projects, skills, education, and professional credentials. This application is crafted with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion** (formerly Framer Motion) for elegant fluid layout animations.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-brightgreen?style=for-the-badge&logo=vercel)](https://github.com/sumedhamogallapalli)
[![Tech Stack](https://img.shields.io/badge/Stack-React_19_|_TypeScript_|_Tailwind_v4-blue?style=for-the-badge&logo=react)](https://react.dev)

---

## 🚀 Key Features

- **🎨 Multi-Theme Customizer**: Dynamic light and dark presets with fine-grained color accents and custom border radii.
- **💻 Live Project Simulator**: Interactive dashboard playground where users can simulate running key projects like:
  - *ProTask Manager* — Create, drag, and complete live dynamic tasks.
  - *Banking Application* — Simulate transactions, interest yields, and registration.
  - *Personal Voice Assistant* — Interactive terminal execution mimicking custom voice commands.
  - *URL Shortener* — Map and simulate link shortening workflows.
- **🤖 Intelligent Terminal Q&A**: A retro-style interactive CLI/Terminal powered by Gemini AI allowing visitors to ask questions about skills, background, and projects in real-time.
- **📄 Print-Ready Professional Resume**: Generates an optimized, beautifully styled A4-format resume perfect for downloads and physical distribution.
- **📱 Responsive & Accessible**: Flawless responsive layout optimized for mobile screens, tablets, and ultra-wide desktop monitors.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Lucide Icons
- **Animation**: Motion (`motion/react`)
- **Intelligence**: Google Gemini AI (integrated via secure backend server routes)

---

## 📂 Project Structure

```bash
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Raw media assets (images, logos)
│   ├── components/         # Modular React components
│   │   ├── About.tsx       # Educational timeline & bio
│   │   ├── Certifications.tsx # Professional certificates
│   │   ├── Contact.tsx     # Custom contact panel
│   │   ├── Header.tsx      # Sticky navigation with theme toggle
│   │   ├── Hero.tsx        # High-impact introduction & avatar
│   │   ├── PrintResume.tsx # Print-ready CSS layout
│   │   ├── ProjectSimulator.tsx # Dynamic sandbox for simulated projects
│   │   ├── Projects.tsx    # Interactive projects browser
│   │   ├── Skills.tsx      # Visual classification of skills
│   │   └── TerminalQA.tsx  # Interactive AI terminal component
│   ├── data.ts             # Centralized structured personal portfolio data
│   ├── types.ts            # Core TypeScript interfaces & enums
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Global custom typography and theme variable setups
│   └── main.tsx            # Main application entry point
├── package.json            # Scripts and dependency manifests
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## ⚡ Getting Started Locally

Follow these quick steps to set up and run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/sumedhamogallapalli/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
If utilizing the Gemini Q&A Terminal, create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 6. Build for Production
To build a highly optimized distribution bundle:
```bash
npm run build
```
Production assets will be outputted to the `dist/` directory, ready to deploy to GitHub Pages, Vercel, Netlify, or AWS.

---

## 💼 Core Data Overview

### 🎓 Education
- **B.Tech in Computer Science & Engineering** (Ongoing) — *JNTUA College of Engineering, Kalikiri* | **8.92 CGPA**
- **Diploma in Computer Science & Engineering** (2024) — *Government Polytechnic for Women, Nellore* | **95.08%**
- **Secondary School Certificate (SSC)** (2021) — *Narayana High School, Nellore* | **10 CGPA**

### 💻 Featured Projects
1. **ProTask Manager**: Responsive Agile full-stack dashboard with instant local updates and priority-based task cards.
2. **Banking Application**: Interactive financial transaction sandbox built using native, modular script modules.
3. **Personal Voice Assistant**: Intelligent hands-free automated Python utility leveraging Google-grade speech tools.
4. **URL Shortener Application**: High-performance link-hashing compiler designed in pure Java using JDBC and relational MySQL indexing.

### 🏆 Key Certifications
- **Python Programming Internship** — CodTech IT Solutions
- **Advanced Ethical Hacking Workshop** — Cyber Security Division
- **Power BI Dashboard Analytics** — Data Analytics Association
- **Python (Basic) & Problem Solving (Basic)** — HackerRank Verification

---

## 🌐 Contact & Socials

- **Email**: [sumedhamogallapalli@gmail.com](mailto:sumedhamogallapalli@gmail.com)
- **Phone**: +91 8019801156
- **Location**: Nellore, Andhra Pradesh, India
- **LinkedIn**: [linkedin.com/in/sumedha-m](https://linkedin.com/in/sumedha-m)
- **GitHub**: [github.com/sumedhamogallapalli](https://github.com/sumedhamogallapalli)
- **HackerRank**: [hackerrank.com/profile/sumedhamogallap1](https://hackerrank.com/profile/sumedhamogallap1)

---

*Handcrafted with ❤️ by Sumedha Mogallapalli*
