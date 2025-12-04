"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nude-50 py-32"
    >
      {/* Background layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--pink-200)', opacity: 0.3 }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--nude-300)', opacity: 0.2 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--pink-100)', opacity: 0.25 }} />
      </motion.div>

      {/* Decorative quotes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 right-10 md:right-20 text-nude-200 pointer-events-none"
      >
        <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <blockquote className="font-cormorant text-3xl md:text-5xl lg:text-6xl font-medium text-text leading-tight">
          <span className="text-accent">&ldquo;</span>
          את לא בורחת מהחיים
          <br className="hidden md:block" />
          <span className="text-text-light"> – </span>
          את חוזרת אליהם
          <br className="hidden md:block" />
          <span className="text-pink-300">מחוברת ועוצמתית יותר</span>
          <span className="text-accent">&rdquo;</span>
        </blockquote>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-24 h-[2px] bg-accent mx-auto mt-12"
        />
      </motion.div>

      {/* Bottom decorative quote */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 md:left-20 text-nude-200 pointer-events-none rotate-180"
      >
        <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </motion.div>
    </section>
  );
}
