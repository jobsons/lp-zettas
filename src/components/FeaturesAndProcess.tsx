"use client";

import { motion } from "framer-motion";
import { Server, Database, MessageSquare, ShieldCheck, Workflow, Rocket, LineChart } from "lucide-react";

const techStack = [
  {
    title: "Orquestração Inteligente",
    description: "Automação de processos complexos sem falhas, garantindo fluxos contínuos e eficientes.",
    icon: Workflow,
  },
  {
    title: "Arquitetura Escalável",
    description: "Armazenamento seguro, rápido e escalável preparado para o alto volume de dados da sua empresa.",
    icon: Database,
  },
  {
    title: "WhatsApp API Oficial",
    description: "Integração segura, sem risco de banimentos, com suporte a alta volumetria.",
    icon: MessageSquare,
  },
  {
    title: "Infraestrutura Enterprise",
    description: "Servidores dedicados e monitoramento 24/7. Soluções feitas para não quebrar.",
    icon: Server,
  },
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Mapeamos seus gargalos de atendimento e identificamos as melhores oportunidades de automação com IA.",
    icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Desenvolvimento",
    description: "Criamos fluxos personalizados, integramos os sistemas e treinamos a inteligência artificial com seus dados.",
    icon: Rocket,
  },
  {
    step: "03",
    title: "Escala",
    description: "Lançamento da automação com monitoramento contínuo, ajustes de performance e aumento real no ROI.",
    icon: LineChart,
  },
];

export default function FeaturesAndProcess() {
  return (
    <>
      {/* Diferenciais Técnicos */}
      <section id="diferenciais" className="py-16 md:py-24 bg-transparent scroll-mt-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologia Robusta que não te deixa na mão
            </h2>
            <p className="text-lg text-graphite-300">
              Esqueça ferramentas amadoras. Construímos arquiteturas de nível enterprise para que sua operação possa escalar sem limites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-navy-800 hover:border-cyan-500/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-navy-800 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{tech.title}</h3>
                  <p className="text-graphite-400 text-sm leading-relaxed relative z-10">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-16 md:py-24 bg-navy-950/50 backdrop-blur-sm text-white relative overflow-hidden scroll-mt-24 border-y border-navy-800">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como transformamos seu negócio
            </h2>
            <p className="text-lg text-graphite-300">
              Nosso processo validado garante implementações rápidas e resultados mensuráveis desde o primeiro dia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {index !== methodology.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  )}
                  <div className="w-24 h-24 bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                    <Icon className="w-10 h-10 text-cyan-400" />
                    <div className="absolute -top-2 -right-2 bg-cyan-500 text-navy-900 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-graphite-300 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
