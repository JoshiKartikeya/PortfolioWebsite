"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/shared/AnimatedText";
// Import for ThreeDSphere commented out since we're temporarily disabling it
// import dynamic from "next/dynamic";
// const ThreeDSphere = dynamic(() => import("../ThreeDSphere"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>{" "}
      {/* Simple animated element instead of 3D Sphere */}
      <motion.div
        className="absolute right-10 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-primary/30"
        animate={{
          rotate: 360,
          borderColor: [
            "rgba(99, 102, 241, 0.3)",
            "rgba(168, 85, 247, 0.3)",
            "rgba(99, 102, 241, 0.3)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-primary/40"
          animate={{
            rotate: -180,
            borderColor: [
              "rgba(99, 102, 241, 0.4)",
              "rgba(168, 85, 247, 0.4)",
              "rgba(99, 102, 241, 0.4)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
      <motion.div
        className="container relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <AnimatedText text="Frontend Developer" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          <span className="block">Hi, I am</span>
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            <AnimatedText text="Kartikeya" />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
          variants={itemVariants}
        >
          I create immersive digital experiences with cutting-edge web
          technologies. Passionate about UI/UX and interactive design.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <Button variant="ghost" asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
