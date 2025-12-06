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
          <span style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>4</span> ימים של חיבור, העצמה והנאה מחכים לך.
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
          <div className="flex flex-col gap-6">
            {/* Top row - Brand + Credentials */}
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
              
              <div 
                className="text-center max-w-md p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(232, 125, 160, 0.1)', border: '1px solid var(--accent)' }}
              >
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text)' }}>
                  הסדנאות מונחות על ידי מטפלת <span style={{ color: 'var(--accent)', fontWeight: 600 }}>LI-CBT</span> מוסמכת, 
                  מאסטר <span style={{ color: 'var(--accent)', fontWeight: 600 }}>NLP</span>.
                </p>
                <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--text-light)' }}>
                  עם ניסיון של <span style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>15</span> שנים בהובלת תהליכי מנטורינג וקידום נשים בארגונים.
                </p>
              </div>
            </div>

            {/* Bottom row - Contact info */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 border-t border-nude-300/30">
              <a 
                href="mailto:byfly58@gmail.com" 
                className="flex items-center gap-2 text-xs md:text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-light)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                byfly58@gmail.com
              </a>
              <a 
                href="tel:051-5452412" 
                className="flex items-center gap-2 text-xs md:text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-light)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>051-5452412</span>
              </a>
              <a 
                href="tel:0547771538" 
                className="flex items-center gap-2 text-xs md:text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-light)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>054-7771538</span>
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
