// src/app/page.tsx
"use client";
import { motion, useAnimation } from "framer-motion"; // Add useAnimation for control
import TeaserCard from "../components/TeaserCard";
import { useEffect, useRef } from "react";

export default function Home() {
  const controls = useAnimation(); // For Motion control
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) sectionRef.current.classList.add("visible");
          controls.start("visible"); // Trigger Motion animation
        }
      },
      { threshold: 0.8 } // Trigger when 80% in view
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 2 }}
    >
      <div id="crawl">
        <motion.div
          className="crawl-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>A long time ago in a galaxy far, far away...</p>
          <p>In the depths of workshops across the galaxy, where circuits hum with the power of the Force and servos whir like lightsabers igniting, a master builder emerges from the forge of creation...</p>
          <p>Guided by the ancient wisdom of algorithms and the power of code, this young developer seeks to bridge the digital and physical realms. From simple blinking LEDs to ambitious robotic companions, each project marks another step on the path from software padawan to hardware Jedi.</p>
          <p>This portfolio chronicles the works of Hagen Farrell, whose mastery of embedded systems has bridged the digital realm and the physical universe. Through battles with temperamental breadboards and mysterious firmware glitches, a new kind of Jedi has emerged.</p>
          <p>One who builds not just with code, but with copper traces and crystalline oscillators. One who understands that true power flows from the open-source rebellion across maker communities throughout the galaxy.</p>
          <p>These are the chronicles of circuits given consciousness, of metal given purpose, and of a maker&apos;s journey to master the embedded arts.</p> {/* Escaped the single quote here */}
          <p>May the Force be with your builds...</p>
        </motion.div>
      </div>
      <motion.section
        ref={sectionRef}
        id="hub"
        className="teaser-grid"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } } // Staggered upgrade
        }}
        initial="hidden"
        animate={controls} // Controlled by observer
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <TeaserCard title="Projects" desc="Explore my  digital innovations." link="/projects" decor="PROJECTS" />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <TeaserCard title="Builds" desc="Discover my hardware creations." link="/builds" decor="BUILDS" />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <TeaserCard title="Contact" desc="Establish a holocomm link." link="/contact" decor="CONTACT" />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}