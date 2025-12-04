"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Dress code colors for each day
const dressCodeColors = {
  1: { bg: "#8B7355", name: "חום אדמה", light: "rgba(139, 115, 85, 0.1)" },
  2: { bg: "#4A90A4", name: "ים כחול", light: "rgba(74, 144, 164, 0.1)" },
  3: { bg: "#F5F5F5", name: "לבן טהור", light: "rgba(245, 245, 245, 0.3)" },
  4: { bg: "#F4A9BA", name: "חיוך ורוד", light: "rgba(244, 169, 186, 0.15)" },
};

const timelineData = [
  {
    day: 1,
    title: "הגעה, התכנסות ופתיחת הלב",
    theme: "נחיתה רגשית וחיבור לקבוצה ולעצמי",
    dressCode: "חום אדמה",
    activities: [
      { time: "07:45", activity: "מפגש בנתב״ג" },
      { time: "10:40", activity: "המראה" },
      { time: "15:00-17:00", activity: "הגעה, קבלת חדרים, התארגנות והיכרות" },
      { time: "18:00-20:00", activity: "ארוחת ערב מפוארת" },
      { time: "20:00-21:30", activity: "מעגל פתיחה - ״איפה אני נמצאת היום בחיים שלי״" },
      { time: "21:30", activity: "הרמת כוסית וריקודים בחוף" },
    ],
  },
  {
    day: 2,
    title: "חיבור לעצמי ולגוף",
    theme: "הקשבה, השראה ונשימה",
    dressCode: "ים כחול",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר" },
      { time: "09:30-10:30", activity: "תנועה נשית / יוגה / סאונד הילינג (אופציונלי)" },
      { time: "11:00-16:00", activity: "זמן חופשי: מנוחה / ספא / צילומי תדמית בחוף" },
      { time: "16:00-18:30", activity: "סדנה חוויתית - הילדה הפנימית וחיזוק חוזקות" },
      { time: "18:30-20:30", activity: "ארוחת ערב" },
      { time: "20:00", activity: "ערב חופשי / שופינג ושחרור" },
    ],
  },
  {
    day: 3,
    title: "שנה חדשה - חלומות חדשים",
    theme: "מטרות, חלומות וחזון",
    dressCode: "לבן טהור",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר" },
      { time: "11:00-14:00", activity: "שייט ביאכטה" },
      { time: "14:00-16:30", activity: "מנוחה בריכה, זמן חופשי וצחוקים" },
      { time: "16:30-18:30", activity: "סדנה בשקיעה - ״מגדלור מאיר את הדרך״" },
      { time: "19:00-21:00", activity: "קבלת שבת - ארוחת ערב חגיגית" },
      { time: "21:00-23:00", activity: "מסיבת פיג׳מות ומשחקי חברה" },
    ],
  },
  {
    day: 4,
    title: "תובנות ומתנות - עפה על עצמי",
    theme: "קבלה, אהבה והודיה",
    dressCode: "חיוך ורוד",
    activities: [
      { time: "08:30-09:30", activity: "ארוחת בוקר" },
      { time: "10:00-13:00", activity: "סדנת סיכום - ״עפה על עצמי״ + חלוקת מתנות" },
      { time: "13:00", activity: "צ׳ק אאוט" },
      { time: "13:00-16:00", activity: "זמן חופשי - שופינג ומנוחה" },
      { time: "17:00", activity: "יציאה לשדה התעופה" },
      { time: "20:30", activity: "המראה חזרה - מחוזקת עם אנרגיה ממגנטת" },
    ],
  },
];

export function StickyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative"
      style={{ height: `${timelineData.length * 100}vh` }}
    >
      {/* Dynamic background color based on active day */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundColor: dressCodeColors[activeDay as keyof typeof dressCodeColors]?.light || 'var(--nude-50)',
          }}
        />
      </AnimatePresence>

      {/* Sticky header */}
      <div className="sticky top-0 z-20 pt-6 md:pt-8 pb-4 pointer-events-none">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-8">
            <span 
              className="text-xs md:text-sm font-medium tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              הלו״ז
            </span>
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 md:mt-4"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              4 ימים של קסם
            </h2>
          </div>

          {/* Day indicators with dress code */}
          <div className="flex justify-center gap-2 md:gap-4">
            {timelineData.map((day) => (
              <button
                key={day.day}
                onClick={() => {
                  const element = document.getElementById(`day-${day.day}`);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pointer-events-auto relative flex flex-col items-center transition-all duration-300"
              >
                <span 
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm md:text-lg font-semibold transition-all duration-500 ${
                    activeDay === day.day ? "scale-110" : ""
                  }`}
                  style={{ 
                    backgroundColor: activeDay === day.day 
                      ? dressCodeColors[day.day as keyof typeof dressCodeColors]?.bg 
                      : 'var(--nude-100)',
                    color: activeDay === day.day 
                      ? (day.day === 3 ? 'var(--text)' : 'white')
                      : 'var(--text-light)',
                    border: day.day === 3 && activeDay === day.day ? '2px solid var(--nude-300)' : 'none'
                  }}
                >
                  {day.day}
                </span>
                <span 
                  className="text-[10px] md:text-xs mt-1 hidden md:block transition-opacity"
                  style={{ 
                    color: activeDay === day.day ? 'var(--accent)' : 'var(--text-light)',
                    opacity: activeDay === day.day ? 1 : 0.6
                  }}
                >
                  {day.dressCode}
                </span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 md:mt-6 h-1 bg-nude-200 rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              className="h-full rounded-full transition-colors duration-500"
              style={{ 
                width: progress.get() + "%",
                backgroundColor: dressCodeColors[activeDay as keyof typeof dressCodeColors]?.bg || 'var(--accent)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Timeline content */}
      <div className="relative z-10">
        {timelineData.map((day, index) => (
          <TimelineDay
            key={day.day}
            day={day}
            index={index}
            setActiveDay={setActiveDay}
            dressCodeColor={dressCodeColors[day.day as keyof typeof dressCodeColors]}
          />
        ))}
      </div>

      {/* Note about workshops */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="sticky bottom-8 z-20 text-center px-6"
      >
        <p 
          className="text-xs md:text-sm max-w-md mx-auto"
          style={{ color: 'var(--text-light)' }}
        >
          * כל הסדנאות אופציונליות לבחירה אישית. התכנית נתונה לשינויים ותוספות.
        </p>
      </motion.div>
    </section>
  );
}

interface TimelineDayProps {
  day: typeof timelineData[0];
  index: number;
  setActiveDay: (day: number) => void;
  dressCodeColor: { bg: string; name: string; light: string };
}

function TimelineDay({ day, index, setActiveDay, dressCodeColor }: TimelineDayProps) {
  const dayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: dayRef,
    offset: ["start center", "end center"],
  });

  scrollYProgress.on("change", (value) => {
    if (value > 0 && value < 1) {
      setActiveDay(day.day);
    }
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.div
      id={`day-${day.day}`}
      ref={dayRef}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center py-32"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div 
          className="relative p-6 md:p-12 rounded-3xl border shadow-lg backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(253, 252, 251, 0.9)',
            borderColor: dressCodeColor.bg,
            borderWidth: '2px'
          }}
        >
          {/* Day number badge */}
          <div 
            className="absolute -top-5 right-6 md:right-12 px-4 py-2 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: dressCodeColor.bg,
              color: day.day === 3 ? 'var(--text)' : 'white',
              border: day.day === 3 ? '2px solid var(--nude-300)' : 'none'
            }}
          >
            יום {day.day} · {day.dressCode}
          </div>

          {/* Header */}
          <div className="mb-6 md:mb-8 mt-4">
            <span 
              className="text-sm font-medium"
              style={{ color: dressCodeColor.bg }}
            >
              {day.theme}
            </span>
            <h3 
              className="text-2xl md:text-4xl font-semibold mt-2"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              {day.title}
            </h3>
          </div>

          {/* Activities */}
          <div className="space-y-3 md:space-y-4">
            {day.activities.map((activity, actIndex) => (
              <motion.div
                key={actIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: actIndex * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-3 md:gap-4 items-start group"
              >
                <span 
                  className="flex-shrink-0 w-20 md:w-24 text-xs md:text-sm font-medium"
                  style={{ color: dressCodeColor.bg }}
                >
                  {activity.time}
                </span>
                <div 
                  className="flex-shrink-0 w-2 h-2 mt-1.5 md:mt-2 rounded-full transition-transform group-hover:scale-150"
                  style={{ backgroundColor: dressCodeColor.bg }}
                />
                <span 
                  className="text-sm md:text-base transition-colors group-hover:text-accent"
                  style={{ color: 'var(--text)' }}
                >
                  {activity.activity}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
