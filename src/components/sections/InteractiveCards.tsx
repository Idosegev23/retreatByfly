"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const targetAudience = [
  {
    title: "להתמלא מחדש",
    description: "לעצור, לנשום ולתת לעצמך את הזמן שמגיע לך",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "לדייק כיוון",
    description: "להבין מה את באמת רוצה ולאן את הולכת",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "להתחזק מבפנים",
    description: "לחזק את הביטחון והערך העצמי שלך",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.5 5 2 7.5L12 17l-6.5 4.5 2-7.5L2 9h7l3-7z" />
      </svg>
    ),
  },
  {
    title: "לחזור ממגנטת",
    description: "לחזור הביתה עם אנרגיה חדשה וכוח פנימי",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export function InteractiveCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 bg-nude-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full bg-nude-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-nude-100 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl md:text-4xl font-semibold"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            ביחד נוכל
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {targetAudience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-4 md:p-5 rounded-xl bg-white border border-nude-200/60 shadow-soft"
            >
              {/* Icon in circle */}
              <div 
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mb-3"
                style={{ backgroundColor: 'var(--pink-50)', color: 'var(--accent)' }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-cormorant text-base md:text-lg font-semibold text-text mb-1">
                {item.title}
              </h3>
              <p className="text-text-light text-[11px] md:text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
