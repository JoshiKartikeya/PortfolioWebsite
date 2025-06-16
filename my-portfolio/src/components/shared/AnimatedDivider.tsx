"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="w-full flex justify-center py-12">
      <motion.div
        className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent w-3/4"
        initial={{ width: 0 }}
        whileInView={{ width: "75%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
