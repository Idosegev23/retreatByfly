"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const journeySteps = [
  {
    number: "01",
    title: "סדנאות חוויתיות",
    description: "סדנאות להעצמה והשראה מונחות על ידי מטפלת מוסמכת",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "זמן לעצמך",
    description: "ספא, בריכה, שיזוף ומנוחה במלון 5 כוכבים",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "יציאה מהשגרה",
    description: "שופינג, שייט ביאכטה וחוויות יוקרתיות",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "טעינה רגשית",
    description: "אוכל טוב, צחוק, חיבור וחברות עמוקה",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function HorizontalJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile: 4 cards * 75vw = 300vw total, need to scroll ~225vw to see last card
  // Desktop: 4 cards * 40vw = 160vw total, need to scroll ~120vw
  const xMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-230%"]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative h-[500vh] md:h-[250vh]"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-12 md:pt-0">
        {/* Header */}
        <div className="text-center px-4 mb-5 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--accent)' }}
          >
            המסע שלך
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl font-semibold mt-2"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            מה מחכה לך בריטריט
          </motion.h2>
        </div>

        {/* Progress bar - desktop only */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px]" style={{ backgroundColor: 'var(--nude-200)' }}>
          <motion.div
            className="h-full origin-right"
            style={{ width: progressWidth, backgroundColor: 'var(--accent)' }}
          />
        </div>

        {/* Mobile progress bar */}
        <div className="md:hidden mx-auto mb-4 w-32 h-1 bg-nude-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ width: progressWidth, backgroundColor: 'var(--accent)' }}
          />
        </div>

        {/* Horizontal scroll cards */}
        <motion.div
          style={{ x: isMobile ? xMobile : xDesktop }}
          className="flex flex-row-reverse gap-3 md:gap-5 px-4 md:px-12"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[72vw] md:w-[35vw] lg:w-[28vw]"
            >
              <div 
                className="relative h-full p-4 md:p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'var(--nude-50)', 
                  borderColor: 'var(--nude-200)',
                  boxShadow: '0 4px 20px rgba(139, 115, 85, 0.08)'
                }}
              >
                {/* Number */}
                <span 
                  className="absolute top-3 left-3 md:top-4 md:left-4 text-3xl md:text-5xl font-bold"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--nude-200)' }}
                >
                  {step.number}
                </span>
                
                {/* Icon */}
                <div 
                  className="relative z-10 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-xl mb-3 md:mb-4"
                  style={{ backgroundColor: 'var(--pink-50)', color: 'var(--accent)' }}
                >
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 
                  className="relative z-10 text-base md:text-lg font-semibold mb-1.5"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 leading-relaxed text-[11px] md:text-sm" style={{ color: 'var(--text-light)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint - mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[10px] mt-4 md:hidden"
          style={{ color: 'var(--text-light)' }}
        >
          גללי למטה לראות עוד
        </motion.p>
      </div>
    </section>
  );
}
