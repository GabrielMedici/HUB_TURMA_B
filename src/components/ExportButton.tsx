"use client";

import { Printer } from "lucide-react";

export function ExportButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="no-print group flex items-center gap-2 px-4 py-2 bg-accent-gold/10 hover:bg-accent-gold/20 text-accent-gold rounded-lg font-medium transition-all text-sm border border-accent-gold/20 shadow-sm"
    >
      <Printer className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
      Exportar Resumo (PDF)
    </button>
  );
}
