"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "#journey", label: "המסע" },
  { href: "#timeline", label: "לו״ז" },
  { href: "#contact", label: "הרשמה" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Minimal Menu Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: isHidden ? -100 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
            isScrolled ? "backdrop-blur-xl" : ""
          }`}
          style={{
            backgroundColor: isScrolled ? 'rgba(253, 242, 244, 0.9)' : 'rgba(253, 252, 251, 0.8)',
            boxShadow: isScrolled ? '0 4px 20px rgba(139, 115, 85, 0.15)' : '0 2px 10px rgba(139, 115, 85, 0.1)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[2px] rounded-full origin-center"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[2px] rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[2px] rounded-full origin-center"
                style={{ backgroundColor: 'var(--accent)' }}
              />
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(253, 252, 251, 0.97)' }}
            />
            
            {/* Menu Content */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle decorative element */}
              <div 
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: 'var(--pink-100)' }}
              />

              {/* Links */}
              <nav className="relative z-10 flex flex-col items-center gap-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="relative text-4xl md:text-5xl font-light tracking-wide"
                    style={{ 
                      color: 'var(--text)',
                      fontFamily: 'var(--font-heebo), system-ui, sans-serif',
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      color: 'var(--accent)',
                      x: -10,
                    }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-2 right-0 h-[1px] bg-current"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Bottom info */}
              <motion.div
                className="absolute bottom-12 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p 
                  className="text-sm tracking-widest uppercase"
                  style={{ color: 'var(--text-light)' }}
                >
                  אבו דאבי · ינואר 2026
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
