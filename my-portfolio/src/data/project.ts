import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "Postgres", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Productivity Tool",
    description: "Kanban-style task manager with drag-and-drop interface, team collaboration, and analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "Data Visualization",
    description: "Real-time weather information with interactive maps, forecasts, and location-based alerts.",
    technologies: ["React", "D3.js", "Weather API", "Geolocation"],
    link: "#"
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "Mobile Application",
    description: "Workout planner and progress tracker with exercise library and performance analytics.",
    technologies: ["React Native", "Redux", "GraphQL", "Firebase"],
    link: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Personal Project",
    description: "Modern portfolio site with 3D animations, dark mode, and responsive design.",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    category: "Analytics Platform",
    description: "Comprehensive analytics platform for tracking engagement across multiple social networks.",
    technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    link: "#"
  }
];