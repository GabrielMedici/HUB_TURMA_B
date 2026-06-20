"use client";

import { useState, useEffect } from "react";
import { Hourglass } from "lucide-react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number } | null>(null);

  useEffect(() => {
    // Target: Monday 19:00. Assuming current context is Friday, June 19, 2026.
    // The next Monday is June 22, 2026.
    const targetDate = new Date("2026-06-22T19:00:00-03:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ hours, minutes });
      } else {
        setTimeLeft({ hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // update every minute

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // Hydration safe

  return (
    {/* A classe 'hidden' vai sumir com o botão de todas as telas */}
    <div className="hidden flex items-center gap-3 bg-[#1A1A1A]/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/5 shadow-xl">
      <div className="p-1.5 bg-accent-gold/10 rounded-full animate-pulse">
        <Hourglass className="w-4 h-4 text-accent-gold" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-text-secondary uppercase tracking-widest leading-none mb-1">
          Modo Foco Ativado
        </span>
        {/* O sinal de interrogação '?' garante que o TypeScript não quebre a build */}
        <span className="text-sm font-light text-text-primary leading-none">
          Faltam <strong className="text-accent-gold font-medium">{timeLeft?.hours}h {timeLeft?.minutes}m</strong> para a prova
        </span>
      </div>
    </div>
  );
}
