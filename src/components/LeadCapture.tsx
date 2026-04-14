"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";

export default function LeadCapture() {
  return (
    <section id="captura" className="py-16 md:py-24 bg-transparent relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-navy-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-16 text-center text-white shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden border border-cyan-500/20"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
              <Bot className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-lg text-graphite-300 mb-10 max-w-2xl mx-auto relative z-10">
              Preencha o formulário abaixo para agendar um diagnóstico gratuito da sua operação e descobrir como nossos Agentes de IA podem escalar suas vendas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://zettas.yayforms.link/lm8yBmR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white gradient-brand rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
