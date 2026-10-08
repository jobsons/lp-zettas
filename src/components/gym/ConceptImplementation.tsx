"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { title: "Entendemos a rotina", text: "Conhecemos seu atendimento, suas regras e o sistema que a academia já usa." },
  { title: "Configuramos juntos", text: "Definimos linguagem, cobrança, relatórios e momentos de chamar sua equipe." },
  { title: "Testamos os cenários", text: "Conferimos as respostas e os fluxos com dados de teste, antes de colocar em operação." },
  { title: "Acompanhamos de perto", text: "Observamos a operação e ajustamos os pontos combinados com você." },
];

const questions = [
  ["Como funciona a IA para academias da Zettas?", "Configuramos o atendimento no WhatsApp com as informações da sua academia: planos, modalidades, horários, campanhas e regras. A IA responde às dúvidas de alunos e interessados e encaminha à equipe os assuntos que precisam de atendimento humano. Cobranças e relatórios são definidos conforme as integrações disponíveis."],
  ["Preciso trocar o sistema da academia?", "A proposta é integrar à operação que você já tem. No diagnóstico, avaliamos a compatibilidade do seu sistema e os dados disponíveis para definir o que pode ser automatizado."],
  ["Minha equipe continua participando do atendimento?", "Sim. Definimos os assuntos e situações que precisam de atendimento humano. Sua equipe recebe o contexto da conversa para continuar o atendimento."],
  ["Como funcionam as cobranças automáticas?", "Configuramos os critérios, horários e mensagens com você. A operação consulta os dados disponíveis no sistema, seleciona as mensalidades elegíveis e envia a mensagem com o link de pagamento pelo WhatsApp."],
  ["O que recebo nos relatórios?", "Um relatório semanal analisa as conversas do WhatsApp: interessados, atendimento e pontos para acompanhar. O relatório mensal reúne os dados disponíveis no sistema, como vendas, base de alunos, renovações e cancelamentos."],
  ["O atendimento pode seguir as regras da minha academia?", "Sim. Linguagem, horários, modalidades, campanhas e encaminhamentos são definidos para a sua rotina. Essas informações são conferidas nos testes e revisadas quando você comunica mudanças."],
  ["Como são definidos prazo e investimento?", "Depois de entender sua operação, apresentamos o escopo, as integrações e as etapas de implantação. Prazo e investimento dependem do que será configurado para a academia."],
];

export default function ConceptImplementation({ still }: { still: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  // Finish the incoming connection before the steps enter their own interval.
  const entry = useScroll({ target: ref, offset: ["start 85%", "start 55%"] });
  const timeline = useScroll({ target: stepsRef, offset: ["start 80%", "start 55%"] });
  const entryOffset = useTransform(entry.scrollYProgress, [0, 1], [1, 0]);
  const timelineOffset = useTransform(timeline.scrollYProgress, [0, 1], [1, 0]);
  return <>
    <section ref={ref} className="zc-implementation" id="implantacao">
      <svg className="zc-implementation-entry" viewBox="0 0 1200 110" preserveAspectRatio="none" aria-hidden="true"><path d="M600 0 V30 Q600 75 555 75 H68 Q24 75 24 110" className="zc-line-track" /><motion.path d="M600 0 V30 Q600 75 555 75 H68 Q24 75 24 110" className="zc-line-fill" pathLength={1} strokeDasharray="1" style={{ strokeDashoffset: still ? 0 : entryOffset }} /></svg>
      <span className="zc-eyebrow">Implantação</span>
      <h2>Começa com a sua rotina.<br />Evolui junto com você.</h2>
      <p className="zc-section-intro">Do primeiro diagnóstico ao acompanhamento da operação,<br />cada etapa é construída com a sua equipe.</p>
      <div ref={stepsRef} className="zc-steps">
        <svg viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true"><path d="M0 1 H1000" className="zc-line-track" /><motion.path d="M0 1 H1000" className="zc-line-fill" pathLength={1} strokeDasharray="1" style={{ strokeDashoffset: still ? 0 : timelineOffset }} /></svg>
        {steps.map((step, i) => <article key={step.title}><span className="zc-step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
      </div>
      <span className="zc-implementation-note"><Check size={15} aria-hidden="true" />Escopo e integrações avaliados antes de começar.</span>
    </section>
    <section className="zc-faq" id="duvidas" aria-labelledby="zc-faq-title">
      <div><span className="zc-eyebrow">Antes da nossa conversa</span><h2 id="zc-faq-title">Dúvidas que<br />valem esclarecer.</h2><p>Uma operação personalizada começa com expectativas claras.</p></div>
      <div className="zc-faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
