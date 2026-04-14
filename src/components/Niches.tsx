"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
    image: "bg-navy-950",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-violet-500/5",
    chatMockup: [
      { sender: "user", text: "Oi, preciso de um encaixe para hoje, é possível?", time: "14:30" },
      { sender: "bot", text: "Oi, Luana! Temos um horário às 14:30. Posso confirmar?", time: "14:30" },
      { sender: "user", text: "Que ótimo, pode sim, por favor.", time: "14:31" },
      { sender: "bot", text: "Confirmado! ✅ Seu agendamento já está no sistema, ta bom? Mais alguma dúvida?", time: "14:31" },
      { sender: "user", text: "Não, obrigado!", time: "14:32" }
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
    image: "bg-navy-950",
    color: "text-cyan-400",
    gradient: "from-violet-500/20 to-cyan-500/5",
    chatMockup: [
  { sender: "user", text: "Quero saber mais sobre o pré-lançamento.", time: "09:15" },
  { sender: "bot", text: "Com certeza! Vou gerar o material atualizado para você agora mesmo. Só um instante...", time: "09:15" },
  { sender: "bot", text: "📄 Planta_e_Tabela_Pre-Lancamento.pdf", time: "09:16" },
  { sender: "bot", text: "Além do material, você gostaria de visitar o decorado este fim de semana?", time: "09:16" },
  { sender: "user", text: "Pode ser no sábado de manhã?", time: "09:18" },
  { sender: "bot", text: "Deixa eu conferir a agenda... 🔍", time: "09:18" },
  { sender: "bot", text: "Conseguimos às 10h com o corretor Carlos. Pode ser esse horário?", time: "09:19" },
  { sender: "user", text: "Perfeito, combinado!", time: "09:20" },
  { sender: "bot", text: "Show! Agendado. Te mando um lembrete na sexta, beleza? 🏡", time: "09:20" }
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
    image: "bg-navy-950",
    color: "text-cyan-400",
    gradient: "from-cyan-500/15 to-violet-500/10",
    chatMockup: [
  { sender: "bot", text: "Opa! Notamos que você ainda não apareceu para treinar essa semana. Tudo certo por aí? 🏃‍♂️", time: "18:00" },
  { sender: "user", text: "Vou hoje à noite, prometo! 💪", time: "18:05" },
  { sender: "bot", text: "Boa! Foco total. Só pra lembrar: hoje tem aula de spinning às 19h, hein?", time: "18:05" },
  { sender: "user", text: "Tem vaga ainda?", time: "18:06" },
  { sender: "bot", text: "Deixa eu ver como está o mapa de sala... 🚲", time: "18:06" },
  { sender: "bot", text: "Tem sim! Já deixei a bike 12 reservada no seu nome. Te vejo daqui a pouco!", time: "18:07" }
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
    image: "bg-navy-950",
    color: "text-cyan-400",
    gradient: "from-violet-500/20 to-cyan-500/10",
    chatMockup: [
  { sender: "user", text: "Oi, vou casar dia 13/10, você tem disponibilidade?", time: "20:10" },
  { sender: "bot", text: "Parabéns pelo casamento! 🎉 Que notícia sensacional.", time: "20:10" },
  { sender: "bot", text: "Vou consultar a agenda agora mesmo... Só um segundinho.", time: "20:11" },
  { sender: "bot", text: "Opa, no dia 13/10 ainda temos vaga! O evento seria aqui na região mesmo?", time: "20:12" },
  { sender: "user", text: "Sim, no interior (Luiz Alves).", time: "20:15" },
  { sender: "bot", text: "Entendido! Luiz Alves é pertinho, conseguimos atender tranquilamente.", time: "20:16" },
  { sender: "bot", text: "Para te ajudar no planejamento, já gerei um pré-orçamento detalhado para você. Segue o link: zettas.ia.br/orcamento", time: "20:17" }
]
  }
];

export default function Niches() {
  const [activeId, setActiveId] = useState(niches[0]?.id ?? "saude");
  const [visibleMessages, setVisibleMessages] = useState<number>(1);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const activeNiche = useMemo(
    () => niches.find((niche) => niche.id === activeId) ?? niches[0],
    [activeId]
  );

  useEffect(() => {
    setVisibleMessages(1);
    setIsTyping(false);
  }, [activeId]);

  // Lógica de digitação em tempo real (inicia apenas quando a seção entra em viewport)
  useEffect(() => {
    if (!isSectionInView) return;

    const timeouts: number[] = [];
    let currentIndex = 1;
    const maxMessages = activeNiche.chatMockup.length;

    const setT = (fn: () => void, delayMs: number) => {
      const id = window.setTimeout(fn, delayMs);
      timeouts.push(id);
    };

    const next = () => {
      if (currentIndex >= maxMessages) return;

      const nextMsg = activeNiche.chatMockup[currentIndex];

      if (nextMsg.sender === "bot") {
        setIsTyping(true);
        setT(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => prev + 1);
          currentIndex += 1;
          setT(next, 500);
        }, 1500);
        return;
      }

      setT(() => {
        setVisibleMessages((prev) => prev + 1);
        currentIndex += 1;
        setT(next, 500);
      }, 1000);
    };

    setT(next, 1000);

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
      setIsTyping(false);
    };
  }, [activeNiche, isSectionInView]);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <section ref={sectionRef} id="nichos" className="py-16 md:py-24 bg-navy-950 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluções sob medida para o seu negócio
          </h2>
          <p className="text-lg text-graphite-300">
            Esqueça os chatbots engessados que irritam seus clientes. Criamos Agentes de IA únicos, treinados especificamente com as regras, tom de voz e conhecimento da sua empresa. Veja alguns casos de uso abaixo:
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div
            role="tablist"
            aria-label="Nichos"
            className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-navy-900 rounded-xl mb-8 border border-navy-800"
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
                    "flex flex-col md:flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all text-graphite-400 hover:text-white",
                    isActive && "bg-navy-800 text-cyan-400 shadow-sm border border-cyan-500/30"
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
              <Card className="w-full border-0 shadow-2xl shadow-navy-900/50 overflow-hidden rounded-2xl bg-navy-900 border border-navy-800">
                <div className="grid md:grid-cols-2 gap-0 min-h-[520px]">
                  <div className={`p-8 md:p-12 bg-navy-950 relative overflow-hidden group`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${activeNiche.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 bg-navy-800 rounded-2xl shadow-sm border border-cyan-500/30 text-cyan-400`}>
                          <activeNiche.icon className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-white">{activeNiche.title}</CardTitle>
                      </div>

                      <CardDescription className="text-lg text-graphite-300 font-medium mb-8">
                        {activeNiche.description}
                      </CardDescription>

                      {/* Chat Mockup - WhatsApp Style */}
                      <div className="mt-8 md:mt-auto bg-[#efeae2] rounded-3xl overflow-hidden shadow-xl border border-gray-200/50 flex flex-col relative w-full max-w-sm mx-auto md:max-w-md h-[400px] md:h-[450px]">
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
                        <div 
                          ref={chatContainerRef}
                          className="p-3 md:p-4 space-y-3 flex-1 overflow-y-auto scroll-smooth pb-16"
                        >
                          <AnimatePresence initial={false}>
                            {activeNiche.chatMockup.slice(0, visibleMessages).map((msg, idx) => {
                              const isUser = msg.sender === "user";
                              return (
                                <motion.div
                                  key={`${activeNiche.id}-${idx}`}
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{ duration: 0.2 }}
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
                                      <span className="text-[10px] text-gray-500">{msg.time}</span>
                                      {isUser && <CheckCheck className="w-3 h-3 md:w-4 md:h-4 text-[#53bdeb]" />}
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                            
                            {isTyping && (
                              <motion.div
                                key="typing-indicator"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                className="flex justify-start"
                              >
                                <div className="bg-white text-gray-800 rounded-lg rounded-tl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                                  <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                  />
                                  <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                  />
                                  <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
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

                  <div className="p-8 md:p-12 bg-navy-900 flex flex-col justify-center border-t md:border-t-0 md:border-l border-navy-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Como automatizamos:</h3>
                    <ul className="space-y-4 relative z-10">
                      {activeNiche.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                          <span className="text-graphite-200">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              <div className="mt-6">
                <div className="text-center mx-auto max-w-4xl bg-navy-800/80 backdrop-blur-sm border border-violet-500/30 text-graphite-200 rounded-xl p-4 md:p-5 font-medium shadow-[0_0_15px_rgba(139,92,246,0.1)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/10 pointer-events-none"></div>
                  <div className="relative z-10">Seu setor não está na lista? A Zettas desenvolve arquiteturas exclusivas para qualquer mercado.</div>
                  <div className="mt-3 flex items-center justify-center relative z-10">
                    <Link
                      href="#captura"
                      className="inline-flex items-center justify-center rounded-lg gradient-brand hover:opacity-90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all"
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
