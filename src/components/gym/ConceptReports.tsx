"use client";

import { AnimatePresence, motion, useTransform } from "framer-motion";
import { Check, MessageCircle, Users, ListFilter, CalendarDays, RefreshCw } from "lucide-react";
import { CalendarDay, Reveal, type IllustrationProps } from "./ConceptMotion";
import { useIllustrationLoop } from "./useIllustrationLoop";

const weeklyPages = [
  [["Interessados e próximos passos", "Origem, etapa e prioridades"], ["Cancelamentos e motivos", "Pedidos, pausas e ações registradas"], ["Assuntos e atendimento", "Temas frequentes e respostas"]],
  [["Origem dos interessados", "Site, anúncios e origem não identificada"], ["Etapas comerciais", "Valores apresentados e visitas aceitas"], ["Contatos prioritários", "Retomadas e próximos passos sugeridos"]],
  [["Pedidos de cancelamento", "Motivos registrados nas conversas"], ["Pausas e congelamentos", "Solicitações e ações da equipe"], ["Pontos para acompanhar", "Casos que merecem revisão"]],
  [["Assuntos mais frequentes", "Planos, horários e pagamentos"], ["Tempo de primeira resposta", "Leitura dos registros de atendimento"], ["Campanhas e cobranças", "Mensagens identificadas na semana"]],
];

const monthlyPages = [
  [["Vendas e recorrências", "Período, planos e categorias"], ["Base de alunos", "Ativos, adimplência e inadimplência"], ["Renovações e cancelamentos", "Movimentações e contratos a vencer"]],
  [["Matrículas e rematrículas", "Classificações registradas no sistema"], ["Movimentação por plano", "Itens e valores no período"], ["Produtos e serviços", "Categorias adicionais da academia"]],
  [["Clientes ativos", "Visão da base no fechamento do mês"], ["Adimplência e inadimplência", "Situação registrada no sistema"], ["Contratos a vencer", "Pontos para acompanhar nas renovações"]],
  [["Movimento diário", "Distribuição dos registros no mês"], ["Vendas por responsável", "Atribuições registradas no sistema"], ["Comparativos e metas", "Indicadores disponíveis para análise"]],
];

function ReportItems({ pages, index, still, progress, visible }: IllustrationProps & {
  pages: string[][][]; index: number; visible: boolean;
}) {
  const icons = [Users, RefreshCw, ListFilter];
  return <div className="zc-loop-report-items">
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={index} className="zc-report-items"
        initial={still ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: still ? 1 : 0, y: still ? 0 : -6 }}
        transition={{ duration: still ? 0 : 0.25 }}>
        {pages[index].map(([title, description], i) => {
          const Icon = icons[i];
          return <Reveal key={title} progress={progress} at={0.32 + i * 0.13} still={still || visible} className="zc-report-item">
            <Icon size={19} aria-hidden="true" /><div><strong>{title}</strong><span>{description}</span></div>
          </Reveal>;
        })}
      </motion.div>
    </AnimatePresence>
    <div className="zc-loop-pages" aria-hidden="true">{pages.map((_, i) => <i key={i} className={i === index ? "is-current" : ""} />)}</div>
  </div>;
}

export function WeeklyReport({ progress, still }: IllustrationProps) {
  const loop = useIllustrationLoop(still, weeklyPages.length, 5200, progress);
  return (
    <div ref={loop.ref} className="zc-report-art zc-weekly-art">
      <div className="zc-paper-back" />
      <div className="zc-report zc-weekly-report">
        <div className="zc-report-head">
          <span className="zc-mini-mark" />
          <span>Relatório semanal</span>
          <MessageCircle size={18} aria-hidden="true" />
        </div>
        <div className="zc-report-period">O que aconteceu no WhatsApp</div>
        <div className="zc-week-strip" aria-hidden="true">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((day, i) => (
            <CalendarDay key={i} progress={progress} still={still} at={0.03 + i * 0.035}>{day}</CalendarDay>
          ))}
        </div>
        <div className="zc-week-conversations" aria-hidden="true">
          {[0.15, 0.23, 0.31].map((at) => <Reveal key={at} progress={progress} at={at} still={still}><MessageCircle size={24} /><span /><span /></Reveal>)}
        </div>
        <svg className="zc-week-connections" viewBox="0 0 300 38" aria-hidden="true">
          <path d="M45 0 V10 Q45 20 55 20 H145 M255 0 V10 Q255 20 245 20 H155 M150 0 V38" />
          <circle cx="150" cy="32" r="3" />
        </svg>
        <ReportItems pages={weeklyPages} index={loop.index} visible={loop.visible} progress={progress} still={still} />
      </div>
      <Reveal progress={progress} at={0.72} still={still} className="zc-art-stamp">
        <Check size={22} aria-hidden="true" /><span>Pontos para acompanhar</span>
      </Reveal>
    </div>
  );
}

function CategoryBar({ progress, still, at, width }: IllustrationProps & { at: number; width: string }) {
  const scaleX = useTransform(progress, [at, at + 0.2], [0.05, 1]);
  return <motion.i style={{ width, scaleX: still ? 1 : scaleX }} />;
}

export function MonthlyReport({ progress, still }: IllustrationProps) {
  const loop = useIllustrationLoop(still, monthlyPages.length, 5200, progress);
  return (
    <div ref={loop.ref} className="zc-report-art zc-monthly-art">
      <div className="zc-paper-back" />
      <div className="zc-report zc-monthly-report">
        <div className="zc-report-head">
          <span className="zc-mini-mark" /><span>Relatório mensal</span><CalendarDays size={18} aria-hidden="true" />
        </div>
        <div className="zc-report-period">Dados do sistema da sua academia</div>
        <div className="zc-month-grid" aria-hidden="true">
          {Array.from({ length: 28 }, (_, i) => <CalendarDay key={i} progress={progress} still={still} at={0.01 + Math.floor(i / 7) * 0.04}>{i + 1}</CalendarDay>)}
        </div>
        <div className="zc-category-chart">
          <span>Vendas por categoria</span>
          <div><span>Planos</span><CategoryBar progress={progress} still={still} at={0.22} width="84%" /></div>
          <div><span>Serviços</span><CategoryBar progress={progress} still={still} at={0.3} width="48%" /></div>
          <div><span>Produtos</span><CategoryBar progress={progress} still={still} at={0.38} width="28%" /></div>
        </div>
        <ReportItems pages={monthlyPages} index={loop.index} visible={loop.visible} progress={progress} still={still} />
      </div>
      <Reveal progress={progress} at={0.78} still={still} className="zc-art-stamp zc-two-reports">
        <Check size={22} aria-hidden="true" /><div><strong>Semana + mês</strong><span>Conversas e sistema, organizados</span></div>
      </Reveal>
    </div>
  );
}
