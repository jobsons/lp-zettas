import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16.113 11.44a4.5 4.5 0 1 1-3.613-3.613 4.5 4.5 0 0 1 3.613 3.613z" />
      <line x1="16.5" x2="16.5" y1="7.5" y2="7.501" />
    </svg>
  );
}

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
    <div className="fixed z-[60] bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3">
      <a
        href="https://www.instagram.com/zettas.ia/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir Instagram da Zettas"
        className="size-14 sm:size-16 rounded-full bg-[#E1306C] text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-[#c13584] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/40 active:translate-y-px transition"
      >
        <span className="sr-only">Abrir Instagram</span>
        <span className="grid size-full place-items-center">
          <InstagramIcon className="size-7 sm:size-8" aria-hidden="true" />
        </span>
      </a>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="size-14 sm:size-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/40 active:translate-y-px transition"
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <span className="grid size-full place-items-center">
          <MessageCircle className="size-7 sm:size-8" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
