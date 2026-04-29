import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsAppButton() {
  const fallbackPhone = "5547999035154";
  const defaultMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Quero falar com um especialista da Zettas.";
  const href =
    buildWhatsAppLink({
      url: process.env.NEXT_PUBLIC_WHATSAPP_URL,
      phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? fallbackPhone,
      message: defaultMessage,
    }) ?? `https://wa.me/${fallbackPhone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed z-[60] bottom-4 right-4 sm:bottom-6 sm:right-6 size-14 sm:size-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/40 active:translate-y-px transition"
    >
      <span className="sr-only">Falar no WhatsApp</span>
      <span className="grid size-full place-items-center">
        <MessageCircle className="size-7 sm:size-8" aria-hidden="true" />
      </span>
    </a>
  );
}
