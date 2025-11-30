"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    day: 1,
    title: "הגעה, התכנסות ופתיחת הלב",
    theme: "נחיתה רגשית וחיבור לקבוצה",
    color: "from-nude-200 to-nude-300",
    activities: [
      { time: "15:00-17:00", activity: "הגעה, קבלת חדרים, זמן התארגנות" },
      { time: "17:00-18:00", activity: "מעגל פתיחה, היכרות, כוונת לב" },
      { time: "18:30-19:30", activity: "ארוחת ערב משותפת" },
      { time: "20:00-21:30", activity: "סדנה: 'איפה אני נמצאת היום בחיים שלי'" },
    ],
  },
  {
    day: 2,
    title: "חיבור לעצמי ולגוף",
    theme: "הקשבה, שקט ונשימה",
    color: "from-nude-300 to-nude-400/50",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר" },
      { time: "09:30-10:30", activity: "תנועה נשית / יוגה / נשימות" },
      { time: "11:00-13:00", activity: "זמן חופשי: בריכה, מנוחה, ספר" },
      { time: "15:30-17:30", activity: "סדנה: ביטחון עצמי והערכה עצמית" },
      { time: "20:00", activity: "ערב חופשי / פינוק / שיחות עומק" },
    ],
  },
  {
    day: 3,
    title: "מטרות, חלומות והשראה",
    theme: "לאן אני הולכת",
    color: "from-nude-400/50 to-accent/30",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר" },
      { time: "09:30-12:00", activity: "סדנה מרכזית: חזון אישי + הצבת מטרות" },
      { time: "13:30-18:00", activity: "חצי יום שופינג / שוק / מרכז עיר" },
      { time: "19:30", activity: "ארוחת ערב מיוחדת בחוץ" },
      { time: "21:00", activity: "ערב השראה: סיפור אישי, שיתופים, מוזיקה" },
    ],
  },
  {
    day: 4,
    title: "חיבור, נשיות וחגיגה",
    theme: "קבלה, אהבה והודיה",
    color: "from-accent/30 to-accent/50",
    activities: [
      { time: "08:30-09:30", activity: "ארוחת בוקר" },
      { time: "10:00-13:00", activity: "בריכה, עיסוי (אופציונלי), מנוחה" },
      { time: "15:30-17:30", activity: "סדנה: יחסים, גבולות ונשיות בריאה" },
      { time: "19:00", activity: "ארוחת ערב חגיגית" },
      { time: "20:30-22:00", activity: "מעגל סיכום וחגיגה, ריקוד" },
    ],
  },
  {
    day: 5,
    title: "סגירה וחזרה הביתה",
    theme: "חזרה מחוזקת",
    color: "from-accent/50 to-nude-500",
    activities: [
      { time: "08:00-09:00", activity: "ארוחת בוקר" },
      { time: "09:30-11:00", activity: "מעגל סיום: מה אני לוקחת איתי, התחייבות לעצמי" },
      { time: "11:00", activity: "צ'ק אאוט ופרידות" },
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
      className="relative bg-nude-50"
      style={{ height: `${timelineData.length * 100}vh` }}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-20 pt-8 pb-4 bg-gradient-to-b from-nude-50 via-nude-50 to-transparent pointer-events-none">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              הלו״ז
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-text mt-4">
              5 ימים של קסם
            </h2>
          </div>

          {/* Day indicators */}
          <div className="flex justify-center gap-3 md:gap-6">
            {timelineData.map((day) => (
              <button
                key={day.day}
                onClick={() => {
                  const element = document.getElementById(`day-${day.day}`);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`pointer-events-auto relative flex flex-col items-center transition-all duration-300 ${
                  activeDay === day.day
                    ? "text-accent scale-110"
                    : "text-text-light hover:text-accent"
                }`}
              >
                <span className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeDay === day.day
                    ? "bg-accent text-white"
                    : "bg-nude-100 hover:bg-nude-200"
                }`}>
                  {day.day}
                </span>
                <span className="text-xs mt-2 hidden md:block">יום {day.day}</span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-1 bg-nude-200 rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              className="h-full bg-accent rounded-full"
              style={{ width: progress.get() + "%" }}
            />
          </div>
        </div>
      </div>

      {/* Timeline content */}
      <div className="relative">
        {timelineData.map((day, index) => (
          <TimelineDay
            key={day.day}
            day={day}
            index={index}
            setActiveDay={setActiveDay}
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
}

function TimelineDay({ day, index, setActiveDay }: TimelineDayProps) {
  const dayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: dayRef,
    offset: ["start center", "end center"],
  });

  // Update active day when this day is in view
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
        <div className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${day.color} border border-nude-200/50 shadow-medium`}>
          {/* Day number */}
          <div className="absolute -top-6 right-8 md:right-12">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full font-bold text-lg shadow-soft">
              {day.day}
            </span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <span className="text-accent-light text-sm font-medium">
              {day.theme}
            </span>
            <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-text mt-2">
              {day.title}
            </h3>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            {day.activities.map((activity, actIndex) => (
              <motion.div
                key={actIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: actIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start group"
              >
                <span className="flex-shrink-0 w-24 text-sm text-accent font-medium">
                  {activity.time}
                </span>
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                <span className="text-text group-hover:text-accent transition-colors">
                  {activity.activity}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative corner */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/20 to-transparent rounded-bl-3xl" />
        </div>
      </div>
    </motion.div>
  );
}

