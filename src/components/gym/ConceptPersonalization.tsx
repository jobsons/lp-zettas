"use client";

import { CalendarDays, Clock3, MessageCircle, Megaphone, Users, Check } from "lucide-react";
import { Reveal, type IllustrationProps } from "./ConceptMotion";

const settings = [
  { Icon: MessageCircle, title: "Linguagem", detail: "O jeito da sua academia conversar" },
  { Icon: Clock3, title: "Horários", detail: "Expediente e encaminhamentos definidos" },
  { Icon: CalendarDays, title: "Modalidades", detail: "Planos e informações da sua operação" },
  { Icon: Megaphone, title: "Campanhas", detail: "Condições consultadas antes de responder" },
];

export default function ConceptPersonalization({ progress, still }: IllustrationProps) {
  return <div className="zc-profile-art">
    <div className="zc-paper-back" />
    <div className="zc-profile-sheet">
      <span className="zc-profile-symbol"><Users size={27} aria-hidden="true" /></span>
      <h3>Sua academia</h3><p>Uma operação com a sua identidade.</p>
      <div className="zc-profile-settings">
        {settings.map(({Icon, title, detail}, i) => <Reveal key={title} progress={progress} still={still} at={0.1 + i * 0.15} className="zc-profile-setting">
          <Icon size={19} aria-hidden="true" /><div><strong>{title}</strong><span>{detail}</span></div><Check size={14} aria-hidden="true" />
        </Reveal>)}
      </div>
    </div>
    <Reveal progress={progress} still={still} at={0.7} className="zc-art-stamp"><Check size={22} aria-hidden="true" /><span>Sua equipe no controle</span></Reveal>
  </div>;
}
