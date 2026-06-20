"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login bem-sucedido redirecionando para a rota inicial (/)
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-background-base flex items-center justify-center p-6 relative overflow-hidden">
      {/* Elementos de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-accent-gold/5 blur-[150px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-accent-burgundy/5 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card Glassmorphism */}
        <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-4xl text-text-primary mb-3">
              Acesso Exclusivo
            </h1>
            <p className="text-text-secondary text-sm font-light">
              Insira suas credenciais para adentrar o Hub Turma B.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 relative">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider ml-1">
                E-mail Acadêmico
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 w-5 h-5 text-text-secondary" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-background-surface/50 text-text-primary border border-white/10 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder:text-text-secondary/50"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider ml-1">
                Senha de Acesso
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 w-5 h-5 text-text-secondary" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-background-surface/50 text-text-primary border border-white/10 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder:text-text-secondary/50"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full group flex items-center justify-center gap-2 bg-accent-gold hover:bg-[#E5C354] text-background-base py-3.5 rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(212,175,55,0.15)] mt-4"
            >
              <span>Entrar</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-xs text-text-secondary hover:text-accent-gold transition-colors">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
