"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ImmersiveDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const details = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "אבו דאבי",
      subtitle: "מלון Rixos 5★",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "18-21.02.2026",
      subtitle: "3 לילות / 4 ימים",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "Flydubai",
      subtitle: "כולל מזוודה ותיק",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "קבוצה אינטימית",
      subtitle: "נשים בלבד",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nude-50 via-nude-100 to-nude-200/30" />

      {/* Decorative text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span 
          className="text-[20vw] font-bold opacity-[0.03] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          תקווה ורודה
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center rounded-full shadow-soft"
                style={{ backgroundColor: 'var(--nude-50)', color: 'var(--accent)' }}
              >
                {item.icon}
              </div>
              <h3 
                className="text-base md:text-xl font-semibold mb-0.5"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
              >
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs" style={{ color: 'var(--text-light)' }}>
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-10 text-center text-xs md:text-sm"
          style={{ color: 'var(--text-light)' }}
        >
          חצי פנסיון במלון 5 כוכבים ועוד המון פינוקים ✨
        </motion.p>
      </div>
    </section>
  );
}
