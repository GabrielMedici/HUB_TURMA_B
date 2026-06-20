"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "@/utils/supabase/client";
import { Save, PlusCircle, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [materias, setMaterias] = useState<{ id: string, titulo: string }[]>([]);
  const [loadingMaterias, setLoadingMaterias] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState({
    materia_id: "",
    titulo: "",
    conteudo_texto: "",
  });

  const supabase = createClient();

  // Busca as matérias reais do banco para popular o Dropdown
  useEffect(() => {
    async function fetchMaterias() {
      setLoadingMaterias(true);
      const { data, error } = await supabase.from("materias").select("id, titulo").order("titulo");
      
      if (error) {
        console.error("Erro ao buscar matérias:", error);
        setStatus({ type: 'error', message: 'Erro ao conectar com o Supabase. Verifique seu console.' });
      } else if (data) {
        setMaterias(data);
        if (data.length > 0) {
          setFormData(prev => ({ ...prev, materia_id: data[0].id }));
        }
      }
      setLoadingMaterias(false);
    }
    fetchMaterias();
  }, []); // removido supabase da dependência para evitar loops

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Identifica a ordem máxima atual para esta matéria
      const { data: maxOrdemData } = await supabase
        .from("aulas")
        .select("ordem")
        .eq("materia_id", formData.materia_id)
        .order("ordem", { ascending: false })
        .limit(1)
        .single();
        
      const novaOrdem = maxOrdemData ? maxOrdemData.ordem + 1 : 1;

      // Realiza a inserção no banco
      const { error } = await supabase.from("aulas").insert({
        materia_id: formData.materia_id,
        titulo: formData.titulo,
        conteudo_texto: formData.conteudo_texto,
        ordem: novaOrdem
      });

      if (error) throw error;

      // Sucesso
      setStatus({ type: 'success', message: 'Aula publicada com sucesso na Caixa Forte do Hub Turma B!' });
      setFormData(prev => ({ ...prev, titulo: "", conteudo_texto: "" }));
      
    } catch (error: any) {
      console.error(error);
      setStatus({ type: 'error', message: error.message || 'Erro ao publicar. Verifique se o RLS de INSERT está liberado.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-base p-6 md:p-12 relative overflow-hidden">
      {/* Efeitos de profundidade e brilho */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-burgundy/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-10">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Dashboard
          </Link>
          <span className="text-accent-burgundy font-medium tracking-widest uppercase text-xs mb-2 flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Área Restrita
          </span>
          <h1 className="font-playfair text-4xl text-text-primary tracking-tight">
            Terminal de Inserção de Aulas
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider ml-1">
                Matéria-Alvo
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.materia_id}
                  onChange={e => setFormData({ ...formData, materia_id: e.target.value })}
                  className="w-full bg-background-surface text-text-primary border border-white/10 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all appearance-none"
                >
                  {loadingMaterias && <option value="">Carregando matérias...</option>}
                  {!loadingMaterias && materias.length === 0 && <option value="">Nenhuma matéria cadastrada no banco</option>}
                  {materias.map(mat => (
                    <option key={mat.id} value={mat.id}>{mat.titulo}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider ml-1">
                Título da Aula
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Aula 2 - Excludentes de Ilicitude"
                value={formData.titulo}
                onChange={e => setFormData({ ...formData, titulo: e.target.value })}
                className="w-full bg-background-surface text-text-primary border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder:text-text-secondary/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider ml-1">
                Conteúdo Didático (Texto ou Mock)
              </label>
              <textarea
                required
                rows={10}
                placeholder="Escreva o resumo da aula aqui. Você pode usar a sintaxe [[Termo::Definição]] para acionar os Tooltips de luxo."
                value={formData.conteudo_texto}
                onChange={e => setFormData({ ...formData, conteudo_texto: e.target.value })}
                className="w-full bg-background-surface text-text-primary border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder:text-text-secondary/50 resize-y"
              />
            </div>

            {status.type && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={`flex items-center gap-3 p-4 rounded-lg overflow-hidden ${
                  status.type === 'success' 
                  ? 'bg-accent-gold/10 border border-accent-gold/20 text-accent-gold' 
                  : 'bg-accent-burgundy/10 border border-accent-burgundy/20 text-accent-burgundy'
                }`}
              >
                {status.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                <p className="text-sm font-medium">{status.message}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading || !formData.materia_id}
              className="w-full group flex items-center justify-center gap-2 bg-accent-gold hover:bg-[#E5C354] disabled:bg-accent-gold/50 disabled:cursor-not-allowed text-background-base py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-background-base border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Publicar Aula no Hub</span>
                </>
              )}
            </button>
            
          </form>
        </motion.div>
      </div>
    </div>
  );
}
