export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageLink?: string; // Optional field for project image
  technologies: string[];
  link: string;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
};