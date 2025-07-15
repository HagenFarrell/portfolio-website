// src/components/TeaserCard.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeaserCard({ title, desc, link, decor }: { title: string; desc: string; link: string; decor: string }) {
  return (
    <motion.div
      className={`teaser-card ${decor.toLowerCase()}-card`} // Applies scan-line class per card
      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)" }} // Upgraded glow on hover
      transition={{ duration: 0.3 }}
    >
      <span className="aurebesh-decor">{decor}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link href={link} className="teaser-link">
        <motion.span
          whileTap={{ filter: "blur(10px) brightness(2)", scale: 1.1 }} // Smoother hyperspace tap
          transition={{ duration: 1 }}
        >
          Enter Hyperspace →
        </motion.span>
      </Link>
    </motion.div>
  );
}