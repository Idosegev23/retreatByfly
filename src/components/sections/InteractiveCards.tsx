"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const targetAudience = [
  {
    title: "להתמלא מחדש",
    description: "לנשים שמרגישות שהן נותנות הרבה ומגיע להן זמן לעצמן",
    gradient: "from-pink-50 to-nude-100",
  },
  {
    title: "לדייק כיוון",
    description: "לנשים שרוצות להבין מה הן באמת רוצות ולאן הן הולכות",
    gradient: "from-nude-200 to-pink-100",
  },
  {
    title: "להתחזק מבפנים",
    description: "לנשים שרוצות לחזק את הביטחון והערך העצמי שלהן",
    gradient: "from-pink-200/50 to-nude-200",
  },
  {
    title: "להיזכר בעוצמה",
    description: "לנשים שרוצות להתחבר מחדש לכוח הפנימי שלהן",
    gradient: "from-nude-300 to-pink-100",
  },
];

interface Card3DProps {
  title: string;
  description: string;
  gradient: string;
  index: number;
}

function Card3D({ title, description, gradient, index }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="group cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${gradient} border border-nude-200/50 shadow-soft hover:shadow-medium transition-shadow duration-500`}
      >
        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, transparent 50%)`,
          }}
        />

        {/* Floating icon */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="w-14 h-14 flex items-center justify-center bg-nude-50/80 backdrop-blur-sm rounded-2xl mb-6 shadow-sm"
        >
          <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </motion.div>

        {/* Content */}
        <motion.h3
          style={{ transform: "translateZ(30px)" }}
          className="font-cormorant text-2xl md:text-3xl font-semibold text-text mb-3"
        >
          {title}
        </motion.h3>
        <motion.p
          style={{ transform: "translateZ(20px)" }}
          className="text-text-light leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Bottom accent */}
        <motion.div
          style={{ transform: "translateZ(10px)" }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-l from-transparent via-accent/30 to-transparent rounded-b-3xl"
        />
      </motion.div>
    </motion.div>
  );
}

export function InteractiveCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-nude-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-nude-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-nude-100 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            למי מתאים
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-text mt-4 mb-6"
          >
            הריטריט הזה בשבילך אם את רוצה
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {targetAudience.map((item, index) => (
            <Card3D key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

