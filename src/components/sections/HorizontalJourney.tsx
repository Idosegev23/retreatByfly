"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const journeySteps = [
  {
    number: "01",
    title: "סדנאות חוויתיות",
    description: "סדנאות להעצמה והשראה מונחות על ידי מטפלת מוסמכת",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "זמן לעצמך",
    description: "ספא, בריכה, שיזוף ומנוחה במלון 5 כוכבים",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "יציאה מהשגרה",
    description: "שופינג, שייט ביאכטה וחוויות יוקרתיות",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "טעינה רגשית",
    description: "אוכל טוב, צחוק, חיבור וחברות עמוקה",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

  const xMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-220%"]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative h-[400vh] md:h-[250vh]"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="text-center px-6 mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-medium tracking-widest uppercase"
            style={{ color: 'var(--accent)' }}
          >
            המסע שלך
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 md:mt-4"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            מה מחכה לך בריטריט
          </motion.h2>
        </div>

        {/* Progress bar - desktop only */}
        <div className="absolute top-1/2 left-6 right-6 md:left-8 md:right-8 h-[1px] hidden md:block" style={{ backgroundColor: 'var(--nude-200)' }}>
          <motion.div
            className="h-full origin-right"
            style={{ width: progressWidth, backgroundColor: 'var(--accent)' }}
          />
        </div>

        {/* Horizontal scroll cards */}
        <motion.div
          style={{ x: isMobile ? xMobile : xDesktop }}
          className="flex flex-row-reverse gap-4 md:gap-8 px-4 md:px-16"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[70vw] md:w-[35vw] lg:w-[28vw]"
            >
              <div 
                className="relative h-full p-6 md:p-10 rounded-2xl border transition-all duration-500"
                style={{ 
                  backgroundColor: 'var(--nude-50)', 
                  borderColor: 'var(--nude-200)',
                  boxShadow: '0 4px 20px rgba(139, 115, 85, 0.08)'
                }}
              >
                {/* Number */}
                <span 
                  className="absolute top-4 left-4 md:top-6 md:left-6 text-5xl md:text-7xl font-bold"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--nude-200)' }}
                >
                  {step.number}
                </span>
                
                {/* Icon */}
                <div 
                  className="relative z-10 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-xl mb-4 md:mb-6"
                  style={{ backgroundColor: 'var(--pink-50)', color: 'var(--accent)' }}
                >
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 
                  className="relative z-10 text-xl md:text-2xl font-semibold mb-2 md:mb-3"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 leading-relaxed text-sm" style={{ color: 'var(--text-light)' }}>
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
          className="text-center text-xs mt-6 md:hidden"
          style={{ color: 'var(--text-light)' }}
        >
          גללי למטה להמשך
        </motion.p>
      </div>
    </section>
  );
}
