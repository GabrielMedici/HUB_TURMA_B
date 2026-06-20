"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Shield, Scale, Target, LogOut, Brain } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Início", href: "/dashboard", icon: Home },
  { name: "Civil", href: "/dashboard/materias/civil", icon: BookOpen },
  { name: "Penal", href: "/dashboard/materias/penal", icon: Shield },
  { name: "Const.", href: "/dashboard/materias/constitucional", icon: Scale },
  { name: "Simulados", href: "/dashboard/simulados", icon: Target },
  { name: "Flashcards", href: "/dashboard/flashcards", icon: Brain },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar (escondida no mobile) */}
      <aside className="hidden md:flex w-72 h-full bg-background-surface border-r border-white/5 flex-col transition-all duration-300">
        <div className="p-8">
          <h2 className="font-playfair text-3xl text-text-primary tracking-tight">
            Hub <span className="text-accent-gold">Turma B</span>
          </h2>
        </div>

        <nav className="flex-1 px-6 py-4 space-y-3 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 relative group overflow-hidden active:scale-95 active:bg-white/10 ${
                  isActive
                    ? "bg-accent-burgundy/20 text-white"
                    : "text-text-secondary hover:text-white hover:bg-accent-burgundy/10"
                }`}
              >
                {isActive && (
                  <motion.div layoutId="activeDesktop" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-accent-burgundy rounded-r-full" />
                )}
                
                <Icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-accent-gold" : "group-hover:text-accent-gold"}`} />
                <span className="font-medium text-base">{item.name === "Const." ? "Constitucional" : item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <Link
            href="/login"
            className="flex items-center gap-4 px-4 py-4 text-text-secondary hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-95 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="font-medium text-base">Sair</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar (escondida no desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-xl border-t border-white/10 pb-safe">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-lg relative active:scale-90 transition-transform ${
                  isActive ? "text-accent-gold" : "text-text-secondary"
                }`}
              >
                {isActive && (
                  <motion.div layoutId="activeMobile" className="absolute -top-3 w-8 h-1 bg-accent-gold rounded-b-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                )}
                <Icon className="w-6 h-6" />
                <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
