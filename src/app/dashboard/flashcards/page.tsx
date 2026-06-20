import { FlashcardDeck } from "@/components/FlashcardDeck";
import { Brain } from "lucide-react";

export const metadata = {
  title: "Flashcards | Hub Turma B",
  description: "Treino de memória e revisão ativa.",
};

export default function FlashcardsPage() {
  return (
    <div className="w-full flex flex-col items-center pt-10">
      <div className="mb-12 text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-6">
          <Brain className="w-8 h-8 text-accent-gold" />
        </div>
        <h1 className="font-playfair text-4xl text-text-primary tracking-tight mb-4">
          Treino de <span className="text-accent-gold italic">Memória Ativa</span>
        </h1>
        <p className="text-text-secondary font-light text-lg">
          O segredo da retenção de longo prazo. Leia o termo, puxe pela memória e vire o cartão para confirmar.
        </p>
      </div>

      <div className="w-full max-w-3xl">
        <FlashcardDeck />
      </div>
    </div>
  );
}
