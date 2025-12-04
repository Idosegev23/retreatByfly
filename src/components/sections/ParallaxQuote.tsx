"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--accent)' }}
    >
      {/* Background layers */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute top-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 rounded-full blur-3xl" 
          style={{ backgroundColor: 'white', opacity: 0.08 }} 
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 md:w-[500px] h-64 md:h-[500px] rounded-full blur-3xl" 
          style={{ backgroundColor: 'white', opacity: 0.05 }} 
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-5 text-center"
      >
        <blockquote 
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'white' }}
        >
          <span className="opacity-60">&ldquo;</span>
          את לא בורחת מהחיים –
          <span className="block"> את חוזרת אליהם</span>
          <span 
            className="block mt-2 md:mt-4"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            מחוברת ועוצמתית יותר
          </span>
          <span className="opacity-60">&rdquo;</span>
        </blockquote>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-20 md:w-28 h-[2px] mx-auto mt-10 md:mt-14"
          style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
        />
      </motion.div>
    </section>
  );
}
