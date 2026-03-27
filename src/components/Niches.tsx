"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Stethoscope, Building2, Dumbbell, Music, CheckCircle2, MessageSquare } from "lucide-react";

const niches = [
  {
    id: "saude",
    title: "Saúde & Farmácias",
    icon: Stethoscope,
    description: "Gestão de pedidos e atendimento 24h sem falhas.",
    benefits: [
      "Agendamento de consultas automatizado",
      "Triagem de sintomas básica e encaminhamento",
      "Lembretes de medicação e retorno",
      "Gestão de receituários e pedidos de delivery"
    ],
    image: "bg-emerald-50",
    color: "text-emerald-600",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    chatMockup: [
      { sender: "user", text: "Preciso de um encaixe para hoje!" },
      { sender: "bot", text: "Olá! Temos um horário às 14:30. Posso confirmar?" }
    ]
  },
 {
    id: "imobiliario",
    title: "Imobiliário & Construtoras",
    icon: Building2,
    description: "Venda mais lançamentos com qualificação instantânea e agendamento de visitas.",
    benefits: [
      "Qualificação automática de perfil (Renda/Prazo)",
      "Agendamento de visitas ao decorado integrado ao CRM",
      "Envio imediato de tabelas, plantas e materiais de venda",
      "Follow-up ativo de leads vindos de anúncios (Meta/Google)"
    ],
    image: "bg-blue-50",
    color: "text-blue-600",
    gradient: "from-blue-500/20 to-blue-500/5",
    chatMockup: [
      { sender: "user", text: "Quero saber mais sobre o pré-lançamento." },
      { sender: "bot", text: "Com certeza! Já enviei a planta e a tabela. Quer agendar uma visita ao decorado?" }
    ]
  },
  {
    id: "academias",
    title: "Academias & Bem-estar",
    icon: Dumbbell,
    description: "Recuperação de alunos e suporte escalável.",
    benefits: [
      "Cobrança e lembretes de mensalidade automáticos",
      "Mensagens de reengajamento para alunos inativos",
      "Agendamento de aulas experimentais",
      "Dúvidas frequentes sobre planos e horários"
    ],
    image: "bg-orange-50",
    color: "text-orange-600",
    gradient: "from-orange-500/20 to-orange-500/5",
    chatMockup: [
      { sender: "bot", text: "Sentimos sua falta nos treinos desta semana!" },
      { sender: "user", text: "Vou hoje à noite, prometo! 💪" }
    ]
  },
  {
    id: "eventos",
    title: "Eventos & DJs",
    icon: Music,
    description: "Atendimento automático para orçamentos.",
    benefits: [
      "Orçamentos dinâmicos em tempo real",
      "Demonstração de portfólio (áudios e vídeos)",
      "Verificação de disponibilidade de agenda",
      "Fechamento de contratos sem intervenção humana"
    ],
    image: "bg-purple-50",
    color: "text-purple-600",
    gradient: "from-purple-500/20 to-purple-500/5",
    chatMockup: [
      { sender: "user", text: "Oi Dj, vou casar dia 13/10, você tem disponibilidade?" },
      { sender: "bot", text: "Parabéns pelo casamento! Deixa eu conferir... Sim, temos disponibilidade para 13/10!..." }
    ]
  }
];

export default function Niches() {
  const [activeId, setActiveId] = useState(niches[0]?.id ?? "saude");
  const activeNiche = useMemo(
    () => niches.find((niche) => niche.id === activeId) ?? niches[0],
    [activeId]
  );

  return (
    <section id="nichos" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Soluções sob medida para o seu setor
          </h2>
          <p className="text-lg text-graphite-800">
            Nossa infraestrutura Enterprise pode ser treinada para qualquer modelo de negócio. Veja alguns casos de uso abaixo:
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div
            role="tablist"
            aria-label="Nichos"
            className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100/80 rounded-xl mb-8"
          >
            {niches.map((niche) => {
              const Icon = niche.icon;
              const isActive = niche.id === activeId;
              return (
                <button
                  key={niche.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(niche.id)}
                  className={cn(
                    "flex flex-col md:flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all text-foreground/70 hover:text-foreground",
                    isActive && "bg-white text-emerald-600 shadow-sm"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">{niche.title}</span>
                </button>
              );
            })}
          </div>

          {activeNiche ? (
            <motion.div
              key={activeNiche.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              role="tabpanel"
              className="w-full"
            >
              <Card className="w-full border-0 shadow-xl shadow-gray-200/50 overflow-hidden rounded-2xl bg-white">
                <div className="grid md:grid-cols-2 gap-0 min-h-[520px]">
                  <div className={`p-8 md:p-12 ${activeNiche.image} relative overflow-hidden group`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${activeNiche.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 bg-white rounded-2xl shadow-sm ${activeNiche.color}`}>
                          <activeNiche.icon className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-navy-900">{activeNiche.title}</CardTitle>
                      </div>

                      <CardDescription className="text-lg text-graphite-800 font-medium mb-8">
                        {activeNiche.description}
                      </CardDescription>

                      <div className="mt-auto bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/40">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50">
                          <MessageSquare className="w-4 h-4 text-graphite-800" />
                          <span className="text-xs font-semibold text-graphite-800 uppercase tracking-wider">
                            Demonstração ao vivo
                          </span>
                        </div>
                        <div className="space-y-3">
                          {activeNiche.chatMockup.map((msg, idx) => (
                            <motion.div
                              key={`${activeNiche.id}-${idx}`}
                              initial={{ opacity: 0, x: msg.sender === "user" ? 10 : -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.12 }}
                              className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}
                            >
                              <div
                                className={cn(
                                  "max-w-[85%] rounded-2xl px-4 py-2 text-sm",
                                  msg.sender === "user"
                                    ? "bg-emerald-500 text-white rounded-tr-sm"
                                    : "bg-white text-graphite-800 rounded-tl-sm shadow-sm"
                                )}
                              >
                                {msg.text}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-navy-900 mb-6">Como automatizamos:</h3>
                    <ul className="space-y-4">
                      {activeNiche.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                          <span className="text-graphite-800">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              <div className="mt-6">
                <div className="text-center mx-auto max-w-4xl bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-4 md:p-5 font-semibold">
                  Seu setor não está na lista? A Zettas desenvolve arquiteturas exclusivas para qualquer mercado.
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
