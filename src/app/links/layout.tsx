import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Links e contato",
  description: "Fale com a Zettas pelo WhatsApp, preencha o formulário ou conheça nossas soluções de automação para academias.",
  alternates: { canonical: "https://zettas.ia.br/links" },
  openGraph: { url: "https://zettas.ia.br/links", title: "Links e contato | Zettas", description: "WhatsApp, formulário e soluções da Zettas." },
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return children;
}
