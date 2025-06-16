import {
  Code,
  Database,
  Cpu,
  // Brush,
  Smartphone,
  Cloud,
  GitBranch,
  Layout,
  Server,
  Palette
} from 'lucide-react';
import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    category: "Frontend",
    level: 95,
    icon: Code
  },
  {
    id: 2,
    name: "React",
    category: "Frontend",
    level: 90,
    icon: Layout
  },
  {
    id: 3,
    name: "Next.js",
    category: "Full Stack",
    level: 85,
    icon: Cpu
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Development",
    level: 80,
    icon: Code
  },
  {
    id: 5,
    name: "Node.js",
    category: "Backend",
    level: 75,
    icon: Server
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Styling",
    level: 90,
    icon: Palette
  },
  {
    id: 7,
    name: "MongoDB",
    category: "Database",
    level: 70,
    icon: Database
  },
  {
    id: 8,
    name: "Git",
    category: "DevOps",
    level: 85,
    icon: GitBranch
  },
  {
    id: 9,
    name: "AWS",
    category: "Cloud",
    level: 65,
    icon: Cloud
  },
  {
    id: 10,
    name: "React Native",
    category: "Mobile",
    level: 75,
    icon: Smartphone
  }
];