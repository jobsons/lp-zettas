"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LeadCapture() {
  return (
    <section id="captura" className="py-16 md:py-24 bg-transparent relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-navy-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-16 text-center text-white shadow-lg relative overflow-hidden border border-navy-700"
        >
          <div className="relative z-10">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-white gradient-brand rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-900/30"
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
