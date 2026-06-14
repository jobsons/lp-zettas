import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-950/80 backdrop-blur-md overflow-visible">
      <div className="container mx-auto px-4 h-16 sm:h-20 md:h-24 flex items-center justify-between overflow-visible">
        <Link href="/" className="inline-flex shrink-0 items-center justify-center transition-all hover:opacity-90 relative">
          {/* Glow de fundo sutil para contraste */}
          <div className="absolute w-16 h-16 bg-white/10 blur-xl rounded-full opacity-60 pointer-events-none" />
          
          <Image 
            src="/Zettas_logo.png" 
            alt="Zettas - Automação Inteligente para WhatsApp" 
            width={64} 
            height={64} 
            className="relative z-10 w-12 h-auto sm:w-14 sm:h-auto md:w-16 md:h-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#nichos" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Soluções</Link>
          <Link href="#diferenciais" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Tecnologia</Link>
          <Link href="#metodologia" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Metodologia</Link>
        </nav>
        <div>
          <Link
            href="#captura"
            className="inline-flex items-center justify-center rounded-xl gradient-brand hover:opacity-90 text-white font-semibold h-9 sm:h-10 px-3 sm:px-4 text-sm whitespace-nowrap transition-all shadow-lg shadow-cyan-900/30"
          >
            <span className="md:hidden">Falar com Especialista</span>
            <span className="hidden md:inline">Solicitar Diagnóstico Gratuito</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
