import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://zettas.ia.br"),
  title: {
    default: "Zettas | Automação Inteligente para WhatsApp",
    template: "%s | Zettas",
  },
  description:
    "Automação inteligente e escalável para WhatsApp: atendimento 24/7, qualificação de leads e agendamentos para aumentar conversão e eficiência.",
  alternates: {
    canonical: "https://zettas.ia.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Zettas",
    title: "Zettas | Automação Inteligente para WhatsApp",
    description:
      "Automação inteligente e escalável para WhatsApp: atendimento 24/7, qualificação de leads e agendamentos para aumentar conversão e eficiência.",
    images: [
      {
        url: "/logosemfundo.png",
        width: 1200,
        height: 630,
        alt: "Zettas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zettas | Automação Inteligente para WhatsApp",
    description:
      "Automação inteligente e escalável para WhatsApp: atendimento 24/7, qualificação de leads e agendamentos para aumentar conversão e eficiência.",
    images: ["/logosemfundo.png"],
  },
  icons: {
    icon: [{ url: "/logosemfundo.png", type: "image/png" }],
    apple: [{ url: "/logosemfundo.png", type: "image/png" }],
    shortcut: [{ url: "/logosemfundo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-L09PJCGK2X`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L09PJCGK2X');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/80 to-navy-950 -z-10 pointer-events-none"></div>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
