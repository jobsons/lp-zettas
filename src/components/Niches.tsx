"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Stethoscope, Building2, Dumbbell, Music, CheckCircle2, ArrowLeft, MoreVertical, Phone, Video, Smile, Mic, CheckCheck, Paperclip } from "lucide-react";
import Link from "next/link";

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
            Soluções sob medida para o seu negócio
          </h2>
          <p className="text-lg text-graphite-800">
            Esqueça os chatbots engessados que irritam seus clientes. Criamos Agentes de IA únicos, treinados especificamente com as regras, tom de voz e conhecimento da sua empresa. Veja alguns casos de uso abaixo:
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

                      {/* Chat Mockup - WhatsApp Style */}
                      <div className="mt-8 md:mt-auto bg-[#efeae2] rounded-3xl overflow-hidden shadow-xl border border-gray-200/50 flex flex-col relative w-full max-w-sm mx-auto md:max-w-md h-[400px] md:h-auto md:min-h-[350px]">
                        {/* Header WhatsApp */}
                        <div className="bg-[#008069] px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-2 md:gap-3 text-white z-10 shrink-0">
                          <ArrowLeft className="w-5 h-5 opacity-90 hidden sm:block" />
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <activeNiche.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-[14px] md:text-[15px] truncate">{activeNiche.title}</div>
                            <div className="text-[11px] md:text-[12px] opacity-90 leading-tight">online</div>
                          </div>
                          <div className="flex items-center gap-3 md:gap-4 opacity-90 shrink-0">
                            <Video className="w-4 h-4 md:w-5 md:h-5 hidden sm:block" />
                            <Phone className="w-4 h-4" />
                            <MoreVertical className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                        </div>

                        {/* Messages Area */}
                        <div className="p-3 md:p-4 space-y-3 flex-1 overflow-y-auto">
                          {activeNiche.chatMockup.map((msg, idx) => {
                            const isUser = msg.sender === "user";
                            return (
                              <motion.div
                                key={`${activeNiche.id}-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                className={cn("flex", isUser ? "justify-end" : "justify-start")}
                              >
                                <div
                                  className={cn(
                                    "max-w-[90%] md:max-w-[85%] px-3 pt-2 pb-1.5 text-[14px] md:text-[15px] shadow-sm relative",
                                    isUser
                                      ? "bg-[#d9fdd3] text-gray-800 rounded-lg rounded-tr-none"
                                      : "bg-white text-gray-800 rounded-lg rounded-tl-none"
                                  )}
                                >
                                  <div className="leading-snug pr-2">{msg.text}</div>
                                  <div className="flex items-center justify-end gap-1 mt-0.5">
                                    <span className="text-[10px] text-gray-500">14:30</span>
                                    {isUser && <CheckCheck className="w-3 h-3 md:w-4 md:h-4 text-[#53bdeb]" />}
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Input Area WhatsApp */}
                        <div className="bg-[#f0f2f5] px-2 md:px-3 py-2 md:py-2.5 flex items-center gap-1.5 md:gap-2 z-10 shrink-0">
                          <Smile className="w-5 h-5 md:w-6 md:h-6 text-gray-500 shrink-0 hidden sm:block" />
                          <Paperclip className="w-5 h-5 text-gray-500 shrink-0 mx-1 hidden sm:block" />
                          <div className="flex-1 bg-white rounded-full px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[15px] text-gray-400 shadow-sm truncate">
                            Mensagem
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00a884] flex items-center justify-center shrink-0 shadow-sm">
                            <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
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
                  <div>Seu setor não está na lista? A Zettas desenvolve arquiteturas exclusivas para qualquer mercado.</div>
                  <div className="mt-3 flex items-center justify-center">
                    <Link
                      href="#captura"
                      className="inline-flex items-center justify-center rounded-lg border border-emerald-300 bg-white px-3 py-1.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors"
                    >
                      Falar com um Especialista
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
