"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { LockOpen } from "lucide-react";

export default function GatewayPage() {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const router = useRouter();

  const handleUnlock = () => {
    setIsUnlocking(true);
    // Espera a animação de expansão rodar antes de navegar para o Dashboard
    setTimeout(() => {
      router.push("/dashboard");
    }, 1100); 
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Smooth Background Gradient - No heavy blur scaling */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] z-0" />
      
      {/* Subtle glowing ambient spheres (static, performance friendly) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Screen flash transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isUnlocking ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#0A0A0A] z-50 pointer-events-none"
      />

      <AnimatePresence>
        {!isUnlocking && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center max-w-3xl"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <LockOpen className="w-8 h-8 text-accent-gold drop-shadow-lg" />
            </motion.div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-6 tracking-tight leading-tight">
              Hub de Alta Performance <br />
              <span className="text-accent-gold/90 text-3xl md:text-5xl tracking-wide uppercase font-sans mt-4 block">
                Direito Noturno B - Unicesumar
              </span>
            </h1>
            
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-10 mb-14 max-w-2xl backdrop-blur-sm relative shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-4">
                <div className="h-1 w-12 bg-accent-gold/50 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              </div>
              <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed text-center italic">
                "Turma B, tudo bem? Este é um projeto pessoal, testem a plataforma e espero que ajude imensamente. Bons estudos!"
              </p>
              <p className="text-accent-gold/80 font-medium tracking-[0.2em] uppercase text-xs mt-8 text-center">
                — Feito com carinho, Gabriel Médici
              </p>
            </div>
            <button
              onClick={handleUnlock}
              className="group relative px-12 md:px-16 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] active:scale-95"
            >
              {/* Efeito Elegante do Botão sem travamentos */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 via-accent-gold/20 to-accent-gold/10 backdrop-blur-md border border-accent-gold/40 rounded-full" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
              
              <span className="relative z-10 font-sans font-semibold text-sm md:text-base text-accent-gold tracking-[0.15em] uppercase flex items-center gap-4">
                Acessar conteúdo
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
