# Zettas para academias

## Prévia

- `npm run dev`: landing page Next.js.
- `npm run studio`: composições editáveis no Remotion Studio, porta 3100.
- `npm run lint`, `npx tsc --noEmit`, `npm run build`: verificações.

## Demonstrações

Fontes em `src/remotion/`: Atendimento, Cobranca e Gestao (24 segundos a 30 fps) e Hero (18 segundos). Compartilham a arte com a LP; edite os textos e a composição em `DemoArtwork.tsx`, e os registros de duração e dimensões em `Root.tsx`.

As telas são ilustrações de funcionalidades, não capturas do sistema de um cliente. Academia Aurora, pessoas, valores e gráficos são fictícios. Nenhum número representa resultado comercial da Zettas. Não foram exportados MP4s.

O player carrega quando a demonstração entra na tela, inicia por ação do visitante e pausa fora da tela ou com a aba oculta. A preferência de movimento reduzido recebe uma composição estática. As explicações ao lado das telas oferecem o conteúdo sem depender da animação.

## Contato e medição

Todos os CTAs da LP usam o telefone definido em `NEXT_PUBLIC_WHATSAPP_PHONE`, com fallback para o número já existente no projeto. `NEXT_PUBLIC_WHATSAPP_URL` continua disponível como override. Mensagem: “Olá! Quero conhecer a operação personalizada da Zettas para minha academia.”

Eventos no Google Analytics existente: `whatsapp_click` e `demo_start`, parâmetros `page_context: academias` e `placement` (posição do CTA ou demonstração). Não enviam contatos nem dados dos alunos. Início de demonstração contado uma vez por player montado.

`/links` e `/bio` mantêm a experiência anterior. Estilos da nova LP são limitados à classe `.gym-landing`; o botão flutuante antigo não aparece na página principal.

## Imagem ilustrativa

Arquivo: `public/gym-reception.webp`. Gerado com ImageGen integrado e convertido para WebP. Não representa a academia cliente.

Prompt: “Create a photorealistic editorial lifestyle photograph for a premium Brazilian B2B SaaS website for gym operations. Wide landscape 3:2 composition. A welcoming contemporary gym reception with a Brazilian female receptionist in a plain navy polo shirt smiling naturally while helping an adult gym member in understated workout clothing. Pale oak desk, clean off-white architectural surfaces, a laptop seen from the rear with no visible interface, soft daylight, subtle navy blue accents, a spacious training area with blurred gym equipment in the background. Candid authentic professional photography, restrained colors, warm skin tones, high-end natural lighting, no exaggerated fitness poses, no brand marks, no logos, no text, no watermarks. This is an illustrative fictitious gym scene, no identifiable real client.”

## Referências técnicas

O pacote instalado é Next.js 15.5.14 e não inclui `node_modules/next/dist/docs/`. Foi consultada a documentação oficial para Next.js 15 sobre metadados e imagens Open Graph: https://nextjs.org/docs/15/app/api-reference/file-conventions/metadata/opengraph-image . Player: https://www.remotion.dev/docs/player .

Publicação e exportação de vídeo não fazem parte desta primeira entrega.
