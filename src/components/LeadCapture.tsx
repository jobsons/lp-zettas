"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";

export default function LeadCapture() {
  return (
    <section id="captura" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 to-graphite-900 rounded-3xl p-6 sm:p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Bot className="w-8 h-8 text-emerald-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para colocar sua operação no piloto automático?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Solicite uma demonstração exclusiva. Preencha o formulário para que possamos entender seu cenário e, na nossa reunião, apresentaremos o desenho da solução ideal para a sua empresa escalar.
            </p>

            <a
              href="https://zettas.yayforms.link/lm8yBmR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base sm:text-lg h-14 sm:h-16 px-6 sm:px-10 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-300"
            >
              <span className="sm:hidden">Falar com Especialista</span>
              <span className="hidden sm:inline">Quero meu Diagnóstico Gratuito</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
