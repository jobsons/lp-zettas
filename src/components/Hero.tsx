"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, TrendingUp, Rocket, Headset, Award, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-medium text-sm mb-8"
        >
          <Bot className="w-4 h-4" />
          <span>O futuro do atendimento chegou!</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 max-w-4xl mx-auto mb-6"
        >
          Sua operação no <span className="text-emerald-500">piloto automático</span> com IA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-graphite-800 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Escale seu atendimento, recupere vendas e qualifique leads 24 horas por dia com soluções profissionais de automação para o seu WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#captura" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg h-14 px-8 shadow-lg shadow-emerald-500/25">
              Agende uma demonstração
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/70 backdrop-blur rounded-xl p-4 border border-gray-200/80 shadow-sm text-sm font-medium text-graphite-800">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500" />
              <span>Respostas Imediatas</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <span>Aumento de ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-500" />
              <span>Atendimento instantâneo 24h por dia</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-emerald-500" />
              <span>Implementação rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Headset className="w-5 h-5 text-emerald-500" />
              <span>Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>Resultados no primeiro mês</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span>Treinamento incluso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
