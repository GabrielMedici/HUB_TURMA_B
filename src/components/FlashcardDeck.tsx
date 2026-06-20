"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { glossaryDB } from "@/data/conteudo";

export function FlashcardDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Shuffle cards on initial load for unpredictability
  const [cards] = useState(() => {
    const shuffled = [...glossaryDB].sort(() => 0.5 - Math.random());
    return shuffled;
  });

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200); // Aguarda o flip fechar antes de mudar o card
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  };

  const currentCard = cards[currentIndex];

  if (!currentCard) return null;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between w-full mb-6 px-4">
        <h2 className="font-playfair text-2xl text-text-primary tracking-tight">Treino de Memória</h2>
        <span className="text-text-secondary font-sans font-medium">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <div className="relative w-full aspect-[4/3] perspective-1000">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex + (isFlipped ? "-flipped" : "-front")}
            initial={{ rotateX: isFlipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: isFlipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsFlipped(!isFlipped)}
            className="absolute inset-0 w-full h-full cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* O Cartão */}
            <div className={`w-full h-full rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border transition-colors ${
              isFlipped 
                ? "bg-accent-gold/10 border-accent-gold/30" 
                : "bg-background-surface border-white/5 hover:border-white/20"
            }`}>
              
              {!isFlipped ? (
                // Frente da Carta (Termo)
                <>
                  <div className="text-accent-gold/50 font-medium tracking-widest uppercase text-xs mb-8">
                    Clique para revelar
                  </div>
                  <h3 className="font-playfair text-4xl md:text-5xl text-text-primary">
                    {currentCard.term}
                  </h3>
                </>
              ) : (
                // Verso da Carta (Definição)
                <>
                  <div className="text-accent-gold/50 font-medium tracking-widest uppercase text-xs mb-6">
                    {currentCard.term}
                  </div>
                  <p className="font-sans text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
                    {currentCard.definition}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={prevCard}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-8 py-3 rounded-full font-medium tracking-widest uppercase text-sm border transition-all text-accent-gold border-accent-gold hover:bg-accent-gold/10"
        >
          <RotateCcw className="w-4 h-4 inline-block mr-2 -mt-1" />
          Virar
        </button>

        <button
          onClick={nextCard}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
