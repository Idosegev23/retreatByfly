"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--nude-200)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-nude-300/20"
              style={{ transform: `scale(${0.6 + i * 0.2})` }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            הגיע הזמן
            <br />
            <span style={{ color: 'var(--accent)' }}>לעצור רגע</span>
            <br />
            ולהתחבר לעצמך מחדש
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base mb-8"
          style={{ color: 'var(--text-light)' }}
        >
          4 ימים של חיבור, העצמה והנאה מחכים לך.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
          >
            רוצה להצטרף
          </a>
        </motion.div>

        {/* Bottom details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 md:mt-14 pt-6 border-t border-nude-300/40"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-center text-xs md:text-sm" style={{ color: 'var(--text-light)' }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              אבו דאבי
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              18-21.02.2026
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              Rixos 5★
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-12 md:mt-16 pt-6 border-t border-nude-300/40"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <h3 
                className="text-xl font-semibold"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
              >
                תקווה ורודה
              </h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-light)' }}>
                ריטריט נשים · העצמה נשית
              </p>
            </div>
            
            <p className="text-xs md:text-sm text-center max-w-md" style={{ color: 'var(--text-light)' }}>
              הסדנאות מונחות על ידי מטפלת LI-CBT מוסמכת, מאסטר NLP.
              <br />
              עם ניסיון של 15 שנים בהובלת תהליכי מנטורינג וקידום נשים בארגונים.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
