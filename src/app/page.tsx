import type { Metadata } from "next";
import ScrollConcept from "@/components/gym/ScrollConcept";
import "./conceito/concept.css";

export const metadata: Metadata = {
  title: { absolute: "Automação de WhatsApp para academias | Zettas" },
  description:
    "Automação de WhatsApp para academias: atendimento personalizado, cobranças automáticas e relatórios de gestão integrados ao seu sistema. Conheça a Zettas.",
  alternates: { canonical: "https://zettas.ia.br/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zettas.ia.br/",
    siteName: "Zettas",
    title: "Automação de WhatsApp para academias | Zettas",
    description:
      "Atendimento, cobrança e gestão. Configurados para a rotina da sua academia.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zettas — uma operação personalizada para academias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação de WhatsApp para academias | Zettas",
    description: "Atendimento personalizado, cobranças automáticas e relatórios para a rotina da sua academia.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zettas.ia.br/#organization",
        name: "Zettas",
        url: "https://zettas.ia.br/",
        logo: "https://zettas.ia.br/Zettas_logo.png",
        sameAs: ["https://www.instagram.com/zettas.ia/"],
        contactPoint: { "@type": "ContactPoint", telephone: "+55-47-99903-5154", contactType: "sales", availableLanguage: "Portuguese" },
      },
      {
        "@type": "WebSite",
        "@id": "https://zettas.ia.br/#website",
        name: "Zettas",
        url: "https://zettas.ia.br/",
        inLanguage: "pt-BR",
        publisher: { "@id": "https://zettas.ia.br/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://zettas.ia.br/#webpage",
        url: "https://zettas.ia.br/",
        name: "Automação de WhatsApp para academias | Zettas",
        inLanguage: "pt-BR",
        isPartOf: { "@id": "https://zettas.ia.br/#website" },
        about: { "@id": "https://zettas.ia.br/#service" },
        primaryImageOfPage: { "@type": "ImageObject", url: "https://zettas.ia.br/opengraph-image", width: 1200, height: 630 },
      },
      {
        "@type": "Service",
        "@id": "https://zettas.ia.br/#service",
        name: "Automação de WhatsApp para academias",
        serviceType: "Atendimento, cobranças automáticas e relatórios de gestão para academias",
        description: "Operação personalizada com atendimento no WhatsApp, integração ao sistema da academia, cobranças automáticas e relatórios semanais e mensais.",
        provider: { "@id": "https://zettas.ia.br/#organization" },
        url: "https://zettas.ia.br/",
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ScrollConcept />
  </>;
}
