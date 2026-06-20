import { PomodoroTimer } from "@/components/PomodoroTimer";
import { BookOpen, Shield, Scale, Target, ArrowRight } from "lucide-react";
import { SOSBanner } from "@/components/SOSBanner";
import Link from "next/link";

export default function DashboardHome() {
  const materias = [
    { title: "Direito Civil", slug: "civil", icon: BookOpen, desc: "Conceitos dogmáticos e jurisprudência civil." },
    { title: "Direito Penal", slug: "penal", icon: Shield, desc: "Teoria do crime e excludentes de ilicitude." },
    { title: "Direito Constitucional", slug: "constitucional", icon: Scale, desc: "Controle de constitucionalidade e remédios." },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Topo: Componente de Emergência Véspera de Prova */}
      <SOSBanner />
      
      <header>
        <h2 className="font-playfair text-4xl text-text-primary tracking-tight mb-2">
          Acervo Cirúrgico
        </h2>
        <p className="text-text-secondary font-light">
          Acesso imediato e direto aos resumos focados para a sua reta final.
        </p>
      </header>

      {/* Grid de Acesso Rápido às Matérias (1 coluna no mobile, botões altos) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {materias.map((mat) => {
          const Icon = mat.icon;
          return (
            <Link
              key={mat.slug}
              href={`/dashboard/materias/${mat.slug}`}
              className="group flex flex-col justify-between p-6 md:p-8 min-h-[7rem] md:min-h-[12rem] bg-background-surface border border-white/5 rounded-2xl hover:border-accent-gold/40 hover:bg-[#1A1A1A]/80 active:scale-[0.98] active:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24 text-accent-gold" />
              </div>
              
              <div className="flex items-center gap-4 mb-2 md:mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-accent-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent-gold transition-colors" />
                </div>
                <h3 className="font-playfair text-xl md:text-2xl text-text-primary group-hover:text-accent-gold transition-colors">
                  {mat.title}
                </h3>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed hidden md:block">
                {mat.desc}
              </p>
              
              <div className="mt-2 md:mt-4 flex items-center justify-end md:justify-start gap-2 text-accent-gold text-sm font-medium">
                Acessar Resumo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Destaque Inferior e Pomodoro */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Lado Esquerdo: Motor de Simulados */}
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/dashboard/simulados"
            className="group block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-background-base border border-accent-gold/20 hover:border-accent-gold/50 active:scale-[0.98] active:bg-white/5 transition-all duration-300 relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.05)]"
          >
            <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-48 h-48 text-accent-gold" />
            </div>

            <div className="relative z-10 max-w-lg">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-widest mb-4">
                Prática Intensiva
              </span>
              <h3 className="font-playfair text-3xl md:text-4xl text-text-primary mb-4">
                Motor de Simulados
              </h3>
              <p className="text-text-secondary text-sm md:text-base mb-8 leading-relaxed">
                Teste seus conhecimentos em um ambiente de prova real com feedback imediato e questões cruciais.
              </p>
              <div className="inline-flex items-center gap-3 bg-accent-gold text-background-base px-6 py-3 rounded-xl font-medium hover:bg-[#E5C354] transition-colors">
                Iniciar Bateria de Testes
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>

        {/* Lado Direito: Timer Pomodoro Flutuante */}
        <div className="col-span-1 w-full relative z-10">
          <PomodoroTimer />
        </div>

      </div>
    </div>
  );
}
