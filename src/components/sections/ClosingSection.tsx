"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(253, 252, 251, 1)", "rgba(232, 221, 214, 1)"]
  );

  const scale = useTransform(scrollYProgress, [0.5, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-nude-300/20"
              style={{
                transform: `scale(${0.6 + i * 0.2})`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-8 leading-tight">
            הגיע הזמן
            <br />
            <span className="text-accent">לעצור רגע</span>
            <br />
            ולהתחבר לעצמך מחדש
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-text-light max-w-2xl mx-auto mb-12"
        >
          4 ימים של חיבור, העצמה והנאה מחכים לך.
          <br />
          מרחב בטוח, נשי ויוקרתי.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            href="#contact"
            className="px-10 py-5 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors shadow-medium text-xl"
          >
            רוצה להצטרף
          </MagneticButton>
        </motion.div>

        {/* Bottom details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-nude-300/30"
        >
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center text-text-light text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>אבו דאבי</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>18-21.02.2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>מלון Rixos 5 כוכבים</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>קבוצה אינטימית</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 pt-8 border-t border-nude-300/30"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-right">
              <h3 className="font-cormorant text-2xl font-semibold text-text">
                תקווה ורודה
              </h3>
              <p className="text-text-light text-sm mt-1">
                ריטריט נשים · העצמה נשית
              </p>
            </div>
            
            <p className="text-text-light/60 text-sm">
              הסדנאות מונחות על ידי מטפלת LI-CBT ומנטורית מוסמכת
            </p>
          </div>
        </div>
      </motion.footer>
    </motion.section>
  );
}
