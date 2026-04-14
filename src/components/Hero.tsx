"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, TrendingUp, Rocket, Headset, Award, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-8"
        >
          <Bot className="w-4 h-4" />
          <span>O futuro do atendimento chegou!</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto mb-6"
        >
          Sua operação no <span className="text-transparent bg-clip-text gradient-brand">piloto automático</span> com IA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-graphite-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Escale seu atendimento, recupere vendas e qualifique leads 24 horas por dia com soluções profissionais de automação para o seu WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#captura"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white gradient-brand rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25"
          >
            Solicitar Diagnóstico Gratuito
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#nichos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-navy-800/50 hover:bg-navy-800 border border-navy-700 rounded-xl transition-all"
          >
            Ver casos de uso
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-navy-900/50 backdrop-blur rounded-xl p-4 border border-navy-800 shadow-sm text-sm font-medium text-graphite-200">
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Respostas Imediatas</span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Mais conversão</span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Bot className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">
                <span className="lg:block">Qualificação automática</span>
                <span className="lg:block">de leads</span>
              </span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">
                <span className="lg:block">Integração com seu</span>
                <span className="lg:block">CRM/agenda</span>
              </span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Rocket className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Implementação rápida</span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Headset className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <Award className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Resultados no primeiro mês</span>
            </div>
            <div className="flex items-center gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-1 rounded-lg px-3 py-2 bg-navy-950/30 border border-navy-800/70 hover:border-cyan-500/30 transition-colors min-h-[44px]">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="leading-tight lg:text-center">Treinamento incluso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
