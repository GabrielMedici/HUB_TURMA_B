"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LessonAccordionProps {
  lessons: Lesson[];
}

export function LessonAccordion({ lessons }: LessonAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full border-t border-white/10 mt-8">
      {lessons.map((lesson) => {
        const isOpen = openId === lesson.id;

        return (
          <div key={lesson.id} className="border-b border-white/10">
            <button
              onClick={() => toggle(lesson.id)}
              className="w-full min-h-[64px] px-2 py-4 md:py-6 flex items-center justify-between text-left focus:outline-none group active:bg-white/5 rounded-xl transition-all"
            >
              <h3 className={`font-sans text-lg font-medium transition-colors ${isOpen ? 'text-accent-gold' : 'text-text-primary group-hover:text-white'}`}>
                {lesson.title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`transition-colors ${isOpen ? 'text-accent-gold' : 'text-text-secondary group-hover:text-white'}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pt-2 prose prose-invert prose-p:leading-relaxed max-w-none prose-headings:font-playfair prose-a:text-accent-gold">
                    {lesson.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
