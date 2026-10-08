import type { Metadata } from "next";
import ScrollConcept from "@/components/gym/ScrollConcept";
import "./conceito/concept.css";

const pageTitle = "IA para academias: atendimento e cobrança | Zettas";
const pageDescription = "IA para academias com atendimento personalizado no WhatsApp, cobranças automáticas e relatórios integrados ao seu sistema. Conheça a Zettas.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
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
        name: pageTitle,
        description: pageDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": "https://zettas.ia.br/#website" },
        about: { "@id": "https://zettas.ia.br/#service" },
        primaryImageOfPage: { "@type": "ImageObject", url: "https://zettas.ia.br/opengraph-image", width: 1200, height: 630 },
      },
      {
        "@type": "Service",
        "@id": "https://zettas.ia.br/#service",
        name: "IA para academias e automação de WhatsApp",
        serviceType: "Atendimento com IA, cobranças automáticas e relatórios de gestão para academias",
        description: "Operação personalizada com atendimento com inteligência artificial no WhatsApp, integração ao sistema da academia, cobranças automáticas e relatórios semanais e mensais.",
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
