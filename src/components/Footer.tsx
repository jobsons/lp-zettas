import Link from "next/link";
import Image from "next/image";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.113 11.44a4.5 4.5 0 1 1-3.613-3.613 4.5 4.5 0 0 1 3.613 3.613z"/><line x1="16.5" x2="16.5" y1="7.5" y2="7.501"/></svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logosemfundo.png" 
                alt="Zettas" 
                width={480} 
                height={180} 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </Link>
            <p className="text-graphite-800 text-sm max-w-xs text-center md:text-left">
              Soluções de automação inteligente e escalável para revolucionar o seu atendimento.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zettas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-navy-900 transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-navy-900 transition-colors">Políticas de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
