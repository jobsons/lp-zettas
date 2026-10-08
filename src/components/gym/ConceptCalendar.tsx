"use client";

import { ArrowRight, Check, Database, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDay, Reveal, type IllustrationProps } from "./ConceptMotion";
import { useIllustrationLoop } from "./useIllustrationLoop";

const scheduledDays = [5, 12, 19, 26];
const recipients = ["Paulo", "Ana", "Carlos", "Marina", "Lucas", "Juliana", "Rafael", "Camila"];

export default function ConceptCalendar({ progress, still }: IllustrationProps) {
  const loop = useIllustrationLoop(still, recipients.length, 3600, progress, .47);
  const recipient = recipients[loop.index];
  const staticSequence = !loop.active;
  return (
    <div ref={loop.ref} className="zc-billing-art zc-auto-billing">
      <div className="zc-calendar">
        <div className="zc-calendar-rings" aria-hidden="true"><i /><i /></div>
        <div className="zc-calendar-head">
          <span>Cobranças automáticas</span>
          <span>Rotina programada</span>
        </div>
        <div className="zc-calendar-weekdays" aria-hidden="true">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((day, i) => <span key={i}>{day}</span>)}
        </div>
        <div className="zc-calendar-grid" aria-hidden="true">
          {Array.from({ length: 28 }, (_, index) => {
            const day = index + 1;
            const scheduledIndex = scheduledDays.indexOf(day);
            return scheduledIndex >= 0 ? (
              <CalendarDay key={day} progress={progress} still={still} at={0.12 + scheduledIndex * 0.13}>
                {day}
              </CalendarDay>
            ) : <span key={day}>{day}</span>;
          })}
        </div>
        <div className="zc-calendar-foot">
          <Database size={13} aria-hidden="true" />
          Conectado ao seu sistema
        </div>
      </div>
      <Reveal progress={progress} at={0.08} still={still} className="zc-system-note">
        <Database size={18} aria-hidden="true" />
        <span>Seu sistema</span>
        <ArrowRight size={16} aria-hidden="true" />
      </Reveal>
      <Reveal progress={progress} at={0.25} still={still} className="zc-billing-check">
        <Check size={15} aria-hidden="true" />Critérios conferidos
      </Reveal>
      <Reveal progress={progress} at={0.47} still={still || loop.visible} className="zc-billing-message">
        <div className="zc-billing-message-head">
          <MessageCircle size={18} aria-hidden="true" />
          <strong>WhatsApp da academia</strong>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={loop.index} className="zc-send-cycle"
            initial={staticSequence ? false : { opacity: 0 }}
            animate={{ opacity: 1 }} exit={{ opacity: staticSequence ? 1 : 0 }}
            transition={{ duration: staticSequence ? 0 : 0.2 }}>
            <motion.p initial={staticSequence ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }} transition={{ duration: staticSequence ? 0 : 0.35, delay: staticSequence ? 0 : 0.2 }}>
              Olá, {recipient}! Sua mensalidade está disponível para pagamento.
            </motion.p>
            <motion.span className="zc-illustrated-link"
              initial={staticSequence ? false : { opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: staticSequence ? 0 : 0.25, delay: staticSequence ? 0 : 0.65 }}>
              Link de pagamento <ArrowRight size={13} aria-hidden="true" />
            </motion.span>
            <motion.div className="zc-send-progress" aria-hidden="true"
              initial={staticSequence ? false : { scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: staticSequence ? 0 : 1.25, delay: staticSequence ? 0 : 0.55 }} />
            <motion.div className="zc-billing-sent"
              initial={staticSequence ? false : { opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: staticSequence ? 0 : 0.2, delay: staticSequence ? 0 : 1.8 }}>
              <Check size={14} aria-hidden="true" />Cobrança enviada a {recipient}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </div>
  );
}
