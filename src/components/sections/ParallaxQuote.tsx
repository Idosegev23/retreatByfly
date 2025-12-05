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
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      {/* Background layers */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute top-1/4 right-1/4 w-40 md:w-64 h-40 md:h-64 rounded-full blur-3xl" 
          style={{ backgroundColor: 'var(--pink-200)', opacity: 0.25 }} 
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-56 md:w-96 h-56 md:h-96 rounded-full blur-3xl" 
          style={{ backgroundColor: 'var(--nude-300)', opacity: 0.2 }} 
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-5 text-center"
      >
        <blockquote 
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
        >
          <span style={{ color: 'var(--accent)', fontSize: '1.2em' }}>&ldquo;</span>
          את לא בורחת מהחיים – את חוזרת אליהם
          <br />
          <span 
            className="inline text-3xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: 'var(--accent)' }}
          >
            מחוברת ועוצמתית יותר
          </span>
          <span style={{ color: 'var(--accent)', fontSize: '1.2em' }}>&rdquo;</span>
        </blockquote>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-16 md:w-24 h-[2px] mx-auto mt-8 md:mt-12"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </motion.div>
    </section>
  );
}
