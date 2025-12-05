"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // First line - comes from right
  const line1X = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  const line1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  // Second line (מחוברת ועוצמתית) - comes from left with BIG zoom on exit
  const line2X = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-100, 0, 0, 100]);
  const line2Opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const line2Scale = useTransform(scrollYProgress, [0.1, 0.45, 0.6, 1], [0.8, 1, 1, 1.8]);

  // Pink accent color
  const pinkColor = "#c89696";
  const warmBrown = "#5a4a42";

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#faf5f2' }}
    >
      {/* Background layers - warm colors */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute top-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl" 
          style={{ backgroundColor: '#f4a9ba', opacity: 0.25 }} 
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 md:w-[400px] h-64 md:h-[400px] rounded-full blur-3xl" 
          style={{ backgroundColor: '#e8d5c4', opacity: 0.3 }} 
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <blockquote 
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {/* First line - from right */}
          <motion.div
            style={{ x: line1X, opacity: line1Opacity }}
          >
            <span style={{ color: pinkColor, fontSize: '1.2em' }}>&ldquo;</span>
            <span style={{ color: warmBrown }}>את לא בורחת מהחיים – את חוזרת אליהם</span>
          </motion.div>
          
          {/* Second line - from left with BIG zoom on exit */}
          <motion.div
            style={{ x: line2X, opacity: line2Opacity, scale: line2Scale }}
            className="mt-2 md:mt-4"
          >
            <span 
              className="inline-block text-3xl md:text-5xl lg:text-6xl font-extrabold"
              style={{ color: pinkColor }}
            >
              מחוברת ועוצמתית יותר
            </span>
            <span style={{ color: pinkColor, fontSize: '0.6em' }}>&rdquo;</span>
          </motion.div>
        </blockquote>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-16 md:w-24 h-[2px] mx-auto mt-10 md:mt-14"
          style={{ backgroundColor: pinkColor }}
        />
      </div>
    </section>
  );
}
