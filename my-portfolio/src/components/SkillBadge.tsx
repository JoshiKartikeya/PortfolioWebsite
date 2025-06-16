"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        borderColor: "hsl(var(--primary))",
      }}
    >
      <div className="text-primary mb-3">
        <skill.icon className="w-8 h-8" />
      </div>
      <h3 className="font-semibold">{skill.name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{skill.category}</p>
      <div className="mt-4 w-full h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      <span className="text-xs mt-2 text-muted-foreground">{skill.level}%</span>
    </motion.div>
  );
}
