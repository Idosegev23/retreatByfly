"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 z-50"
      style={{ backgroundColor: 'var(--nude-50)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
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
            השקעה בעצמך
          </span>
          <h2 
            className="text-2xl md:text-4xl font-semibold mt-2"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            מחירים
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
          {/* Presale Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
            style={{ 
              backgroundColor: 'white',
              border: '2px solid var(--accent)',
            }}
          >
            {/* Badge */}
            <div 
              className="absolute top-0 left-0 px-3 py-1 text-[10px] md:text-xs font-bold text-white rounded-br-xl"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              פריסייל
            </div>

            <div className="mt-4">
              <p 
                className="text-sm md:text-base mb-2"
                style={{ color: 'var(--text-light)' }}
              >
                הזמנה עד 15.1.2026
              </p>
              <div className="flex items-baseline gap-1">
                <span 
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  6,990
                </span>
                <span 
                  className="text-lg md:text-xl"
                  style={{ color: 'var(--text)' }}
                >
                  ₪
                </span>
              </div>
            </div>
          </motion.div>

          {/* Regular Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative p-6 md:p-8 rounded-2xl"
            style={{ 
              backgroundColor: 'white',
              border: '1px solid var(--nude-200)',
            }}
          >
            <div className="mt-4">
              <p 
                className="text-sm md:text-base mb-2"
                style={{ color: 'var(--text-light)' }}
              >
                לאחר מכן
              </p>
              <div className="flex items-baseline gap-1">
                <span 
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: 'var(--text)' }}
                >
                  7,990
                </span>
                <span 
                  className="text-lg md:text-xl"
                  style={{ color: 'var(--text)' }}
                >
                  ₪
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Room info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 md:mt-10"
        >
          <p 
            className="text-sm md:text-base"
            style={{ color: 'var(--text)' }}
          >
            המחיר לחולקת חדר זוגי
          </p>
          <p 
            className="text-xs md:text-sm mt-2"
            style={{ color: 'var(--text-light)' }}
          >
            ניתן להזמין גם 3 בחדר או חדר יחיד
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-[1px] max-w-xs mx-auto mt-10 md:mt-14"
          style={{ backgroundColor: 'var(--nude-300)' }}
        />
      </div>
    </section>
  );
}

