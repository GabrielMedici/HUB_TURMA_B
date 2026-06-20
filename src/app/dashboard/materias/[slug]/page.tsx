import { LessonAccordion } from "@/components/LessonAccordion";
import { parseContentWithGlossary } from "@/utils/textParser";
import { BookOpen, ArrowLeft, Scale, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { lessonsDB } from "@/data/conteudo";
import { notFound } from "next/navigation";

export default async function MateriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const materiaLessons = lessonsDB.filter(aula => aula.materia === slug);

  const mappedLessons = materiaLessons.length > 0 ? materiaLessons.map((aula) => ({
    id: aula.id,
    title: aula.title,
    content: (
      <div className="prose prose-invert max-w-none font-sans">
        {/* Resumo Didático */}
        <div className="text-text-secondary leading-relaxed text-lg mb-8">
          {parseContentWithGlossary(aula.resumo)}
        </div>
        
        {/* Base Legal */}
        {aula.baseLegal && (
          <blockquote className="mt-8 mb-6 p-6 rounded-r-3xl bg-white/5 border-l-4 border-accent-gold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)] flex flex-col md:flex-row md:items-start gap-4 not-prose">
            <div className="p-3 bg-accent-gold/10 rounded-2xl shrink-0 mt-1">
              <Scale className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <strong className="block text-accent-gold font-playfair text-2xl mb-2">Base Legal Obrigatória</strong>
              <p className="text-text-primary text-lg leading-relaxed m-0">
                {parseContentWithGlossary(aula.baseLegal)}
              </p>
            </div>
          </blockquote>
        )}

        {/* Pegadinha */}
        {aula.pegadinha && (
          <div className="mt-6 p-6 rounded-3xl bg-rose-950/20 border border-rose-900/30 flex flex-col md:flex-row md:items-start gap-4 not-prose">
            <div className="p-3 bg-rose-500/10 rounded-2xl shrink-0 mt-1">
              <AlertTriangle className="w-6 h-6 text-rose-500" />
            </div>
            <div>
              <strong className="block text-rose-400 font-medium text-lg mb-2">Onde a professora tenta te derrubar:</strong>
              <p className="text-text-secondary leading-relaxed m-0">
                {parseContentWithGlossary(aula.pegadinha)}
              </p>
            </div>
          </div>
        )}
      </div>
    ),
  })) : [
    {
      id: "empty",
      title: "Matéria em Elaboração",
      content: <p className="text-text-secondary">O conteúdo de véspera desta disciplina está a ser finalizado pelos professores.</p>
    }
  ];

  const materiaTitle = slug === 'civil' ? 'Direito Civil' : slug === 'constitucional' ? 'Direito Constitucional' : 'Direito Penal';

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors text-sm mb-8">
        <ArrowLeft className="w-4 h-4" />
        Voltar para Acervo
      </Link>

      <div className="mb-12">
        <span className="text-accent-gold font-medium tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Módulo de Estudos
        </span>
        <h1 className="font-playfair text-5xl md:text-6xl text-text-primary mb-6 leading-tight tracking-tight">
          {materiaTitle}
        </h1>
        <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
          Material de revisão focado nos tópicos de mais alta probabilidade de cobrança na prova.
        </p>
      </div>

      <LessonAccordion lessons={mappedLessons} />
    </div>
  );
}
