import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Niches from "@/components/Niches";
import FeaturesAndProcess from "@/components/FeaturesAndProcess";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Niches />
      <FeaturesAndProcess />
      <LeadCapture />
      <Footer />
    </main>
  );
}
