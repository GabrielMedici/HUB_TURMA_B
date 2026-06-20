import React from "react";
import { AlertTriangle, Lightbulb, Zap, BookOpen } from "lucide-react";
import { sosDB } from "@/data/conteudo";

function highlightArticles(text: string) {
  // Regex simples para capturar "Art." e o texto seguinte até encontrar um parêntese fechando ou ponto final que encerre a frase lógica
  // Como o conteúdo vem "Art. 18, I e II, do CP", vamos pegar tudo o que começar com Art. até o fechamento de parêntese se existir.
  // Uma abordagem mais segura é usar um split simples:
  const regex = /(Art\.[^)]+\))/g;
  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (part.startsWith('Art.')) {
      return <strong key={index} className="text-accent-gold font-bold">{part}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function SOSBanner() {
  return (
    <div className="mb-12 rounded-3xl bg-gradient-to-br from-rose-950/20 to-[#1A1A1A]/80 border border-rose-900/30 p-6 md:p-10 backdrop-blur-xl relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <Zap className="w-48 h-48 text-rose-500" />
      </div>

      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
          <AlertTriangle className="w-4 h-4" />
          SOS Véspera de Prova
        </span>
        
        <h2 className="text-3xl md:text-4xl font-playfair text-white mb-8">
          Perdido? Comece por aqui.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            sosDB.find(s => s.materia === "penal"),
            sosDB.find(s => s.materia === "civil"),
            sosDB.find(s => s.materia === "constitucional")
          ].filter(Boolean).map((item) => {
            if (!item) return null;
            let bgColor = "";
            let iconColor = "";
            let titleColor = "";
            let Icon = BookOpen;

            if (item.type === "pegadinha") {
              bgColor = "bg-orange-950/20 border-orange-500/20 hover:bg-orange-950/30 active:bg-orange-950/40";
              iconColor = "text-orange-400";
              titleColor = "text-orange-400";
              Icon = AlertTriangle;
            } else if (item.type === "dica") {
              bgColor = "bg-emerald-950/20 border-emerald-500/20 hover:bg-emerald-950/30 active:bg-emerald-950/40";
              iconColor = "text-emerald-400";
              titleColor = "text-emerald-400";
              Icon = Lightbulb;
            } else {
              bgColor = "bg-blue-950/20 border-blue-500/20 hover:bg-blue-950/30 active:bg-blue-950/40";
              iconColor = "text-blue-400";
              titleColor = "text-blue-400";
              Icon = Zap;
            }

            return (
              <div key={item.id} className={`p-5 md:p-6 rounded-2xl border transition-colors active:scale-95 ${bgColor}`}>
                <h3 className={`${titleColor} font-medium flex items-center gap-2 mb-3`}>
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {highlightArticles(item.content)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
