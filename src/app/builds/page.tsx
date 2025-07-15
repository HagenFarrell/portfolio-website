// src/app/builds/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Builds() {
  return (
    <motion.section
      className="builds-grid"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="holocron-card">
        <h3>Build 1: Droid Prototype</h3>
        <p>Description: Custom robot with embedded systems. Tech: Arduino, Sensors.</p>
      </div>
    </motion.section>
  );
}