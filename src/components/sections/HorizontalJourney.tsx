"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bentoItems = [
  {
    title: "סדנאות חוויתיות",
    subtitle: "להעצמה והשראה",
    size: "large", // spans 2 columns
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "זמן לעצמך",
    subtitle: "ספא, בריכה ומנוחה",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "יציאה מהשגרה",
    subtitle: "שייט וחוויות יוקרתיות",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17L9 11L13 15L21 7" />
        <path d="M14 7H21V14" />
      </svg>
    ),
  },
  {
    title: "טעינה רגשית",
    subtitle: "אוכל טוב, צחוק וחיבור",
    size: "medium",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export function HorizontalJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-16 md:py-24"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-14"
        >
          <span 
            className="text-[10px] md:text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--accent)' }}
          >
            המסע שלך
          </span>
          <h2 
            className="text-2xl md:text-4xl font-semibold mt-2"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            מה מחכה לך בריטריט
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className={`
                relative overflow-hidden rounded-2xl p-5 md:p-6
                ${item.size === 'large' ? 'col-span-2 row-span-2 min-h-[200px] md:min-h-[280px]' : ''}
                ${item.size === 'medium' ? 'col-span-2 min-h-[120px] md:min-h-[140px]' : ''}
                ${item.size === 'small' ? 'col-span-1 min-h-[120px] md:min-h-[140px]' : ''}
              `}
              style={{ 
                backgroundColor: index === 0 ? 'var(--accent)' : 'white',
                border: index === 0 ? 'none' : '1px solid var(--nude-200)',
              }}
            >
              {/* Icon */}
              <div 
                className={`mb-3 md:mb-4 ${item.size === 'large' ? 'mb-6' : ''}`}
                style={{ color: index === 0 ? 'white' : 'var(--accent)' }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className={item.size === 'large' ? 'absolute bottom-5 md:bottom-6 right-5 md:right-6 left-5 md:left-6' : ''}>
                <h3 
                  className={`font-semibold ${item.size === 'large' ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}
                  style={{ 
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    color: index === 0 ? 'white' : 'var(--text)',
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className={`mt-1 ${item.size === 'large' ? 'text-sm md:text-base' : 'text-[11px] md:text-xs'}`}
                  style={{ color: index === 0 ? 'rgba(255,255,255,0.8)' : 'var(--text-light)' }}
                >
                  {item.subtitle}
                </p>
              </div>

              {/* Decorative element for large card */}
              {item.size === 'large' && (
                <div 
                  className="absolute top-4 left-4 w-20 h-20 md:w-28 md:h-28 rounded-full opacity-10"
                  style={{ backgroundColor: 'white' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
