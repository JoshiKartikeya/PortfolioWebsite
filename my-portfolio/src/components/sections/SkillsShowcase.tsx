"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { skills } from "@/data/skills";

export default function SkillsShowcase() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container">
        <SectionHeading
          title="Technical Expertise"
          subtitle="Tools and technologies I master"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
