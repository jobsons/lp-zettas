import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Niches from "@/components/Niches";
import FeaturesAndProcess from "@/components/FeaturesAndProcess";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zettas.ia.br";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zettas",
    url: siteUrl,
    logo: `${siteUrl}/logosemfundo.png`,
    sameAs: [],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header />
      <Hero />
      <Niches />
      <FeaturesAndProcess />
      <LeadCapture />
      <Footer />
    </main>
  );
}
