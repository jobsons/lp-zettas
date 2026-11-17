"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";


export default function LinksBioPage() {
  // Configurações do WhatsApp
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5547999035154";
  const defaultWhatsAppMsg = "Olá! Vim pelo Instagram da Zettas e quero conversar sobre o comercial da minha academia.";
  const linkWhatsAppDireto = buildWhatsAppLink({
    phone,
    message: defaultWhatsAppMsg,
  }) ?? `https://wa.me/${phone}?text=${encodeURIComponent(defaultWhatsAppMsg)}`;

  const tallyHash =
    "#tally-open=XxOGxe&tally-emoji-text=%F0%9F%91%8B&tally-emoji-animation=wave";

  const handleTallyOpen = () => {
    if (typeof window === "undefined") return;

    const applyHash = () => {
      if (window.location.hash === tallyHash) {
        window.location.hash = "";
        window.setTimeout(() => {
          window.location.hash = tallyHash;
        }, 0);
        return;
      }

      window.location.hash = tallyHash;
    };

    const fireHashChange = () => {
      try {
        const evt =
          typeof window.HashChangeEvent === "function"
            ? new HashChangeEvent("hashchange")
            : (() => {
              const e = document.createEvent("Event");
              e.initEvent("hashchange", true, true);
              return e;
            })();
        window.dispatchEvent(evt);
      } catch { }
    };

    applyHash();
    fireHashChange();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-12 px-4 md:px-6 relative overflow-hidden select-none">

      {/* Background neon elements */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Container Principal */}
      <main className="w-full max-w-md flex flex-col items-center z-10 flex-grow justify-center py-6">

        {/* Header com Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-6"
        >
          {/* Badge de Verificação Oficial */}
          <span className="inline-flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
            Comercial para academias
          </span>

          {/* Logo Oficial Direta */}
          <div className="relative w-32 mb-4 group transition-all duration-300 hover:scale-105 flex items-center justify-center">
            {/* Glow de fundo sutil para contraste */}
            <div className="absolute w-24 h-24 bg-white/10 blur-2xl rounded-full opacity-60 pointer-events-none" />
            
            <Image
              src="/Zettas_logo.png"
              alt="Zettas Logo"
              width={128}
              height={128}
              className="relative z-10 w-full h-auto object-contain"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight max-w-[360px]">
            Organize o comercial da sua academia.
          </h1>
          <p className="text-sm text-graphite-300 mt-4 max-w-[360px] leading-relaxed">
            Atendimento no WhatsApp, acompanhamento de interessados e relatórios semanais para orientar os próximos passos da equipe.
          </p>
        </motion.div>

        {/* Links & Botões de Ação */}
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
              className="relative flex items-center gap-4 w-full p-4 rounded-2xl bg-[#25D366] text-[#082516] hover:bg-[#1ebe57] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] group overflow-hidden active:scale-[0.98]"
            >
              {/* Efeito Glow Pulsante */}
              <span className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex-shrink-0 bg-white/20 p-2.5 rounded-xl">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div className="flex-grow text-left">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#123c23] opacity-90">
                  Vamos conversar
                </span>
                <span className="block text-base sm:text-lg font-bold leading-tight">
                  Conversar sobre minha academia
                </span>
              </div>

              <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-3">
            <a href="https://www.instagram.com/reel/DfpHyYHAnKw/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-navy-700 bg-navy-900/40 p-4 text-left hover:border-emerald-500/60 transition-colors">
              <span className="block font-semibold text-white">Veja o atendimento na prática ↗</span>
              <span className="block mt-1 text-sm text-graphite-300">Da conversa com a IA à continuidade pela equipe. Demonstração adaptada.</span>
            </a>
            <a href="https://www.instagram.com/p/DfrsgzNiDwx/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-navy-700 bg-navy-900/40 p-4 text-left hover:border-emerald-500/60 transition-colors">
              <span className="block font-semibold text-white">O que acompanhamos toda semana ↗</span>
              <span className="block mt-1 text-sm text-graphite-300">Interessados, visitas, retornos pendentes e ações para a equipe.</span>
            </a>
          </div>

          {/* Botão Secundário: Formulário Tally */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              type="button"
              data-tally-open="XxOGxe"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              onClick={handleTallyOpen}
              className="relative flex items-center gap-4 w-full p-4 rounded-2xl gradient-brand text-white transition-all duration-300 shadow-[0_0_20px_rgba(109,40,217,0.25)] hover:shadow-[0_0_30px_rgba(109,40,217,0.4)] group overflow-hidden active:scale-[0.98]"
            >
              {/* Efeito Glow Pulsante */}
              <span className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex-shrink-0 bg-white/20 p-2.5 rounded-xl">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="flex-grow text-left">
                <span className="block text-xs font-semibold uppercase tracking-wider text-cyan-200 opacity-90">
                  Prefere que a gente entre em contato?
                </span>
                <span className="block text-base sm:text-lg font-bold leading-tight">
                  Deixar meus dados
                </span>
              </div>

              <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Botão Terciário: Site Completo */}
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
              <span className="flex-grow text-left">Entender como funciona</span>
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

