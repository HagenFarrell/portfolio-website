// src/app/projects/page.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, 500);
  if (containerRef.current) containerRef.current.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
  const tie = new THREE.Mesh(geometry, material);
  scene.add(tie);

  const wingGeo = new THREE.BoxGeometry(2, 0.1, 3);
  const leftWing = new THREE.Mesh(wingGeo, material);
  leftWing.position.set(-2, 0, 0);
  tie.add(leftWing);
  const rightWing = new THREE.Mesh(wingGeo, material);
  rightWing.position.set(2, 0, 0);
  tie.add(rightWing);

  camera.position.z = 5;

  let exploded = false;
  function animate() {
    requestAnimationFrame(animate);
    tie.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  const handleClick = () => {
    if (!exploded) {
      tie.scale.set(2, 2, 2);
      tie.material.opacity = 0.5;
      setTimeout(() => {
        alert('Current Build: TIE Fighter Replica - In progress with 3D printing and electronics.');
        tie.scale.set(1, 1, 1);
        tie.material.opacity = 1;
      }, 1000);
      exploded = true;
    }
  };

  const currentContainer = containerRef.current; // Capture to avoid stale ref warning
  if (currentContainer) currentContainer.addEventListener("click", handleClick);

  return () => {
    if (currentContainer) currentContainer.removeEventListener("click", handleClick);
  };
}, []); // Empty deps is okay here since no props/state changes affect it

  return (
    <motion.section
      className="project-grid"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="holocron-card">
        <h3>Project 1: Hyperdrive Engine</h3>
        <p>Description: Built a real-time web app that simulates hyperspace jumps. Tech: React, Node.js.</p>
        <div id="tie-fighter-container" ref={containerRef} style={{ height: "500px" }} />
      </div>
    </motion.section>
  );
}