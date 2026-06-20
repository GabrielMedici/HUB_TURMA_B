"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Target } from "lucide-react";
import Link from "next/link";

import { QuizQuestion } from "@/data/conteudo";

interface QuizEngineProps {
  questoes: QuizQuestion[];
}

export function QuizEngine({ questoes }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [consecutiveErrors, setConsecutiveErrors] = useState(0);

  const questaoAtual = questoes[currentIndex];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questaoAtual.resposta_correta) {
      setScore((prev) => prev + 1);
      setConsecutiveErrors(0); // Reset errors
    } else {
      setConsecutiveErrors((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questoes.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setConsecutiveErrors(0);
  };

  if (questoes.length === 0) {
    return (
      <div className="text-center py-20 bg-[#1A1A1A]/40 rounded-2xl border border-white/5">
        <Target className="w-12 h-12 text-text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-playfair text-text-primary mb-2">Nenhuma questão encontrada</h3>
        <p className="text-text-secondary mb-6">Ainda não há questões cadastradas para esta matéria.</p>
        <Link href="/dashboard/simulados" className="text-accent-gold hover:underline">
          Voltar para Escolha de Matérias
        </Link>
      </div>
    );
  }

  if (showResults) {
    const percent = Math.round((score / questoes.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 bg-[#1A1A1A]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
      >
        <h2 className="text-4xl font-playfair text-accent-gold mb-6">Simulado Concluído</h2>
        <div className="text-7xl font-light text-text-primary mb-4">{percent}%</div>
        <p className="text-text-secondary text-lg mb-10">
          Você acertou <strong className="text-text-primary">{score}</strong> de <strong className="text-text-primary">{questoes.length}</strong> questões.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/dashboard/simulados" 
            className="px-8 py-3 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:bg-white/5 transition-all"
          >
            Escolher outra Matéria
          </Link>
          <button 
            onClick={resetQuiz}
            className="px-8 py-3 rounded-lg bg-accent-gold text-background-base font-medium hover:bg-[#E5C354] transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Tentar Novamente
          </button>
        </div>
      </motion.div>
    );
  }

  const options: { key: 'a' | 'b' | 'c' | 'd', label: string }[] = [
    { key: 'a', label: questaoAtual.alternativa_a },
    { key: 'b', label: questaoAtual.alternativa_b },
    { key: 'c', label: questaoAtual.alternativa_c },
    { key: 'd', label: questaoAtual.alternativa_d },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence>
        {consecutiveErrors >= 3 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-start gap-3"
          >
            <div className="p-2 bg-accent-gold/20 rounded-lg shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
            </div>
            <div>
              <strong className="block text-accent-gold font-medium mb-1">Respire fundo. A Turma B não reprova.</strong>
              <p className="text-text-secondary text-sm">É errando aqui que se acerta na segunda-feira. Leia a justificativa com calma e tente de novo.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8 flex items-center justify-between">
        <span className="text-accent-gold font-medium tracking-widest uppercase text-xs">
          Questão {currentIndex + 1} de {questoes.length}
        </span>
        <span className="text-text-secondary text-sm">
          Pontuação: <strong className="text-text-primary">{score}</strong>
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-playfair text-text-primary mb-8 leading-snug">
            {questaoAtual.pergunta}
          </h2>

          <div className="space-y-4">
            {options.map((opt) => {
              const isCorrect = opt.key === questaoAtual.resposta_correta;
              const isSelected = selectedAnswer === opt.key;
              
              let buttonClass = "w-full text-left p-4 md:p-6 min-h-[64px] rounded-2xl border transition-all duration-300 relative overflow-hidden group active:scale-[0.98] ";
              
              if (!isAnswered) {
                buttonClass += "bg-background-surface border-white/5 hover:border-accent-gold/50 active:bg-white/10 cursor-pointer";
              } else {
                if (isCorrect) {
                  buttonClass += "bg-emerald-950/30 border-emerald-500/50 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.1)]";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-rose-950/30 border-rose-500/50 text-rose-100";
                } else {
                  buttonClass += "bg-background-surface border-white/5 opacity-50";
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleSelect(opt.key)}
                  className={buttonClass}
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-sm font-medium uppercase mt-0.5 group-hover:border-accent-gold/50 transition-colors">
                      {opt.key}
                    </span>
                    <span className="text-lg leading-relaxed">{opt.label}</span>
                  </div>
                  
                  {isAnswered && isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-6 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-6 top-1/2 -translate-y-1/2">
                      <XCircle className="w-6 h-6 text-rose-500" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                className="overflow-hidden"
              >
                <div className="p-6 md:p-8 rounded-3xl bg-accent-gold/5 backdrop-blur-xl border-2 border-accent-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.1)] relative">
                  <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 rounded-full bg-accent-gold text-xs font-bold text-background-base uppercase tracking-widest shadow-lg">
                    Justificativa e Base Legal
                  </div>
                  <p className="text-text-primary text-lg md:text-xl font-light leading-relaxed mt-4">
                    {questaoAtual.explicacao}
                  </p>
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 active:bg-white/20 active:scale-95 text-white px-6 py-3 rounded-xl font-medium transition-all"
                    >
                      {currentIndex + 1 < questoes.length ? 'Próxima Questão' : 'Ver Resultados'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
