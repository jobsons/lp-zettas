"use client";

import Image from "next/image";
import { Check, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, type IllustrationProps } from "./ConceptMotion";
import { useIllustrationLoop } from "./useIllustrationLoop";

export default function ConceptInfrastructure({ progress, still }: IllustrationProps) {
  const loop = useIllustrationLoop(still, 3, 3600, progress, .45);
  const messages = ["Campanha de aula experimental", "Aviso para alunos", "Lembrete de mensalidade"];
  return <div className="zc-infrastructure-art" ref={loop.ref}>
    <Reveal progress={progress} at={.12} still={still} className="zc-meta-platform">
      <Image src="/meta-logo.png" width={180} height={60} alt="Meta" />
      <span>WhatsApp Business Platform</span>
    </Reveal>
    <svg viewBox="0 0 400 100" className="zc-meta-route" aria-hidden="true">
      <path d="M200 0 V30 Q200 50 180 50 H70 Q50 50 50 70 V100 M200 30 V100 M200 50 H330 Q350 50 350 70 V100" />
      <motion.circle cx="200" cy="20" r="4" animate={loop.active ? { cy: [20, 95], opacity: [0, 1, 0] } : { cy: 50, opacity: 1 }} transition={{ duration: 1.8, repeat: loop.active ? Infinity : 0 }} />
    </svg>
    <Reveal progress={progress} at={.3} still={still} className="zc-meta-audience">
      <span><Users size={22} />Interessados</span><span><MessageCircle size={22} />Alunos</span><span><ShieldCheck size={22} />Sua equipe</span>
    </Reveal>
    <Reveal progress={progress} at={.45} still={still} className="zc-meta-campaign">
      <span>Envios pela plataforma oficial</span>
      <motion.strong key={loop.index} initial={still ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .35 }}>{messages[loop.index]}</motion.strong>
      <p><Check size={14} />Público definido e consentimento</p>
      <p><Check size={14} />Modelos aprovados e limites de envio</p>
    </Reveal>
  </div>;
}
