export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  category: 'web' | 'mobile' | 'system' | 'ai';
  demoType: 'task' | 'banking' | 'assistant' | 'shortener';
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'visualization' | 'core';
  level: number; // 1-5 rating
}

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  description?: string;
  link?: string;
}

export interface Message {
  id: string;
  senderName: string;
  senderEmail: string;
  messageText: string;
  timestamp: string;
}

export type ThemePreset = 'slate' | 'emerald' | 'amber' | 'indigo' | 'crimson';

