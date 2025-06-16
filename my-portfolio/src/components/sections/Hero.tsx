"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/shared/AnimatedText";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

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
      </div>

      {/* 3D Sphere */}
      <div className="absolute right-10 top-1/4 w-64 h-64 md:w-96 md:h-96">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1.5, 64, 64]}>
            <meshStandardMaterial
              color="#6366f1"
              wireframe
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Canvas>
      </div>

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
          <span className="block">Hi, I&aposm</span>
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            <AnimatedText text="Your Name" />
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
            <Button asChild size="lg">
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
