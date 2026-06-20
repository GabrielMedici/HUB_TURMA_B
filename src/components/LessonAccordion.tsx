"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";

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
  const [readLessons, setReadLessons] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hubTurmaB_readLessons');
    if (saved) {
      try {
        setReadLessons(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const toggleRead = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setReadLessons(prev => {
      const isRead = prev.includes(id);
      const next = isRead ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('hubTurmaB_readLessons', JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="w-full border-t border-white/10 mt-8">
      {lessons.map((lesson) => {
        const isOpen = openId === lesson.id;
        const isRead = readLessons.includes(lesson.id);

        return (
          <div key={lesson.id} className="border-b border-white/10">
            <button
              onClick={() => toggle(lesson.id)}
              className={`w-full min-h-[64px] px-2 py-4 md:py-6 flex items-center justify-between text-left focus:outline-none group active:bg-white/5 rounded-xl transition-all ${isRead ? 'opacity-70' : 'opacity-100'}`}
            >
              <div className="flex items-center gap-4">
                <button 
                  onClick={(e) => toggleRead(lesson.id, e)}
                  className="no-print p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  {isRead ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-text-secondary" />
                  )}
                </button>
                <h3 className={`font-sans text-lg font-medium transition-colors ${isOpen ? 'text-accent-gold' : 'text-text-primary group-hover:text-white'} ${isRead && !isOpen ? 'line-through text-text-secondary' : ''}`}>
                  {lesson.title}
                </h3>
              </div>
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
                    
                    <div className="no-print mt-8 flex justify-end border-t border-white/10 pt-6">
                      <button
                        onClick={(e) => {
                          if (!isRead) toggleRead(lesson.id, e);
                          toggle(lesson.id);
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${isRead ? 'bg-white/5 text-text-secondary' : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'}`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        {isRead ? "Revisado" : "Marcar como Lida"}
                      </button>
                    </div>
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
