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
      {/* Background Glow que explode e engole a tela na animação */}
      <motion.div
        animate={
          isUnlocking 
            ? { scale: 50, opacity: 1, backgroundColor: "#1A1A1A" } 
            : { scale: 1, opacity: 0.15, backgroundColor: "#D4AF37" }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-40 h-40 rounded-full blur-[80px] pointer-events-none z-0"
      />

      <AnimatePresence>
        {!isUnlocking && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              <LockOpen className="w-10 h-10 text-accent-gold" />
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 tracking-tight leading-tight">
              Hub de Alta Performance <br />
              <span className="text-accent-gold italic font-light">Turma B</span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl font-light mb-14 max-w-xl leading-relaxed">
              O acesso irrestrito ao acervo definitivo. Resumos cirúrgicos, alertas de pegadinhas e simulados precisos para a sua reta final.
            </p>

            <button
              onClick={handleUnlock}
              className="group relative px-10 md:px-14 py-5 md:py-6 rounded-full overflow-hidden active:scale-95 transition-all duration-300"
            >
              {/* Efeito Glassmorphism do Botão */}
              <div className="absolute inset-0 bg-accent-gold/10 backdrop-blur-md border border-accent-gold/30 group-hover:bg-accent-gold/20 transition-colors" />
              
              {/* Brilho neon radial no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.5)_0%,transparent_70%)] transition-opacity duration-500" />
              
              <span className="relative z-10 font-sans font-medium text-lg text-accent-gold tracking-widest uppercase flex items-center gap-4">
                Desbloquear Resumos
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
