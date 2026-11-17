import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Comercial para academias",
  description: "Atendimento no WhatsApp, acompanhamento de interessados e relatórios semanais para o comercial da sua academia.",
  alternates: { canonical: "https://zettas.ia.br/links" },
  openGraph: { url: "https://zettas.ia.br/links", title: "Comercial para academias | Zettas", description: "Atendimento, retornos e acompanhamento semanal para sua academia." },
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return children;
}
