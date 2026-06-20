"use client";

import { useState, useEffect, useRef } from "react";
import { CloudRain, Volume2, VolumeX } from "lucide-react";

export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Criamos o áudio apenas do lado do cliente
    // Link de áudio de chuva contínua (royalty free ou gerado por white noise)
    // Para efeito de demonstração, usaremos um som relaxante muito comum de white noise
    audioRef.current = new Audio("https://cdn.freesound.org/previews/186/186025_1947231-lq.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Volume ambiente suave

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`relative no-print group flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
        isPlaying 
          ? 'bg-accent-gold/20 border-accent-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-accent-gold' 
          : 'bg-background-surface border-white/10 text-text-secondary hover:text-white hover:bg-white/5'
      }`}
      title={isPlaying ? "Pausar som ambiente" : "Som de Foco (Chuva)"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 animate-pulse" />
      ) : (
        <CloudRain className="w-5 h-5 transition-transform group-hover:scale-110" />
      )}
    </button>
  );
}
