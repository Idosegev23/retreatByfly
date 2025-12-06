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
      { time: "07:45", activity: "מפגש בנתב״ג", isWorkshop: false },
      { time: "10:40", activity: "המראה", isWorkshop: false },
      { time: "15:00-17:00", activity: "הגעה, קבלת חדרים והיכרות", isWorkshop: false },
      { time: "18:00-20:00", activity: "ארוחת ערב מפוארת", isWorkshop: false },
      { time: "20:00-21:30", activity: "מעגל פתיחה", isWorkshop: true },
      { time: "21:30", activity: "הרמת כוסית וריקודים בחוף", isWorkshop: false },
    ],
  },
  {
    day: 2,
    title: "חיבור לעצמי ולגוף",
    theme: "הקשבה, השראה ונשימה",
    dressCode: "ים כחול",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר", isWorkshop: false },
      { time: "09:30-10:30", activity: "יוגה / סאונד הילינג", isWorkshop: true },
      { time: "11:00-16:00", activity: "זמן חופשי: ספא / צילומי תדמית בחוף", isWorkshop: false },
      { time: "16:00-18:30", activity: "סדנת השראה חוויתית - הילדה הפנימית שבי", isWorkshop: true },
      { time: "18:30-20:30", activity: "ארוחת ערב", isWorkshop: false },
      { time: "20:00", activity: "שופינג ושחרור", isWorkshop: false },
    ],
  },
  {
    day: 3,
    title: "שנה חדשה - חלומות חדשים",
    theme: "מטרות, חלומות וחזון",
    dressCode: "לבן טהור",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר", isWorkshop: false },
      { time: "11:00-14:00", activity: "שייט ביאכטה", isWorkshop: false },
      { time: "14:00-16:30", activity: "מנוחה בריכה וזמן בנות", isWorkshop: false },
      { time: "16:30-18:30", activity: "סדנה בשקיעה - מגדלור מאיר את הדרך", isWorkshop: true },
      { time: "19:00-21:00", activity: "קבלת שבת חגיגית", isWorkshop: false },
      { time: "21:00-23:00", activity: "מסיבת פיג׳מות", isWorkshop: false },
    ],
  },
  {
    day: 4,
    title: "עפה על עצמי",
    theme: "קבלה, אהבה והודיה",
    dressCode: "חיוך ורוד",
    activities: [
      { time: "08:30-09:30", activity: "ארוחת בוקר", isWorkshop: false },
      { time: "10:00-13:00", activity: "סדנת סיכום - עפה על עצמי + מתנות", isWorkshop: true },
      { time: "13:00", activity: "צ׳ק אאוט", isWorkshop: false },
      { time: "13:00-16:00", activity: "שופינג ומנוחה", isWorkshop: false },
      { time: "17:00", activity: "יציאה לשדה התעופה", isWorkshop: false },
      { time: "20:30", activity: "המראה חזרה", isWorkshop: false },
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
      style={{ 
        height: `${timelineData.length * 75}vh`,
        backgroundColor: 'var(--nude-50)',
      }}
    >
      {/* Dynamic background color - contained in section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundColor: dressCodeColors[activeDay as keyof typeof dressCodeColors]?.light || 'var(--nude-50)',
          }}
        />
      </AnimatePresence>

      {/* Sticky header with day indicators and progress bar */}
      <div 
        className="sticky top-0 z-40 pt-4 pb-3"
        style={{ backgroundColor: 'rgba(253, 250, 247, 0.97)' }}
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
              <span style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>4</span> לילות של קסם
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

      {/* Timeline content - regular scrolling cards */}
      <div className="relative z-10">
        {timelineData.map((day, index) => (
          <TimelineDay
            key={day.day}
            day={day}
            index={index}
            setActiveDay={setActiveDay}
            dressCodeColor={dressCodeColors[day.day as keyof typeof dressCodeColors]}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

interface TimelineDayProps {
  day: typeof timelineData[0];
  index: number;
  setActiveDay: (day: number) => void;
  dressCodeColor: { bg: string; name: string; light: string; text: string };
  isLast: boolean;
}

function TimelineDay({ day, setActiveDay, dressCodeColor, isLast }: TimelineDayProps) {
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
      className={`min-h-screen flex items-center pt-40 scroll-mt-36 md:pt-44 md:scroll-mt-40 pb-12 md:pb-16`}
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
            יום {day.day}
          </div>

          {/* Dress code highlight */}
          <div 
            className="absolute -top-3 left-4 md:left-6 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-md flex items-center gap-1.5"
            style={{ 
              backgroundColor: 'white',
              color: dressCodeColor.bg,
              border: `2px solid ${dressCodeColor.bg}`,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dressCodeColor.bg }} />
            קוד לבוש: {day.dressCode}
          </div>

          {/* Header */}
          <div className="mb-4 mt-4">
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
                  className={`text-[11px] md:text-sm ${activity.isWorkshop ? 'font-bold' : ''}`}
                  style={{ color: activity.isWorkshop ? dressCodeColor.bg : 'var(--text)' }}
                >
                  {activity.activity}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Note on last day's card */}
          {isLast && (
            <p 
              className="text-[9px] md:text-xs mt-4 pt-3 border-t text-center"
              style={{ color: 'var(--text-light)', borderColor: 'var(--nude-200)' }}
            >
              * כל הסדנאות אופציונליות
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
