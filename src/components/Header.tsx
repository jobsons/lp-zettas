import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-950/80 backdrop-blur-md overflow-visible">
      <div className="container mx-auto px-4 h-16 sm:h-20 md:h-24 flex items-center justify-between overflow-visible">
        <Link href="/" className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/95 border border-white/20 p-0 shadow-[0_0_18px_rgba(255,255,255,0.08)] transition-all">
          <div className="relative w-[82px] h-[82px] md:w-[90px] md:h-[90px] overflow-hidden">
            <Image 
              src="/logosemfundo.png" 
              alt="Zettas - Automação Inteligente para WhatsApp" 
              width={560} 
              height={210} 
              className="absolute left-1/2 top-1/2 h-[118px] md:h-[138px] w-auto max-w-none -translate-x-1/2 -translate-y-[46%] object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#nichos" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Soluções</Link>
          <Link href="#diferenciais" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Tecnologia</Link>
          <Link href="#metodologia" className="text-sm font-medium text-graphite-300 hover:text-white transition-colors">Metodologia</Link>
        </nav>
        <div>
          <Link
            href="#captura"
            className="inline-flex items-center justify-center rounded-full gradient-brand hover:opacity-90 text-white font-semibold h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm whitespace-nowrap transition-all shadow-lg shadow-cyan-500/25"
          >
            <span className="md:hidden">Falar com Especialista</span>
            <span className="hidden md:inline">Solicitar Diagnóstico Gratuito</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
