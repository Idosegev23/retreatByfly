"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: "סדנאות חוויתיות להעצמה והשראה",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    text: "חצי פנסיון במלון 5 כוכבים על החוף",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    text: "טיסות Flydubai כולל מזוודה ותיק",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    text: "שייט ביאכטה וחוויות יוקרתיות",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    text: "צילומי תדמית וסטיילינג בחוף",
  },
];

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-nude-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nude-200/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent text-sm font-medium tracking-wider uppercase"
            >
              מה כלול
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-cormorant text-4xl md:text-5xl font-semibold text-text mt-4 mb-8"
            >
              החבילה המושלמת
            </motion.h2>

            {/* Highlights list */}
            <div className="space-y-5">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-nude-50 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {highlight.icon}
                  </div>
                  <span className="text-lg text-text group-hover:text-accent transition-colors">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Concentric circles */}
              <div className="absolute inset-0 rounded-full border-2 border-nude-200 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-nude-300 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
              <div className="absolute inset-16 rounded-full border-2 border-nude-400 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
              
              {/* Center content */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-accent/20 to-nude-300/40 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="font-cormorant text-4xl font-bold text-accent">4</span>
                  <p className="text-sm text-text-light mt-1">ימים של<br />פינוק</p>
                </div>
              </div>

              {/* Floating dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-accent/40"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
