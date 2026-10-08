# SEO e contato da LP para academias

## Implementado

- Título e descrição da página com foco em automação de WhatsApp para academias.
- Termo principal visível na abertura, com atendimento, cobrança e relatórios descritos no conteúdo entregue pelo servidor.
- URL canônica da LP: https://zettas.ia.br/. `/links` possui título, descrição e canonical próprios. `/bio` mantém seu redirecionamento.
- `/conceito` permanece `noindex` e fora do sitemap para não disputar com a LP.
- Robots permite rastreamento; sitemap contém apenas as páginas públicas canônicas e não inventa atualização a cada build.
- Dados estruturados Organization, WebSite, WebPage e Service, sem avaliações, preços ou resultados inventados.
- Metadados de compartilhamento e imagem 1200 × 630 existentes para academias.
- Formulário atual Tally XxOGxe na abertura e no fechamento. Abre em modal; link direto funciona como alternativa ao widget.
- Analytics: `form_open` na abertura e `generate_lead` na confirmação de envio pelo Tally. Apenas contexto e posição do CTA são enviados, sem campos do formulário. No formulário hospedado fora da LP, a confirmação de envio depende da medição configurada no próprio Tally.

## Depois de publicar

1. Conferir `https://zettas.ia.br/robots.txt`, `/sitemap.xml`, canonical e status HTTP da página publicada.
2. Na propriedade do domínio no Google Search Console, enviar `sitemap.xml` e inspecionar a URL da LP para solicitar indexação.
3. Validar os dados estruturados e acompanhar indexação, consultas, impressões e cliques. A marcação Service descreve o serviço, sem promessa de resultado especial na busca.
4. Acompanhar a experiência real dos visitantes e conversões. Revisar conteúdo conforme as perguntas dos gestores, sem acumular palavras-chave.

A entrega local não altera o site publicado nem envia solicitações ao Search Console. As mudanças favorecem compreensão e rastreamento; posição no Google não é garantida.

Fontes: https://developers.google.com/search/docs/fundamentals/seo-starter-guide e https://nextjs.org/docs/15/app/guides/json-ld.
