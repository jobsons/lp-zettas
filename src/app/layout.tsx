import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    canonical: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-graphite-900 bg-gray-50">{children}</body>
    </html>
  );
}
