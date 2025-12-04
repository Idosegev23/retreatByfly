"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollVelocityText } from "@/components/ui/ScrollVelocityText";

export function ImmersiveDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-nude-100 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nude-50 via-nude-100 to-nude-200/50" />

      {/* Scroll velocity text - Top */}
      <div className="relative z-10 mb-16 opacity-20">
        <ScrollVelocityText
          baseVelocity={-1}
          className="font-cormorant text-6xl md:text-8xl font-bold text-nude-400"
        >
          תקווה ורודה
        </ScrollVelocityText>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-nude-50 rounded-full shadow-soft">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-text mb-1">
              אבו דאבי
            </h3>
            <p className="text-text-light text-sm">
              מלון Rixos על החוף
            </p>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-nude-50 rounded-full shadow-soft">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-text mb-1">
              18-21.02.2026
            </h3>
            <p className="text-text-light text-sm">
              3 לילות / 4 ימים
            </p>
          </motion.div>

          {/* Flight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-nude-50 rounded-full shadow-soft">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-text mb-1">
              Flydubai
            </h3>
            <p className="text-text-light text-sm">
              כולל מזוודה ותיק
            </p>
          </motion.div>

          {/* Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-nude-50 rounded-full shadow-soft">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-text mb-1">
              קבוצה אינטימית
            </h3>
            <p className="text-text-light text-sm">
              נשים בלבד
            </p>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-light text-sm md:text-base">
            חצי פנסיון במלון 5 כוכבים ועוד המון פינוקים
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll velocity text - Bottom */}
      <div className="relative z-10 mt-16 opacity-20">
        <ScrollVelocityText
          baseVelocity={1}
          className="font-cormorant text-6xl md:text-8xl font-bold text-nude-400"
        >
          העצמה נשית
        </ScrollVelocityText>
      </div>
    </section>
  );
}
