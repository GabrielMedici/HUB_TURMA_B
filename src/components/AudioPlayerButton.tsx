"use client";

import { useState, useEffect } from "react";
import { Play, Square, Headphones } from "lucide-react";

interface AudioPlayerButtonProps {
  textToRead: string;
}

export function AudioPlayerButton({ textToRead }: AudioPlayerButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!window.speechSynthesis) {
      setIsSupported(false);
    }
    
    // Stop speaking when component unmounts
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir abrir o Accordion se estiver num botão

    if (!window.speechSynthesis) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Limpa qualquer leitura anterior
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = "pt-BR"; // Força português brasileiro
      utterance.rate = 1.0; // Velocidade normal

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  if (!isSupported) return null;

  return (
    <button
      onClick={togglePlay}
      className={`no-print flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-medium ${
        isPlaying 
          ? 'bg-accent-gold/20 text-accent-gold border-accent-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] animate-pulse' 
          : 'bg-white/5 text-text-secondary border-white/10 hover:bg-white/10 hover:text-white'
      }`}
      title={isPlaying ? "Parar leitura" : "Ouvir Resumo"}
    >
      {isPlaying ? (
        <>
          <Square className="w-3.5 h-3.5 fill-current" />
          Parar Áudio
        </>
      ) : (
        <>
          <Headphones className="w-3.5 h-3.5" />
          Ouvir Resumo
        </>
      )}
    </button>
  );
}
