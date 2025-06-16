import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsShowcase from "@/components/sections/SkillsShowcase";
import ContactSection from "@/components/sections/ContactSection";
import AnimatedDivider from "@/components/shared/AnimatedDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedDivider />
      <FeaturedProjects />
      <AnimatedDivider />
      <SkillsShowcase />
      <AnimatedDivider />
      <ContactSection />
    </>
  );
}
