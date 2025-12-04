"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Dress code colors for each day
const dressCodeColors = {
  1: { bg: "#8B7355", name: "חום אדמה", light: "rgba(139, 115, 85, 0.08)" },
  2: { bg: "#4A90A4", name: "ים כחול", light: "rgba(74, 144, 164, 0.08)" },
  3: { bg: "#E8E8E8", name: "לבן טהור", light: "rgba(232, 232, 232, 0.15)" },
  4: { bg: "#F4A9BA", name: "חיוך ורוד", light: "rgba(244, 169, 186, 0.1)" },
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
      { time: "15:00-17:00", activity: "הגעה, קבלת חדרים והיכרות" },
      { time: "18:00-20:00", activity: "ארוחת ערב מפוארת" },
      { time: "20:00-21:30", activity: "מעגל פתיחה" },
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
      { time: "09:30-10:30", activity: "יוגה / סאונד הילינג" },
      { time: "11:00-16:00", activity: "זמן חופשי: ספא / צילומים" },
      { time: "16:00-18:30", activity: "סדנה - הילדה הפנימית" },
      { time: "18:30-20:30", activity: "ארוחת ערב" },
      { time: "20:00", activity: "שופינג ושחרור" },
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
      { time: "14:00-16:30", activity: "מנוחה בריכה וזמן בנות" },
      { time: "16:30-18:30", activity: "סדנה בשקיעה" },
      { time: "19:00-21:00", activity: "קבלת שבת חגיגית" },
      { time: "21:00-23:00", activity: "מסיבת פיג׳מות" },
    ],
  },
  {
    day: 4,
    title: "עפה על עצמי",
    theme: "קבלה, אהבה והודיה",
    dressCode: "חיוך ורוד",
    activities: [
      { time: "08:30-09:30", activity: "ארוחת בוקר" },
      { time: "10:00-13:00", activity: "סדנת סיכום + מתנות" },
      { time: "13:00", activity: "צ׳ק אאוט" },
      { time: "13:00-16:00", activity: "שופינג ומנוחה" },
      { time: "17:00", activity: "יציאה לשדה התעופה" },
      { time: "20:30", activity: "המראה חזרה" },
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

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="schedule"
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundColor: dressCodeColors[activeDay as keyof typeof dressCodeColors]?.light || 'var(--nude-50)',
          }}
        />
      </AnimatePresence>

      {/* Sticky header */}
      <div className="sticky top-0 z-20 pt-4 md:pt-6 pb-3 pointer-events-none bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4 md:mb-6">
            <span 
              className="text-[10px] md:text-xs font-medium tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              הלו״ז
            </span>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-2"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              4 ימים של קסם
            </h2>
          </div>

          {/* Day indicators with dress code */}
          <div className="flex justify-center gap-1.5 md:gap-3">
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
                  className={`w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full text-xs md:text-base font-semibold transition-all duration-500 ${
                    activeDay === day.day ? "scale-110 shadow-md" : ""
                  }`}
                  style={{ 
                    backgroundColor: activeDay === day.day 
                      ? dressCodeColors[day.day as keyof typeof dressCodeColors]?.bg 
                      : 'var(--nude-100)',
                    color: activeDay === day.day 
                      ? (day.day === 3 ? 'var(--text)' : 'white')
                      : 'var(--text-light)',
                    border: day.day === 3 && activeDay === day.day ? '2px solid var(--nude-400)' : 'none'
                  }}
                >
                  {day.day}
                </span>
                <span 
                  className="text-[8px] md:text-[10px] mt-1 transition-opacity whitespace-nowrap"
                  style={{ 
                    color: activeDay === day.day ? dressCodeColors[day.day as keyof typeof dressCodeColors]?.bg : 'var(--text-light)',
                    opacity: activeDay === day.day ? 1 : 0.5
                  }}
                >
                  {day.dressCode}
                </span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-3 md:mt-4 h-1 bg-nude-200 rounded-full overflow-hidden max-w-xs md:max-w-sm mx-auto">
            <motion.div
              className="h-full rounded-full"
              style={{ 
                width: progressWidth,
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
        className="sticky bottom-4 z-20 text-center px-4"
      >
        <p 
          className="text-[10px] md:text-xs max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-full py-2 px-4"
          style={{ color: 'var(--text-light)' }}
        >
          * כל הסדנאות אופציונליות. התכנית נתונה לשינויים.
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

function TimelineDay({ day, setActiveDay, dressCodeColor }: TimelineDayProps) {
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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.96]);

  return (
    <motion.div
      id={`day-${day.day}`}
      ref={dayRef}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto px-4 w-full">
        <div 
          className="relative p-5 md:p-8 rounded-2xl border-2 shadow-lg backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: dressCodeColor.bg,
          }}
        >
          {/* Day number badge */}
          <div 
            className="absolute -top-4 right-4 md:right-8 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium"
            style={{ 
              backgroundColor: dressCodeColor.bg,
              color: day.day === 3 ? 'var(--text)' : 'white',
              border: day.day === 3 ? '2px solid var(--nude-400)' : 'none'
            }}
          >
            יום {day.day} · {day.dressCode}
          </div>

          {/* Header */}
          <div className="mb-4 md:mb-6 mt-2">
            <span 
              className="text-xs md:text-sm font-medium"
              style={{ color: dressCodeColor.bg }}
            >
              {day.theme}
            </span>
            <h3 
              className="text-xl md:text-3xl font-semibold mt-1"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              {day.title}
            </h3>
          </div>

          {/* Activities */}
          <div className="space-y-2 md:space-y-3">
            {day.activities.map((activity, actIndex) => (
              <motion.div
                key={actIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: actIndex * 0.03 }}
                viewport={{ once: true }}
                className="flex gap-2 md:gap-3 items-start group"
              >
                <span 
                  className="flex-shrink-0 w-16 md:w-20 text-[10px] md:text-xs font-medium"
                  style={{ color: dressCodeColor.bg }}
                >
                  {activity.time}
                </span>
                <div 
                  className="flex-shrink-0 w-1.5 h-1.5 mt-1 md:mt-1.5 rounded-full"
                  style={{ backgroundColor: dressCodeColor.bg }}
                />
                <span 
                  className="text-xs md:text-sm"
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
