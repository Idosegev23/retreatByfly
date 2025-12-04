"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const targetAudience = [
  {
    title: "להתמלא מחדש",
    description: "לעצור, לנשום ולתת לעצמך את הזמן שמגיע לך",
    icon: "✨",
  },
  {
    title: "לדייק כיוון",
    description: "להבין מה את באמת רוצה ולאן את הולכת",
    icon: "🧭",
  },
  {
    title: "להתחזק מבפנים",
    description: "לחזק את הביטחון והערך העצמי שלך",
    icon: "💪",
  },
  {
    title: "לחזור ממגנטת",
    description: "לחזור הביתה עם אנרגיה חדשה וכוח פנימי",
    icon: "🌟",
  },
];

export function InteractiveCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-nude-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full bg-nude-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-nude-100 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent text-[10px] md:text-xs font-medium tracking-wider uppercase"
          >
            ביחד נוכל
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold text-text mt-3 mb-4"
          >
            מה תקבלי מהריטריט
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {targetAudience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-4 md:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-nude-200/50 shadow-soft"
            >
              {/* Icon */}
              <div className="text-2xl md:text-3xl mb-3">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-cormorant text-lg md:text-xl font-semibold text-text mb-1.5 md:mb-2">
                {item.title}
              </h3>
              <p className="text-text-light text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
