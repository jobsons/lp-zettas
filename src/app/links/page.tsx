"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Globe,
  User,
  Building2,
  Phone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ChevronRight
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Tipagem segura para a chamada do Google Analytics
interface WindowWithGtag extends Window {
  gtag?: (
    command: "event",
    action: string,
    params: {
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: unknown;
    }
  ) => void;
}

// Segmentos de escolha rápida para otimizar o preenchimento no mobile
const SEGMENTOS = [
  "E-commerce",
  "Infoprodutos",
  "Serviços / B2B",
  "Negócio Local",
  "Outros"
];

export default function LinksBioPage() {
  // Configurações do WhatsApp
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5547999035154";
  const defaultWhatsAppMsg = "Olá! Vim pelo link da bio do Instagram e gostaria de mais detalhes.";
  const linkWhatsAppDireto = buildWhatsAppLink({
    phone,
    message: defaultWhatsAppMsg,
  }) ?? `https://wa.me/${phone}?text=${encodeURIComponent(defaultWhatsAppMsg)}`;

  // Estados do Formulário
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [segmento, setSegmento] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  // Máscara para WhatsApp: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    // Validação básica
    if (!nome.trim()) {
      setErro("Por favor, digite seu nome.");
      return;
    }
    const cleanPhone = whatsapp.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErro("Por favor, digite um número de WhatsApp válido.");
      return;
    }
    if (!empresa.trim()) {
      setErro("Por favor, digite o nome da sua empresa.");
      return;
    }
    if (!segmento) {
      setErro("Por favor, selecione o segmento da sua empresa.");
      return;
    }

    setLoading(true);

    try {
      // 1. Disparar evento do Google Analytics se disponível globalmente
      if (typeof window !== "undefined") {
        const win = window as unknown as WindowWithGtag;
        if (win.gtag) {
          win.gtag("event", "lead_capture_bio", {
            event_category: "lead",
            event_label: "Instagram Bio Form",
            value: 1,
          });
        }
      }

      // 2. Disparar Webhook de integração opcional
      const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            whatsapp: cleanPhone,
            empresa,
            segmento,
            origem: "instagram_bio",
            data: new Date().toISOString(),
          }),
        }).catch(err => console.error("Erro ao enviar dados para webhook:", err));
      }

      // Animação de sucesso
      setSucesso(true);

      // 3. Gerar link e redirecionar para o WhatsApp
      const msgCustomizada = `Olá! Sou o ${nome} da empresa ${empresa} (${segmento}). Acabo de preencher o formulário na bio e gostaria de receber meu diagnóstico gratuito de automação de WhatsApp!`;
      const whatsAppLink = buildWhatsAppLink({
        phone,
        message: msgCustomizada,
      }) ?? `https://wa.me/${phone}?text=${encodeURIComponent(msgCustomizada)}`;

      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = whatsAppLink;
        }
        setLoading(false);
      }, 1500);

    } catch (err) {
      console.error(err);
      setErro("Houve um erro ao processar. Tente falar conosco diretamente no WhatsApp.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-10 px-4 md:px-6 relative overflow-hidden select-none">

      {/* Background neon elements */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[40%] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      {/* Container Principal */}
      <main className="w-full max-w-md flex flex-col items-center z-10 flex-grow justify-center">

        {/* Header com Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-2xl bg-white border border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.15)] flex items-center justify-center p-1 mb-4 group transition-all duration-300 hover:scale-105">
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-white flex items-center justify-center">
              <Image
                src="/logosemfundo.png"
                alt="Zettas Logo"
                width={120}
                height={45}
                className="w-full h-auto object-contain scale-[1.3] translate-y-[-2%]"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-1.5 justify-center">
            Zettas IA
            <span className="inline-flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Oficial
            </span>
          </h1>
          <p className="text-sm text-graphite-300 mt-2 max-w-[320px]">
            Agentes de Inteligência Artificial para WhatsApp. Escalamos suas vendas e seu atendimento 24/7.
          </p>
        </motion.div>

        {/* Links & Formulário */}
        <div className="w-full flex flex-col gap-4">

          {/* Botão Primário: WhatsApp Direto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href={linkWhatsAppDireto}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 w-full p-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] group overflow-hidden active:scale-[0.98]"
            >
              {/* Efeito Glow Pulsante */}
              <span className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex-shrink-0 bg-white/20 p-2.5 rounded-xl">
                <MessageCircle className="w-6 h-6 animate-pulse" />
              </div>

              <div className="flex-grow text-left">
                <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-100 opacity-90">
                  Contato Imediato
                </span>
                <span className="block text-base sm:text-lg font-bold leading-tight">
                  Falar no WhatsApp agora
                </span>
              </div>

              <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card com Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full p-5 sm:p-6 rounded-2xl bg-navy-900/60 backdrop-blur-md border border-navy-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-cyan-500/10 p-1.5 rounded-lg border border-cyan-500/20 text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-white">
                Diagnóstico Gratuito
              </h2>
            </div>

            <p className="text-xs text-graphite-300 mb-5 leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato com você.
            </p>

            <AnimatePresence mode="wait">
              {!sucesso ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Campo Nome */}
                  <div className="relative">
                    <label className="sr-only" htmlFor="nome">Nome</label>
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-700">
                      <User className="w-4 h-4 text-cyan-400" />
                    </div>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      disabled={loading}
                      className="w-full pl-10 pr-4 py-3 bg-navy-950/70 border border-navy-800 rounded-xl text-sm text-white placeholder-graphite-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-60"
                      required
                    />
                  </div>

                  {/* Campo WhatsApp */}
                  <div className="relative">
                    <label className="sr-only" htmlFor="whatsapp">WhatsApp</label>
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-700">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(DD) 99999-9999"
                      disabled={loading}
                      className="w-full pl-10 pr-4 py-3 bg-navy-950/70 border border-navy-800 rounded-xl text-sm text-white placeholder-graphite-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-60"
                      required
                    />
                  </div>

                  {/* Campo Empresa */}
                  <div className="relative">
                    <label className="sr-only" htmlFor="empresa">Empresa</label>
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-700">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <input
                      type="text"
                      id="empresa"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Nome da sua Empresa"
                      disabled={loading}
                      className="w-full pl-10 pr-4 py-3 bg-navy-950/70 border border-navy-800 rounded-xl text-sm text-white placeholder-graphite-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-60"
                      required
                    />
                  </div>

                  {/* Campo Segmento (Tags de escolha rápida) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-graphite-300">
                      Segmento da Empresa
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {SEGMENTOS.map((seg) => {
                        const isSelected = segmento === seg;
                        return (
                          <button
                            key={seg}
                            type="button"
                            onClick={() => setSegmento(seg)}
                            disabled={loading}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isSelected
                              ? "bg-cyan-500 text-navy-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                              : "bg-navy-950/60 border border-navy-800 text-graphite-300 hover:border-navy-700 hover:text-white"
                              }`}
                          >
                            {seg}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mensagem de erro */}
                  {erro && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 font-medium"
                    >
                      {erro}
                    </motion.p>
                  )}

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white gradient-brand rounded-xl hover:opacity-95 transition-all shadow-lg shadow-cyan-950/40 active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Iniciando Atendimento...
                      </>
                    ) : (
                      <>
                        Receber Diagnóstico
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="sucesso"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6 space-y-4"
                >
                  <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 p-3 rounded-full animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Dados recebidos!</h3>
                    <p className="text-xs text-graphite-300 mt-2 max-w-[280px]">
                      Redirecionando você para o WhatsApp oficial da Zettas para iniciarmos seu diagnóstico...
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold animate-pulse">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Abrindo o WhatsApp
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Links Secundários (Site Principal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-navy-900/30 border border-navy-800/80 hover:bg-navy-900/50 hover:border-navy-700/80 text-graphite-200 transition-all duration-200 text-sm font-medium group active:scale-[0.99]"
            >
              <div className="bg-navy-800 p-2 rounded-lg text-graphite-400 group-hover:text-white group-hover:bg-navy-700 transition-colors">
                <Globe className="w-4 h-4" />
              </div>
              <span className="flex-grow text-left">Conhecer nosso site completo</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="w-full max-w-md text-center mt-10 z-10">
        <p className="text-[10px] text-graphite-500 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Zettas IA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
