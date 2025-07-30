import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Reminder ChatBot",
    category: "Web Application",
    imageLink: "/Images/chatBox.png",
    description: "A chatbot that take in your text comand and then identifies the reminder part and sets the reminder accordingly .",
    technologies: ["Python", "React+Vite", "FastAPI", "MongoDB" , "NLP"],
    link: "https://github.com/JoshiKartikeya/reminder-chatbox"
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
    imageLink: "/Images/weatherDashboard.jpg",
    description: "Real-time weather information with interactive maps, forecasts, and location-based alerts.",
    technologies: ["NextJS", "D3.js", "Weather API", "Geolocation"],
    link: "https://github.com/JoshiKartikeya/weatherDashboard"
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
    imageLink: "/Images/portfolioWebsite.png",
    description: "Modern portfolio site with 3D animations, dark mode, and responsive design.",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "https://github.com/JoshiKartikeya/PortfolioWebsite"
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