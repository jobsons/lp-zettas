"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, type MotionValue } from "framer-motion";
import { ArrowDown, ArrowRight, Check, MessageCircle, Pause, Play, CalendarDays, FileText } from "lucide-react";
import ContactLink, { trackGymEvent } from "./ContactLink";
import FormLink from "./FormLink";
import { Reveal } from "./ConceptMotion";
import ConceptCalendar from "./ConceptCalendar";
import { WeeklyReport, MonthlyReport } from "./ConceptReports";
import ConceptPersonalization from "./ConceptPersonalization";
import ConceptImplementation from "./ConceptImplementation";
import ConceptInfrastructure from "./ConceptInfrastructure";

function subscribeCompact(callback: () => void) {
  const query = window.matchMedia("(max-width: 900px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getCompactSnapshot = () => window.matchMedia("(max-width: 900px)").matches;
const getServerSnapshot = () => false;

function Conversation({ progress, still }: { progress: MotionValue<number>; still: boolean }) {
  return <div className="zc-chat-art">
    <div className="zc-phone">
      <div className="zc-phone-speaker" aria-hidden="true" />
      <div className="zc-chat-header"><span className="zc-avatar"><MessageCircle size={24} /></span><div><strong>Sua academia</strong><span>Atendimento personalizado</span></div></div>
      <div className="zc-chat-body">
        <div className="zc-bubble">Olá! Já sou aluno. Quero saber sobre a campanha.<small>09:41</small></div>
        <Reveal progress={progress} at={.19} still={still}><div className="zc-bubble zc-outgoing">Claro! Vou consultar as condições para alunos.<small>09:41 <Check size={13} /></small></div></Reveal>
        <Reveal progress={progress} at={.4} still={still}><div className="zc-bubble zc-outgoing">Vou encaminhar sua conversa à equipe, com o contexto do pedido.<small>09:42 <Check size={13} /></small></div></Reveal>
      </div>
      <div className="zc-phone-input" aria-hidden="true"><span>Mensagem</span><ArrowRight size={18} /></div>
    </div>
    <Reveal progress={progress} at={.57} still={still} className="zc-context-note"><span className="zc-human-avatar">EA</span><div><strong>Equipe da academia</strong><span>Aluno · Interesse na campanha</span><span className="zc-note-status"><Check size={12} />Contexto recebido</span></div></Reveal>
  </div>;
}

const scenes = [
  { id: "atendimento", label: "Atendimento com IA no WhatsApp", title: <>Cada conversa tem<br />uma história.</>, description: "Aluno ou interessado? A inteligência artificial identifica o contexto, responde conforme as regras da academia e encaminha à sua equipe quando necessário.", foot: "Sua linguagem. Suas regras. Sua equipe no controle.", art: Conversation },
  {
    id: "cobranca",
    label: "Cobrança",
    title: <>Cobranças automáticas.<br />Sem mais tarefas para sua equipe.</>,
    description: "Integramos com o sistema da sua academia para enviar cobranças automáticas pelo WhatsApp, com os critérios e horários definidos com você. Sem alimentar novas planilhas ou operar ferramentas extras.",
    foot: "Seu sistema. Seu calendário. Cobranças no WhatsApp.",
    art: ConceptCalendar,
  },
  {
    id: "infraestrutura",
    label: "Infraestrutura oficial",
    title: <>Sua operação precisa<br />de uma base confiável.</>,
    description: "Bloqueios e interrupções podem comprometer o atendimento da academia. A Zettas é Service Provider Meta e trabalha com a plataforma oficial do WhatsApp para atendimento, cobranças e campanhas em escala.",
    foot: "Envios com consentimento, modelos aprovados e limites da plataforma. A infraestrutura oficial não elimina a possibilidade de restrições por descumprimento das políticas.",
    art: ConceptInfrastructure,
  },
  {
    id: "gestao",
    label: "Relatório semanal",
    title: <>A semana nas conversas.</>,
    description: "Você recebe um relatório semanal do atendimento no WhatsApp. Entenda o que aconteceu nas conversas e o que merece acompanhamento.",
    foot: "Interessados, cancelamentos e atendimento. Com prioridades e próximos passos sugeridos.",
    art: WeeklyReport,
  },
  {
    id: "gestao-mensal",
    label: "Relatório mensal",
    title: <>O mês nos números.</>,
    description: "Você também recebe um relatório mensal com os dados do sistema da academia. Uma visão organizada das vendas e da base de alunos para acompanhar a operação.",
    foot: "Vendas, recorrências, renovações e cancelamentos. Informações para definir os próximos passos.",
    art: MonthlyReport,
  },
  {
    id: "personalizacao",
    label: "Personalização",
    title: <>Sua academia tem<br />um jeito próprio.<br />O atendimento também.</>,
    description: "Linguagem, horários, modalidades e campanhas configurados para a sua rotina. Com encaminhamento humano nos momentos definidos com você.",
    foot: "A tecnologia se adapta. Sua equipe continua participando.",
    art: ConceptPersonalization,
  },
];

function Scene({ scene, reverse, still }: { scene: typeof scenes[number]; reverse: boolean; still: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const compact = useSyncExternalStore(subscribeCompact, getCompactSnapshot, getServerSnapshot);
  const desktop = useScroll({ target: ref, offset: ["start start", "end end"] });
  const mobile = useScroll({ target: figureRef, offset: ["start 85%", "end 35%"] });
  const progress = compact ? mobile.scrollYProgress : desktop.scrollYProgress;
  const drawOffset = useTransform(progress, [0, 1], [1, 0]);
  const tracked = useRef(false);
  useMotionValueEvent(progress, "change", value => {
    if (value >= 0.1 && !tracked.current) {
      tracked.current = true;
      trackGymEvent("demo_start", `scene_${scene.id}`);
    }
  });
  const Art = scene.art;
  const side = reverse ? 100 : 900;
  const bend = reverse ? 160 : 840;
  const path = `M500 0 V45 Q500 95 ${bend} 95 Q${side} 95 ${side} 155 V645 Q${side} 705 ${bend} 705 H560 Q500 705 500 765 V800`;
  return <section ref={ref} id={scene.id} className={`zc-scene ${reverse ? "zc-reverse" : ""}`}>
    <div className="zc-scene-stage">
    <svg className="zc-connection" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true"><path d={path} className="zc-line-track" /><motion.path d={path} className="zc-line-fill" pathLength={1} strokeDasharray="1" style={{ strokeDashoffset: still ? 0 : drawOffset }} /></svg>
    <div className="zc-scene-copy"><span className="zc-eyebrow">{scene.label}</span><h2>{scene.title}</h2><p>{scene.description}</p><span className="zc-scene-foot">{scene.foot}</span></div>
    <figure ref={figureRef} className="zc-scene-visual"><Art progress={progress} still={still} /></figure>
    </div>
  </section>;
}

export default function ScrollConcept() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const still = reduce === true || paused;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const light = useTransform(scrollYProgress, [0, .5, 1], ["8%", "48%", "90%"]);
  return <div className="zc-concept" ref={ref}>
    <motion.div className="zc-ambient" aria-hidden="true" style={{ backgroundPositionY: still ? "50%" : light }} />
    <a className="zc-skip" href="#atendimento">Ir para a demonstração</a>
    <header className="zc-header"><a href="#inicio" aria-label="Zettas, início" className="zc-brand"><Image src="/Zettas_logo.png" width={56} height={50} alt="" priority /></a><nav aria-label="Navegação principal"><a href="#atendimento">Na prática</a><a href="#personalizacao">Sua academia</a><a href="#implantacao">Implantação</a></nav><ContactLink placement="conceito_header" className="zc-button zc-header-cta" /></header>
    <main>
      <section className="zc-hero" id="inicio">
        <div className="zc-hero-copy">
          <p className="zc-hero-audience">IA para academias. Atendimento com o seu jeito.</p>
          <h1>Sua academia<br />bem atendida.<br />Sua equipe<br />mais presente.</h1>
          <p className="zc-hero-description">Atendimento com IA no WhatsApp, cobranças automáticas e relatórios integrados ao seu sistema. Do primeiro contato à mensalidade do aluno.</p>
          <div className="zc-hero-actions"><ContactLink placement="conceito_hero" className="zc-button" /><a href="#atendimento" className="zc-text-link">Ver na prática <ArrowDown size={18} /></a></div>
          <FormLink placement="hero_form" />
        </div>
        <figure className="zc-reception">
          <div className="zc-reception-message"><span className="zc-reception-avatar"><MessageCircle size={22} /></span><div><span>Uma nova conversa</span><p>“Oi! Como funciona a aula experimental?”</p></div></div>
          <div className="zc-reception-agenda">
            <div className="zc-agenda-binding" aria-hidden="true"><i /><i /><i /></div>
            <div className="zc-agenda-heading"><CalendarDays size={23} /><span>Na rotina da sua academia</span></div>
            <div className="zc-agenda-row"><span className="zc-agenda-symbol"><MessageCircle size={20} /></span><div><strong>O primeiro contato</strong><p>Modalidades, horários e próximos passos.</p></div></div>
            <div className="zc-agenda-row"><span className="zc-agenda-symbol"><Check size={20} /></span><div><strong>A mensalidade do aluno</strong><p>Cobrança enviada pelo WhatsApp.</p></div></div>
            <div className="zc-agenda-row"><span className="zc-agenda-symbol"><FileText size={20} /></span><div><strong>A visão da operação</strong><p>Conversas da semana. Dados do mês.</p></div></div>
            <div className="zc-agenda-signature">Zettas + sua equipe</div>
          </div>
          <div className="zc-reception-handoff"><span className="zc-human-avatar">EA</span><div><strong>Sua equipe participa</strong><span>Com o contexto de cada conversa.</span></div></div>
        </figure>
        <svg className="zc-hero-bridge" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M880 0 V30 Q880 65 845 65 H635 Q600 65 600 100 V120" /></svg>
      </section>
      <div className="zc-story">{scenes.map((scene, index) => <Scene key={scene.id} scene={scene} reverse={index % 2 === 0} still={still} />)}</div>
      <ConceptImplementation still={still} />
      <section className="zc-closing" id="conversa"><span className="zc-eyebrow">Vamos olhar para a sua operação?</span><h2>Sua academia merece<br />um atendimento à altura.</h2><p>Conte como funciona sua rotina.<br />Vamos mostrar como atendimento, cobrança e gestão podem se conectar.</p><ContactLink placement="conceito_final" className="zc-button" /><FormLink placement="closing_form" /><span className="zc-closing-note">Uma conversa sobre sua academia, seus desafios e seus próximos passos.</span></section>
    </main>
    <footer className="zc-footer"><span>Zettas · Tecnologia com gente</span><div><a href="#duvidas">Dúvidas</a><a href="https://www.instagram.com/zettas.ia/" target="_blank" rel="noopener noreferrer">Instagram</a><span>© {new Date().getFullYear()} Zettas</span></div></footer>
    <button className="zc-motion-toggle" onClick={() => setPaused(p => !p)} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}{paused ? "Ativar movimento" : "Pausar movimento"}</button>
  </div>;
}
