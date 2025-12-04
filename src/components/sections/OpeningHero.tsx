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
      className="relative h-screen overflow-hidden"
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
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating accent circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(244,169,186,0.15) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(212,196,184,0.2) 0%, transparent 70%)',
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
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span 
            className="text-xs md:text-sm tracking-[0.3em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            ריטריט נשים · העצמה נשית
          </span>
        </motion.div>

        {/* Main title with stagger reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] font-light tracking-tight"
            style={{ 
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: 'var(--text)',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            תקווה
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] font-light tracking-tight"
            style={{ 
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: 'var(--pink-300)',
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ורודה
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg font-light max-w-md mx-auto text-center mb-6"
          style={{ color: 'var(--text-light)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          רוגע והנאה בחוויה יוקרתית ומדויקת עבורך
        </motion.p>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="w-12 h-[1px]" style={{ backgroundColor: 'var(--nude-300)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--pink-300)' }} />
          <div className="w-12 h-[1px]" style={{ backgroundColor: 'var(--nude-300)' }} />
        </motion.div>

        {/* Details line */}
        <motion.p
          className="text-sm md:text-base tracking-[0.1em]"
          style={{ color: 'var(--text-light)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          18-21.02.2026 | אבו דאבי | 3 לילות
        </motion.p>

        {/* Hotel info */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.1em] mt-2"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          מלון Rixos 5 כוכבים על החוף
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase"
            style={{ color: 'var(--accent)' }}
            whileHover={{ x: 5 }}
          >
            <span>לפרטים והרשמה</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              &larr;
            </motion.span>
            <span 
              className="absolute -bottom-1 right-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span 
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ color: 'var(--text-light)' }}
        >
          גלילה
        </span>
        <motion.div
          className="w-[1px] h-8"
          style={{ backgroundColor: 'var(--nude-400)' }}
          animate={{ scaleY: [1, 0.5, 1], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
