import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logosemfundo.png" 
            alt="Zettas - Automação Inteligente para WhatsApp" 
            width={320} 
            height={120} 
            className="h-20 md:h-24 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#nichos" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Soluções</Link>
          <Link href="#diferenciais" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Tecnologia</Link>
          <Link href="#metodologia" className="text-sm font-medium text-graphite-800 hover:text-emerald-500 transition-colors">Metodologia</Link>
        </nav>
        <div>
          <Link href="#captura">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
              Teste a demonstração
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
