"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  return (
    <section id="captura" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 to-graphite-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
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
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Teste nossa demonstração interativa agora mesmo. Preencha alguns dados básicos do seu negócio e agende uma conversa com nossos especialistas.
            </p>

            <Link href="https://app.yayforms.com/workspaces/69c2f0638b5cbfe4d507090b/forms" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg h-16 px-10 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-300">
                Teste a demonstração
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
