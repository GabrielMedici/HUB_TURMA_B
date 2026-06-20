"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface GlossaryTooltipProps {
  term: string;
  definition: string;
}

export function GlossaryTooltip({ term, definition }: GlossaryTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(!isVisible)}
    >
      <span className="border-b border-dotted border-accent-gold/60 text-text-primary group-hover:text-accent-gold transition-colors duration-300">
        {term}
      </span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-5 rounded-xl bg-background-surface border border-accent-gold/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          >
            <span className="block font-playfair font-medium text-accent-gold mb-2 text-lg flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              {term}
            </span>
            <span className="block text-sm font-sans font-light text-text-secondary leading-relaxed text-left">
              {definition}
            </span>
            {/* Seta indicativa */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background-surface border-b border-r border-accent-gold/20" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
