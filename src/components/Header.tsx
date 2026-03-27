import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md overflow-visible">
      <div className="container mx-auto px-4 h-16 sm:h-20 md:h-24 flex items-center justify-between overflow-visible">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logosemfundo.png" 
            alt="Zettas - Automação Inteligente para WhatsApp" 
            width={560} 
            height={210} 
            className="h-32 md:h-40 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#nichos" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Soluções</Link>
          <Link href="#diferenciais" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Tecnologia</Link>
          <Link href="#metodologia" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Metodologia</Link>
        </nav>
        <div>
          <Link
            href="#captura"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm whitespace-nowrap transition-colors"
          >
            <span className="md:hidden">Falar com Especialista</span>
            <span className="hidden md:inline">Solicitar Diagnóstico Gratuito</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
