"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const bentoItems = [
  {
    title: "סדנאות חוויתיות",
    subtitle: "להעצמה והשראה",
    size: "large",
    image: "/img1.png",
    imageClass: "object-cover",
  },
  {
    title: "זמן לעצמך",
    subtitle: "ספא, בריכה ומנוחה",
    size: "small",
    image: "/img2.png",
    imageClass: "object-cover scale-[0.85] object-center",
  },
  {
    title: "יציאה מהשגרה",
    subtitle: "שייט וחוויות יוקרתיות",
    size: "small",
    image: "/img4.png", // switched
    imageClass: "object-cover",
  },
  {
    title: "טעינה רגשית",
    subtitle: "אוכל טוב, צחוק וחיבור",
    size: "medium",
    image: "/img3.png", // switched
    imageClass: "object-cover",
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
                relative overflow-hidden rounded-2xl
                ${item.size === 'large' ? 'col-span-2 row-span-2 min-h-[200px] md:min-h-[280px]' : ''}
                ${item.size === 'medium' ? 'col-span-2 min-h-[120px] md:min-h-[140px]' : ''}
                ${item.size === 'small' ? 'col-span-1 min-h-[120px] md:min-h-[140px]' : ''}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={item.imageClass}
                  sizes={item.size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                />
                {/* Gradient overlay for text readability */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.5) 100%)'
                  }}
                />
              </div>

              {/* Content - centered */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4 md:p-5">
                <h3 
                  className={`font-semibold text-white ${item.size === 'large' ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}
                  style={{ 
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className={`mt-1 text-white/90 ${item.size === 'large' ? 'text-sm md:text-base' : 'text-[10px] md:text-xs'}`}
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
