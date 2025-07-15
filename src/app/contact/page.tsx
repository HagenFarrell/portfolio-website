// src/app/contact/page.tsx
"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault(); // This simply stops the actual event from happening.
    if (audioRef.current) audioRef.current.play();
    alert("Holocomm Signal Transmitted! Coordinates received by Hagen Farrell.");
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="holocomm-panel">
        <form onSubmit={handleTransmit}>
          <input className="holo-input" type="text" placeholder="Your Name" />
          <input className="holo-input" type="email" placeholder="Your Email" />
          <textarea className="holo-input" placeholder="Your Message" />
          <button className="transmit-btn" type="submit">Transmit Signal</button>
        </form>
      </div>
      <audio ref={audioRef} id="transmit-sound" src="/assets/transmit-sound.mp3" />
    </motion.section>
  );
}