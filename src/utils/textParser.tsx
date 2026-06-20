import React from 'react';
import { glossaryDB } from '@/data/conteudo';
import { GlossaryTooltip } from '@/components/GlossaryTooltip';

export function parseContentWithGlossary(text: string): React.ReactNode[] {
  // Ordena os termos do maior para o menor para evitar que parte de uma palavra composta seja selecionada antes
  const terms = [...glossaryDB].sort((a, b) => b.term.length - a.term.length);
  
  // Escapa caracteres especiais regex e cria a expressão (case insensitive, respeitando limites da palavra)
  const escapedTerms = terms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Verifica se este fragmento é um termo do glossário
    const termObj = terms.find(t => t.term.toLowerCase() === part.toLowerCase());
    
    if (termObj) {
      return (
        <GlossaryTooltip 
          key={index} 
          term={part} // mantém a capitalização original do texto
          definition={termObj.definition} 
        />
      );
    }
    
    // Se for texto normal, adicionamos ao Fragment. Tratamos quebras de linha básicas.
    if (part.includes('\n')) {
      const subParts = part.split('\n');
      return (
        <React.Fragment key={index}>
          {subParts.map((sp, i) => (
            <React.Fragment key={i}>
              {sp}
              {i !== subParts.length - 1 && <br />}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
