"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Coffee, Maximize2, Minimize2, Brain } from "lucide-react";
import { useTimerStore, POMODORO_TIME, SHORT_BREAK_TIME } from "@/store/useTimerStore";

export function PomodoroTimer() {
  const { timeLeft, isRunning, mode, start, pause, reset, tick, toggleMode } = useTimerStore();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, tick]);

  const maxTime = mode === "pomodoro" ? POMODORO_TIME : SHORT_BREAK_TIME;
  const progress = timeLeft / maxTime;
  const strokeDasharray = 283; // 2 * pi * r (where r = 45)
  const strokeDashoffset = strokeDasharray - progress * strokeDasharray;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const containerClasses = isExpanded
    ? "fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6"
    : "relative bg-background-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full";

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={containerClasses}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-10 right-10"
          >
            <button
              onClick={toggleExpand}
              className="text-text-secondary hover:text-white transition-colors p-2"
            >
              <Minimize2 className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {!isExpanded && (
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-playfair text-xl text-text-primary flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent-gold" />
              Foco Cirúrgico
            </h3>
            <button
              onClick={toggleExpand}
              className="text-text-secondary hover:text-accent-gold transition-colors"
              title="Modo Foco Profundo"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="relative flex items-center justify-center">
          <svg className={`transform -rotate-90 transition-all duration-700 ${isExpanded ? 'w-[400px] h-[400px]' : 'w-48 h-48 md:w-56 md:h-56'}`} viewBox="0 0 100 100">
            {/* Background ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke={isExpanded ? "#111111" : "#1A1A1A"}
              strokeWidth="2"
              className="transition-colors duration-700"
            />
            {/* Progress ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke={mode === "pomodoro" ? "#D4AF37" : "#61001D"}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5, ease: "linear" }}
              style={{ strokeDasharray }}
            />
          </svg>
          
          <div className="absolute flex flex-col items-center">
            <span className={`font-sans font-light tracking-tight transition-all duration-700 ${isExpanded ? 'text-8xl md:text-9xl' : 'text-5xl'} text-text-primary`}>
              {formatTime(timeLeft)}
            </span>
            <span className="text-text-secondary text-sm mt-2 font-medium tracking-widest uppercase">
              {mode === "pomodoro" ? "Sessão" : "Pausa"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8 z-10">
          <button
            onClick={toggleMode}
            className={`p-3 rounded-full transition-colors ${
              mode === "shortBreak" ? "bg-accent-burgundy/20 text-accent-burgundy" : "text-text-secondary hover:text-white"
            }`}
            title="Intervalo (Café)"
          >
            <Coffee className="w-5 h-5" />
          </button>
          
          <button
            onClick={isRunning ? pause : start}
            className="w-16 h-16 rounded-full bg-accent-gold text-background-base flex items-center justify-center hover:bg-[#E5C354] transition-all hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            {isRunning ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>

          <button
            onClick={reset}
            className="p-3 rounded-full text-text-secondary hover:text-white transition-colors"
            title="Resetar"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-16 text-center max-w-lg px-6"
          >
            <p className="font-playfair text-2xl text-text-secondary italic">
              "A disciplina é a ponte entre a meta e a realização."
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
