"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// SVG Icons
const icons = {
  notIncluded: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
  payment: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  notes: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  flight: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  luggage: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
};

const sections = [
  {
    title: "לא כלול",
    icon: icons.notIncluded,
    items: [
      { text: "ביטוחים*", note: true },
      { text: "הוצאות אישיות" },
      { text: "טיפולי ספא (ניתן לשריין בהנחה 20%)" },
    ],
    footer: "* ביטוח נסיעות לחו״ל הינו חובה ומומלץ לבטח דרכנו בפספורטכארד",
  },
  {
    title: "תשלום",
    icon: icons.payment,
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
    icon: icons.notes,
    items: [
      { text: "התכנית והלו״ז נתונים לשינויים ועדכונים" },
      { text: "צוות מנחים ילווה אתכם במהלך החופשה מנתב״ג ועד הנחיתה חזרה" },
      { text: "שום חלק בחבילה לא ניתן לשינוי" },
    ],
  },
  {
    title: "פרטים חשובים לפני הנסיעה",
    icon: icons.flight,
    items: [
      { text: "מפגש עם הצוות: יתקיים בזום כמה ימים לפני הנסיעה" },
      { text: "מייל פרטי החבילה: 5 ימים לפני היציאה תקבלו מייל עם כרטיסי הטיסה" },
      { text: "קבוצת וואטסאפ: תיפתח בערב שלפני היציאה ותשאר זמינה עבורכן לאחר הריטריט" },
      { text: "דרכון: ודאו שהדרכון בתוקף 7 חודשים לפחות מתאריך המשוער לחזרה" },
    ],
  },
  {
    title: "צ׳ק-אין והעלאת ציוד",
    icon: icons.luggage,
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
                  <span style={{ color: 'var(--accent)' }}>{section.icon}</span>
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
          לשאלות נוספות אנחנו כאן עבורכן
        </motion.p>
      </div>
    </section>
  );
}
