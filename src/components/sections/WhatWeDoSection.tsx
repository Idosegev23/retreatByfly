"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    icon: "💫",
    text: "סדנאות חוויתיות להעצמה",
  },
  {
    icon: "🏨",
    text: "מלון 5 כוכבים על החוף",
  },
  {
    icon: "✈️",
    text: "טיסות כולל מזוודה",
  },
  {
    icon: "🛥️",
    text: "שייט ביאכטה",
  },
  {
    icon: "📸",
    text: "צילומי תדמית בחוף",
  },
];

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nude-200/30 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] md:text-xs font-medium tracking-wider uppercase"
            style={{ color: 'var(--accent)' }}
          >
            מה כלול
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-semibold mt-2"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            החבילה המושלמת
          </motion.h2>
        </div>

        {/* Highlights list */}
        <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.08 }}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-nude-200/50"
            >
              <span className="text-xl md:text-2xl">{highlight.icon}</span>
              <span 
                className="text-sm md:text-base"
                style={{ color: 'var(--text)' }}
              >
                {highlight.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
