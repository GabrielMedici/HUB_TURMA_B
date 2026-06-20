import { Target, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { QuizEngine } from "@/components/QuizEngine";
import { quizDB } from "@/data/conteudo";

export default async function SimuladosPage({ searchParams }: { searchParams: Promise<{ materia?: string }> }) {
  const params = await searchParams;
  const materiaSlug = params.materia;

  if (materiaSlug) {
    // Busca as questões.
    const questoes = quizDB.filter(q => q.materia === materiaSlug);

    // Embaralha (Shuffle) no servidor
    const shuffled = [...questoes].sort(() => 0.5 - Math.random()).slice(0, 10);

    const title = materiaSlug === 'civil' ? 'Direito Civil' : materiaSlug === 'constitucional' ? 'Direito Constitucional' : 'Direito Penal';

    return (
      <div className="max-w-4xl mx-auto pb-20">
        <Link href="/dashboard/simulados" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors text-sm mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Seleção
        </Link>
        <div className="mb-10">
          <span className="text-accent-gold font-medium tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Simulado em Andamento
          </span>
          <h1 className="font-playfair text-4xl text-text-primary mb-4 leading-tight">
            {title}
          </h1>
        </div>

        <QuizEngine questoes={shuffled} />
      </div>
    );
  }

  const materias = [
    { id: "civil", titulo: "Direito Civil" },
    { id: "penal", titulo: "Direito Penal" },
    { id: "constitucional", titulo: "Direito Constitucional" }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-12">
        <span className="text-accent-gold font-medium tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Módulo de Avaliação
        </span>
        <h1 className="font-playfair text-5xl md:text-6xl text-text-primary mb-6 leading-tight tracking-tight">
          Simulador Cirúrgico
        </h1>
        <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
          Selecione uma matéria abaixo para testar os conhecimentos cobrados na Base Legal obrigatória.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materias.map((mat) => (
          <Link 
            key={mat.id} 
            href={`/dashboard/simulados?materia=${mat.id}`}
            className="group block p-8 rounded-2xl bg-[#1A1A1A]/40 border border-white/5 hover:border-accent-gold/40 hover:bg-[#1A1A1A]/80 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <BookOpen className="w-24 h-24 text-accent-gold" />
            </div>
            <h3 className="text-2xl font-playfair text-text-primary mb-3 group-hover:text-accent-gold transition-colors">
              {mat.titulo}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-[80%]">
              Gere um simulado com questões inéditas e comentadas sobre {mat.titulo}.
            </p>
            <div className="mt-8 flex items-center gap-2 text-accent-gold text-sm font-medium">
              Iniciar Simulado
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
