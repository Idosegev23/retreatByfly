"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ByflySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--nude-50)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-pink-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-nude-200/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        {/* Byfly Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <a
            href="https://www.instagram.com/byfly58/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:scale-105"
            style={{ 
              backgroundColor: 'white', 
              border: '1px solid var(--nude-200)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
          >
            {/* Instagram icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span 
              className="text-sm font-medium"
              style={{ color: 'var(--text)' }}
            >
              חוויה נשית עוצמתית – מבית <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Byfly</span>
            </span>
          </a>
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <p 
            className="text-sm md:text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-light)' }}
          >
            אם את מחפשת יציאה מהשגרה, מנוחה ופינוקים, חיבור לעצמך, תוכן מחזק,
            <br className="hidden md:block" />
            חוויה קולינרית והכל במרחב בטוח בהנחיית מאסטרית NLP
            <br className="hidden md:block" />
            בארגון סוכנות נסיעות <span style={{ fontWeight: 600 }}>Byfly</span>
          </p>
          
          <p 
            className="text-lg md:text-xl font-semibold"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--accent)' }}
          >
            הגעת למקום הנכון
          </p>
        </motion.div>

        {/* Story section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative p-6 md:p-8 rounded-2xl"
          style={{ 
            backgroundColor: 'white',
            border: '1px solid var(--nude-200)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}
        >
          <div className="space-y-4">
            <p 
              className="text-base md:text-lg"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>תקווה ורודה</span> נולדה מתוך הצורך
            </p>
            
            <div className="flex flex-col items-center gap-2">
              {['לעצור', 'לנשום', 'להיות את'].map((text, i) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                  className="text-lg md:text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
                >
                  {text}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.05, duration: 0.4 }}
                className="text-sm md:text-base"
                style={{ color: 'var(--text-light)' }}
              >
                בלי תפקידים, משימות ועומס השגרה.
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

