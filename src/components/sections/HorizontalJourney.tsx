"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journeyItems = [
  "סדנאות חוויתיות להעצמה והשראה",
  "זמן לעצמך - ספא, בריכה ומנוחה",
  "יציאה מהשגרה - שייט וחוויות יוקרתיות",
  "טעינה רגשית - אוכל טוב, צחוק וחיבור",
];

export function HorizontalJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-20 md:py-28"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-[10px] md:text-xs font-medium tracking-widest uppercase"
          style={{ color: 'var(--accent)' }}
        >
          המסע שלך
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-semibold mt-3 mb-12 md:mb-16"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
        >
          מה מחכה לך בריטריט
        </motion.h2>

        {/* Animated text items */}
        <div className="space-y-6 md:space-y-8">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Number */}
              <span 
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold opacity-10"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--accent)' }}
              >
                0{index + 1}
              </span>
              
              {/* Text */}
              <p 
                className="text-lg md:text-2xl font-light pr-12 md:pr-20"
                style={{ 
                  fontFamily: 'var(--font-cormorant), Georgia, serif', 
                  color: 'var(--text)',
                }}
              >
                {item}
              </p>
              
              {/* Divider line */}
              {index < journeyItems.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                  className="h-[1px] mt-6 md:mt-8 origin-right"
                  style={{ backgroundColor: 'var(--nude-300)' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
