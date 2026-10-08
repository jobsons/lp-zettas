import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  CreditCard,
  BarChart3,
  SlidersHorizontal,
  UsersRound,
  Clock3,
  Link2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ContactLink from "./ContactLink";
import DemoPreview from "./DemoPreview";

const faqs = [
  [
    "A IA fala do jeito da minha academia?",
    "Sim. Configuramos o tom de voz, os horários, as modalidades, as regras de atendimento e as campanhas da sua academia. A operação é testada com situações do seu dia a dia antes de entrar em uso.",
  ],
  [
    "Minha equipe continua participando do atendimento?",
    "Sim. A IA cuida das etapas configuradas e encaminha as situações que precisam de uma pessoa. A equipe recebe a conversa com histórico e resumo para dar continuidade ao atendimento.",
  ],
  [
    "Vocês integram com a EVO?",
    "Temos experiência prática com a EVO em consultas de alunos, contratos, cobranças e vendas. Durante o diagnóstico, avaliamos os acessos e as funcionalidades disponíveis para a sua operação. Outros sistemas são analisados caso a caso.",
  ],
  [
    "Como são definidas as cobranças?",
    "Definimos com você quais mensalidades entram no fluxo e quais critérios de atraso devem ser aplicados. A automação confere dados atualizados e links de pagamento antes dos envios previstos. O fluxo depende da disponibilidade e da qualidade dos dados do sistema integrado.",
  ],
  [
    "Quanto custa e quanto tempo leva para implantar?",
    "A proposta depende das rotinas escolhidas, das integrações e do volume da operação. Na conversa inicial, entendemos o cenário da academia e apresentamos o escopo, o investimento e o cronograma antes de iniciar.",
  ],
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`gym-brand ${inverse ? "inverse" : ""}`}
      aria-label="Zettas — início"
    >
      <Image
        className="brand-logo"
        src="/logo.svg"
        alt="Zettas"
        width={156}
        height={47}
        priority
      />
    </Link>
  );
}

export default function GymLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zettas",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zettas.ia.br",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zettas.ia.br"}/logosemfundo.png`,
    description:
      "Atendimento, cobrança e gestão personalizados para academias.",
    sameAs: ["https://www.instagram.com/zettas.ia/"],
  };
  return (
    <div className="gym-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a className="gym-skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="gym-header">
        <div className="gym-container header-inner">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#solucao">Solução</a>
            <a href="#demonstracoes">Na prática</a>
            <a href="#implantacao">Implantação</a>
          </nav>
          <ContactLink placement="header" className="gym-button button-small">
            <span className="desktop-cta">Quero uma demonstração</span>
            <span className="mobile-cta">Conversar</span>
          </ContactLink>
        </div>
      </header>
      <main id="conteudo">
        <section className="gym-hero gym-container">
          <div className="hero-copy">
            <div className="gym-eyebrow">
              <span className="eyebrow-dot" />
              Uma operação feita para academias
            </div>
            <h1>
              Sua academia
              <br />
              bem atendida.
              <span>Sua equipe com mais tempo para cuidar dos alunos.</span>
            </h1>
            <p className="hero-description">
              Atendimento no WhatsApp, cobrança integrada e relatórios de
              gestão. Configurados para a rotina da sua academia.
            </p>
            <div className="hero-actions">
              <ContactLink placement="hero" />
              <a className="gym-text-link" href="#demonstracoes">
                Ver na prática
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-assurance">
              <Check size={15} />
              Personalizado para sua operação
              <span />
              <UsersRound size={15} />
              Com sua equipe no controle
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">
              <Sparkles size={15} />
              <span>Conheça uma nova rotina.</span>
              <span className="visual-label-right">Com a Zettas.</span>
            </div>
            <DemoPreview kind="atendimento" compact />
            <div className="hero-visual-bottom">
              <span>
                <Link2 size={14} />
                Informação conectada
              </span>
              <span>
                <UsersRound size={14} />
                Atendimento humano presente
              </span>
            </div>
          </div>
        </section>
        <div className="gym-proof-strip">
          <div className="gym-container proof-inner">
            <span>
              Entendemos o que acontece
              <br />
              <strong>entre a recepção e a gestão.</strong>
            </span>
            <div>
              <MessageCircle />
              Atendimento
            </div>
            <div>
              <CreditCard />
              Cobrança
            </div>
            <div>
              <BarChart3 />
              Gestão
            </div>
            <div className="evo-proof">
              <span className="evo-word">EVO</span>
              <span>
                Experiência com
                <br />
                integração EVO
              </span>
            </div>
          </div>
        </div>
        <section id="solucao" className="gym-section gym-container">
          <div className="section-heading">
            <div>
              <div className="gym-eyebrow">A rotina que você conhece</div>
              <h2>
                A academia não para.
                <br />O atendimento também precisa acompanhar.
              </h2>
            </div>
            <p>
              O aluno quer uma resposta. O interessado quer conhecer os planos.
              E sua equipe precisa dar conta de tudo isso.
            </p>
          </div>
          <div className="pain-grid">
            <article>
              <span className="line-icon">
                <MessageCircle />
              </span>
              <h3>Conversas que se misturam.</h3>
              <p>
                Alunos, novos interessados e dúvidas comerciais chegam ao mesmo
                WhatsApp. Cada pessoa precisa de um caminho diferente.
              </p>
            </article>
            <article>
              <span className="line-icon">
                <CreditCard />
              </span>
              <h3>Cobranças que tomam tempo.</h3>
              <p>
                Conferir mensalidades e separar links de pagamento não precisa
                ocupar toda a atenção da recepção.
              </p>
            </article>
            <article>
              <span className="line-icon">
                <BarChart3 />
              </span>
              <h3>Dados que precisam fazer sentido.</h3>
              <p>
                O gestor precisa acompanhar as vendas sem montar, a cada mês, o
                mesmo relatório do zero.
              </p>
            </article>
          </div>
        </section>
        <section id="demonstracoes" className="gym-demo-section">
          <div className="gym-container">
            <div className="demo-section-heading">
              <div className="gym-eyebrow">Veja a operação acontecer</div>
              <h2>
                Três frentes.
                <br />
                Uma rotina mais organizada.
              </h2>
              <p>
                Exemplos de funcionalidades já implantadas em uma operação de
                academia.
                <br />
                As cenas abaixo são ilustrativas e usam dados fictícios.
              </p>
            </div>
            <article className="chapter">
              <div className="chapter-copy">
                <span className="chapter-index">01 / Atendimento</span>
                <h2>
                  Uma resposta com contexto.
                  <br />
                  <span>Não só uma resposta rápida.</span>
                </h2>
                <p>
                  A Bia identifica quem está falando, consulta as informações da
                  academia e segue as regras do atendimento. Quando precisa, sua
                  equipe assume com o contexto em mãos.
                </p>
                <ul>
                  <li>
                    <Check />
                    Caminhos próprios para alunos e interessados
                  </li>
                  <li>
                    <Check />
                    Campanhas e regras da academia na conversa
                  </li>
                  <li>
                    <Check />
                    Encaminhamento humano com histórico e resumo
                  </li>
                </ul>
                <ContactLink placement="atendimento" className="gym-text-link">
                  Quero isso na minha academia
                </ContactLink>
              </div>
              <DemoPreview kind="atendimento" />
            </article>
            <article className="chapter chapter-reverse">
              <div className="chapter-copy">
                <span className="chapter-index">02 / Cobrança</span>
                <h2>
                  Mensalidade pendente?
                  <br />
                  <span>Um processo definido para cuidar disso.</span>
                </h2>
                <p>
                  Da conferência dos dados ao link de pagamento, a cobrança
                  segue os critérios combinados com você. Sua equipe acompanha o
                  processo e atende quando necessário.
                </p>
                <ul>
                  <li>
                    <Check />
                    Consulta de dados atualizados na EVO
                  </li>
                  <li>
                    <Check />
                    Seleção conforme suas regras de elegibilidade
                  </li>
                  <li>
                    <Check />
                    Mensagem e link de pagamento para o aluno
                  </li>
                </ul>
                <ContactLink placement="cobranca" className="gym-text-link">
                  Conhecer a cobrança integrada
                </ContactLink>
              </div>
              <DemoPreview kind="cobranca" />
            </article>
            <article className="chapter">
              <div className="chapter-copy">
                <span className="chapter-index">03 / Gestão</span>
                <h2>
                  O mês em uma visão.
                  <br />
                  <span>Mais clareza para acompanhar.</span>
                </h2>
                <p>
                  As vendas se transformam em um relatório organizado por
                  período e categorias. Informações que ajudam o gestor a
                  entender a operação sem repetir o trabalho manual.
                </p>
                <ul>
                  <li>
                    <Check />
                    Vendas do mês reunidas em um relatório
                  </li>
                  <li>
                    <Check />
                    Organização por dias e categorias
                  </li>
                  <li>
                    <Check />
                    Preparação e envio conforme a rotina definida
                  </li>
                </ul>
                <ContactLink placement="gestao" className="gym-text-link">
                  Ver o que podemos integrar
                </ContactLink>
              </div>
              <DemoPreview kind="gestao" />
            </article>
          </div>
        </section>
        <section className="gym-personalization gym-container gym-section">
          <div className="personal-image">
            <Image
              src="/gym-reception.webp"
              alt="Cena ilustrativa de uma recepcionista atendendo um aluno em uma academia"
              width={960}
              height={720}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <span>Imagem ilustrativa</span>
            <div className="image-note">
              <span className="line-icon">
                <UsersRound />
              </span>
              <div>
                Mais espaço para o que é humano.
                <small>A tecnologia apoia. Sua equipe cuida.</small>
              </div>
            </div>
          </div>
          <div className="personal-copy">
            <div className="gym-eyebrow">
              Sua academia tem seu próprio jeito
            </div>
            <h2>
              E o atendimento
              <br />
              precisa respeitar isso.
            </h2>
            <p>
              O nome da assistente, a forma de conversar, as campanhas e os
              critérios de encaminhamento são configurados para sua operação.
            </p>
            <div className="personal-list">
              <div>
                <SlidersHorizontal />
                <span>
                  <strong>Sua linguagem, suas regras</strong>
                  <small>
                    Tom de voz, modalidades e informações aprovadas.
                  </small>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <strong>A rotina da sua equipe</strong>
                  <small>Horários e passagem para o atendimento humano.</small>
                </span>
              </div>
              <div>
                <ShieldCheck />
                <span>
                  <strong>Você define os limites</strong>
                  <small>
                    O que a IA pode responder e quando deve encaminhar.
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="gym-case">
          <div className="gym-container case-grid">
            <div>
              <div className="gym-eyebrow">Experiência que vem da operação</div>
              <h2>
                Construído com os pés
                <br />
                no chão da academia.
              </h2>
              <p>
                Em uma academia atendida pela Zettas, conectamos atendimento,
                cobrança e relatórios à rotina da equipe. Essa experiência
                orienta o que mostramos aqui.
              </p>
              <span className="case-note">
                Identidade do cliente preservada.
              </span>
            </div>
            <div className="case-details">
              <h3>O que foi implantado</h3>
              <div>
                <Check />
                <span>Assistente de atendimento com suporte e vendas</span>
              </div>
              <div>
                <Check />
                <span>Cobrança de mensalidades integrada à EVO</span>
              </div>
              <div>
                <Check />
                <span>Relatório mensal de vendas</span>
              </div>
              <div className="case-integration">
                <span className="evo-word">EVO</span>
                <p>
                  Experiência prática com EVO.
                  <br />
                  <span>Outros sistemas são avaliados no diagnóstico.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="implantacao" className="gym-section gym-container">
          <div className="section-heading">
            <div>
              <div className="gym-eyebrow">Do primeiro papo à operação</div>
              <h2>
                Personalizado desde
                <br />a primeira conversa.
              </h2>
            </div>
            <p>
              Entendemos o cenário, definimos o escopo e validamos a experiência
              antes de colocar a automação em uso.
            </p>
          </div>
          <ol className="steps-grid">
            {[
              [
                "Entender",
                "Mapeamos o atendimento, os sistemas e as prioridades da sua academia.",
              ],
              [
                "Configurar",
                "Preparamos linguagem, regras, integrações e rotinas escolhidas.",
              ],
              [
                "Validar",
                "Testamos situações reais da operação junto com sua equipe.",
              ],
              [
                "Acompanhar",
                "Colocamos em uso e ajustamos conforme a rotina e o escopo contratado.",
              ],
            ].map(([title, description], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="gym-faq gym-container gym-section">
          <div>
            <div className="gym-eyebrow">Antes de começar</div>
            <h2>
              Uma boa decisão
              <br />
              começa com clareza.
            </h2>
            <p>
              Ficou alguma dúvida sobre
              <br />a sua operação?
            </p>
            <ContactLink placement="faq" className="gym-text-link">
              Vamos conversar
            </ContactLink>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={20} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="gym-closing">
          <div className="gym-container">
            <span className="closing-label">
              <span />
              Zettas para academias
            </span>
            <h2>
              Vamos olhar para
              <br />a rotina da sua academia?
            </h2>
            <p>
              Conte como você atende hoje. Vamos mostrar onde a Zettas pode
              ajudar.
            </p>
            <ContactLink
              placement="closing"
              className="gym-button button-white"
            />
            <span className="closing-footnote">
              Uma conversa sobre sua operação. Uma proposta feita para você.
            </span>
          </div>
        </section>
      </main>
      <footer className="gym-footer gym-container">
        <div>
          <Brand />
          <span>
            Atendimento, cobrança e gestão.
            <br />
            Com o jeito da sua academia.
          </span>
        </div>
        <div>
          <a
            href="https://www.instagram.com/zettas.ia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <ArrowUpRight size={14} />
          </a>
          <ContactLink placement="footer" className="footer-link">
            Falar com a Zettas
          </ContactLink>
          <span>© {new Date().getFullYear()} Zettas</span>
        </div>
      </footer>
    </div>
  );
}
