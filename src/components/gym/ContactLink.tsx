"use client";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
export function trackGymEvent(
  event: "whatsapp_click" | "demo_start" | "form_open" | "generate_lead",
  placement: string,
) {
  const analytics = window as Window & {
    gtag?: (
      action: string,
      event: string,
      params: Record<string, string>,
    ) => void;
  };
  analytics.gtag?.("event", event, { page_context: "academias", placement });
}
export default function ContactLink({
  placement,
  children = "Quero uma demonstração",
  className = "gym-button",
}: {
  placement: string;
  children?: ReactNode;
  className?: string;
}) {
  const href = buildWhatsAppLink({
    phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5547999035154",
    url: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    message:
      "Olá! Quero conhecer a operação personalizada da Zettas para minha academia.",
  })!;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGymEvent("whatsapp_click", placement)}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
