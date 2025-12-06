"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function OpeningHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#faf8f6' }}
    >
      {/* Luxury gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #fdfcfb 0%, #f8f4f1 50%, #f5eeea 100%)',
          }}
        />
      </div>

      {/* Floating accent circles - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(244,169,186,0.12) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 md:-bottom-48 md:-left-48 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(212,196,184,0.15) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 py-16"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span 
            className="text-[10px] md:text-xs tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            ריטריט העצמה נשית
          </span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.h1
            className="text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] font-light tracking-tight text-center"
            style={{ 
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: 'var(--text)',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            תקווה
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.h1
            className="text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] font-light tracking-tight text-center"
            style={{ 
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: 'var(--pink-300)',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ורודה
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base font-light max-w-xs md:max-w-md mx-auto text-center mb-5 md:mb-6 px-2"
          style={{ color: 'var(--text-light)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          רוגע והנאה בחוויה יוקרתית ומדויקת עבורך
        </motion.p>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center gap-3 mb-5 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-8 md:w-12 h-[1px]" style={{ backgroundColor: 'var(--nude-300)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--pink-300)' }} />
          <div className="w-8 md:w-12 h-[1px]" style={{ backgroundColor: 'var(--nude-300)' }} />
        </motion.div>

        {/* Details line */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.08em]"
          style={{ color: 'var(--text-light)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          18-21.02.2026 | אבו דאבי | 4 ימים
        </motion.p>

        {/* Hotel info */}
        <motion.p
          className="text-[10px] md:text-xs tracking-[0.08em] mt-1.5"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          מלון Rixos 5 כוכבים על החוף
        </motion.p>

        {/* CTA Button - larger on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-8 md:mt-10"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm md:text-base font-medium"
            style={{ 
              backgroundColor: 'var(--accent)',
              color: 'white',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>לפרטים והרשמה</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ←
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
