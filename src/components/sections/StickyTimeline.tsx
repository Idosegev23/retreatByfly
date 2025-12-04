"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Dress code colors for each day - more vibrant
const dressCodeColors = {
  1: { bg: "#8B5A2B", name: "חום אדמה", light: "rgba(139, 90, 43, 0.12)", text: "#5D3A1A" },
  2: { bg: "#2E86AB", name: "ים כחול", light: "rgba(46, 134, 171, 0.12)", text: "#1A5A7A" },
  3: { bg: "#C9B8A8", name: "לבן טהור", light: "rgba(201, 184, 168, 0.2)", text: "#6B5B4F" },
  4: { bg: "#E87DA0", name: "חיוך ורוד", light: "rgba(232, 125, 160, 0.15)", text: "#B84D72" },
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

      {/* Sticky header - fixed at top with solid background */}
      <div 
        className="sticky top-0 z-30 pt-4 pb-4"
        style={{ backgroundColor: 'rgba(253, 250, 247, 0.98)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-3">
            <span 
              className="text-[10px] md:text-xs font-medium tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              הלו״ז
            </span>
            <h2 
              className="text-xl md:text-3xl lg:text-4xl font-semibold mt-1"
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
                className="relative flex flex-col items-center transition-all duration-300"
              >
                <span 
                  className={`w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full text-xs md:text-base font-bold transition-all duration-500 ${
                    activeDay === day.day ? "scale-110 shadow-lg" : "opacity-60"
                  }`}
                  style={{ 
                    backgroundColor: dressCodeColors[day.day as keyof typeof dressCodeColors]?.bg,
                    color: 'white',
                    textShadow: day.day === 3 ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                  }}
                >
                  {day.day}
                </span>
                <span 
                  className="text-[8px] md:text-[10px] mt-1 font-medium transition-opacity whitespace-nowrap"
                  style={{ 
                    color: dressCodeColors[day.day as keyof typeof dressCodeColors]?.bg,
                    opacity: activeDay === day.day ? 1 : 0.5
                  }}
                >
                  {day.dressCode}
                </span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1 bg-nude-200 rounded-full overflow-hidden max-w-[200px] md:max-w-sm mx-auto">
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

      {/* Timeline content - with scroll-margin to clear header */}
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
          className="text-[9px] md:text-xs max-w-sm mx-auto bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-sm"
          style={{ color: 'var(--text-light)' }}
        >
          * כל הסדנאות אופציונליות
        </p>
      </motion.div>
    </section>
  );
}

interface TimelineDayProps {
  day: typeof timelineData[0];
  index: number;
  setActiveDay: (day: number) => void;
  dressCodeColor: { bg: string; name: string; light: string; text: string };
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

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.94, 1, 1, 0.94]);

  return (
    <motion.div
      id={`day-${day.day}`}
      ref={dayRef}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center pt-44 pb-16 md:pt-48 md:pb-20 scroll-mt-44 md:scroll-mt-48"
    >
      <div className="max-w-xl mx-auto px-4 w-full">
        <div 
          className="relative p-4 md:p-6 rounded-2xl shadow-xl"
          style={{ 
            backgroundColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: dressCodeColor.bg,
          }}
        >
          {/* Day number badge */}
          <div 
            className="absolute -top-3 right-4 md:right-6 px-3 py-1 rounded-full text-xs font-bold shadow-md"
            style={{ 
              backgroundColor: dressCodeColor.bg,
              color: 'white',
              textShadow: day.day === 3 ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
            }}
          >
            יום {day.day} · {day.dressCode}
          </div>

          {/* Header */}
          <div className="mb-4 mt-2">
            <span 
              className="text-[10px] md:text-xs font-semibold"
              style={{ color: dressCodeColor.bg }}
            >
              {day.theme}
            </span>
            <h3 
              className="text-lg md:text-2xl font-bold mt-0.5"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
            >
              {day.title}
            </h3>
          </div>

          {/* Activities */}
          <div className="space-y-2">
            {day.activities.map((activity, actIndex) => (
              <motion.div
                key={actIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: actIndex * 0.03 }}
                viewport={{ once: true }}
                className="flex gap-2 items-start"
              >
                <span 
                  className="flex-shrink-0 w-[60px] md:w-[75px] text-[10px] md:text-xs font-bold"
                  style={{ color: dressCodeColor.text }}
                >
                  {activity.time}
                </span>
                <div 
                  className="flex-shrink-0 w-1.5 h-1.5 mt-1 rounded-full"
                  style={{ backgroundColor: dressCodeColor.bg }}
                />
                <span 
                  className="text-[11px] md:text-sm"
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
