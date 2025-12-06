"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "לא כלול",
    icon: "🚫",
    items: [
      { text: "ביטוחים*", note: true },
      { text: "הוצאות אישיות" },
      { text: "טיפולי ספא" },
    ],
    footer: "* ביטוח נסיעות לחו״ל הינו חובה ומומלץ לבטח דרכנו בפספורטכארד",
  },
  {
    title: "תשלום",
    icon: "💳",
    items: [
      { text: "ניתן בתשלומים ללא ריבית או בהעברה בנקאית" },
      { text: "המחיר כולל את כל המיסים והתוספות המתוארות בלו״ז" },
      { text: "להרכב אחר של יחיד או 3 בחדר יש ליצור קשר" },
      { text: "ניתן לשבץ יחידה בחדר עם שותפה מטעמנו, קבוצה איכותית במרחב בטוח" },
      { text: "תרגולים וסדנאות יתקיימו תחת כיפת השמיים או בחלל סגור, תלוי מזג האוויר" },
    ],
  },
  {
    title: "הערות נוספות",
    icon: "📝",
    items: [
      { text: "התכנית והלו״ז נתונים לשינויים ועדכונים" },
      { text: "צוות מנחים ילווה אתכם במהלך החופשה מנתב״ג ועד הנחיתה חזרה" },
      { text: "שום חלק בחבילה לא ניתן לשינוי" },
    ],
  },
  {
    title: "פרטים חשובים לפני הנסיעה",
    icon: "✈️",
    items: [
      { text: "מפגש עם הצוות: יתקיים בזום כמה ימים לפני הנסיעה" },
      { text: "מייל פרטי החבילה: 5 ימים לפני היציאה תקבלו מייל עם כרטיסי הטיסה" },
      { text: "קבוצת וואטסאפ: תיפתח בערב שלפני היציאה ותשאר זמינה עבורכן לאחר הריטריט" },
      { text: "דרכון: ודאו שהדרכון בתוקף 7 חודשים לפחות מתאריך המשוער לחזרה" },
    ],
  },
  {
    title: "צ׳ק-אין והעלאת ציוד",
    icon: "🧳",
    items: [
      { text: "הצ׳ק-אין יבוצע יחד בשדה התעופה (דרכון בלבד)" },
      { text: "בחירת מושב / תוספת משקל: ניתן לבצע רק בשדה התעופה, בתוספת תשלום" },
      { text: "ציוד בתיק יד: אין להעלות נוזלים או משחות מעל 100 מ״ל, או חפצים חדים" },
      { text: "תזונה: עדכנו מראש על תזונה צמחונית / טבעונית / אלרגיות (לא ניתן לבצע שינויים במהלך החופשה)" },
    ],
  },
];

export function FinePrintSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16"
      style={{ backgroundColor: 'var(--nude-100)' }}
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <span 
            className="text-[10px] md:text-xs font-medium tracking-wider uppercase"
            style={{ color: 'var(--text-light)' }}
          >
            חשוב לדעת
          </span>
          <h2 
            className="text-xl md:text-2xl font-semibold mt-1"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: 'var(--text)' }}
          >
            האותיות הקטנות
          </h2>
        </motion.div>

        {/* Accordion sections */}
        <div className="space-y-2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="rounded-xl overflow-hidden"
              style={{ 
                backgroundColor: 'white',
                border: '1px solid var(--nude-200)',
              }}
            >
              {/* Header button */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-right transition-colors hover:bg-nude-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{section.icon}</span>
                  <span 
                    className="text-sm md:text-base font-medium"
                    style={{ color: 'var(--text)' }}
                  >
                    {section.title}
                  </span>
                </div>
                <motion.svg
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--text-light)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-4 pb-4 pt-2 border-t"
                      style={{ borderColor: 'var(--nude-200)' }}
                    >
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start gap-2 text-xs md:text-sm"
                            style={{ color: 'var(--text-light)' }}
                          >
                            <span 
                              className="flex-shrink-0 mt-1 w-1 h-1 rounded-full"
                              style={{ backgroundColor: 'var(--accent)' }}
                            />
                            {item.text}
                          </li>
                        ))}
                      </ul>
                      {section.footer && (
                        <p 
                          className="mt-3 text-[10px] md:text-xs pt-2 border-t"
                          style={{ color: 'var(--accent)', borderColor: 'var(--nude-200)' }}
                        >
                          {section.footer}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] md:text-xs mt-6"
          style={{ color: 'var(--text-light)', opacity: 0.7 }}
        >
          לשאלות נוספות אנחנו כאן עבורכן 💗
        </motion.p>
      </div>
    </section>
  );
}

