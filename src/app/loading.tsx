import { Target } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-base/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Efeito de auréola pulsante (Glow) */}
        <div className="absolute inset-0 bg-accent-gold/20 blur-[80px] rounded-full animate-pulse w-48 h-48 mx-auto pointer-events-none" />
        
        {/* Card em Glassmorphism */}
        <div className="relative z-10 p-8 rounded-3xl bg-[#1A1A1A]/60 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center w-16 h-16">
            <Target className="w-8 h-8 text-accent-gold relative z-10" />
            {/* Anéis giratórios */}
            <div className="absolute inset-0 border-2 border-accent-gold/20 rounded-full" />
            <div className="absolute inset-0 border-t-2 border-accent-gold rounded-full animate-[spin_1.5s_linear_infinite]" />
            <div className="absolute inset-[-8px] border-r-2 border-accent-burgundy/40 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
          </div>
          
          <span className="font-playfair text-text-primary tracking-[0.3em] text-xs uppercase animate-pulse">
            Carregando Acervo...
          </span>
        </div>
      </div>
    </div>
  );
}
