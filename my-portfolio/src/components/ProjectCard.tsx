import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div className="group h-full" whileHover={{ y: -10 }}>
      <div className="h-full rounded-xl border border-border bg-card overflow-hidden transition-all group-hover:border-primary/50">
        <div className="relative aspect-video bg-muted">
          {/* Placeholder for project image */}
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <div className="bg-muted border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-1">{project.category}</p>
            </div>
            <Link
              href={project.link}
              target="_blank"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-3 text-foreground/80">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
