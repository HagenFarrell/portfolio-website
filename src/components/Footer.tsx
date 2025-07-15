// src/components/Footer.tsx
"use client";
import { useState } from "react";

export default function Footer() {
  const quotes = [
    "May the Force be with you.",
    "I am one with the Force.",
    "Do or do not, there is no try.",
    "These aren't the droids you're looking for.",
  ];
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <footer id="force-quote" onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
      {quote}
    </footer>
  );
}