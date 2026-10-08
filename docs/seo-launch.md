# SEO e contato da LP para academias

## Implementado

- Título e descrição da página com foco em IA para academias, atendimento no WhatsApp e cobranças automáticas; compartilhamento e dados estruturados seguem a mesma oferta.
- Termo principal visível na abertura, com atendimento, cobrança e relatórios descritos no conteúdo entregue pelo servidor. O título visual foi preservado, sem acumular palavras-chave.
- FAQ explica como funciona a IA para academias, quais informações orientam as respostas e quando a equipe participa.
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

A indexação da página principal já foi solicitada e o sitemap enviado ao Search Console em 08/10/2026. Acompanhar consultas e resultados após a publicação; não é necessário repetir a solicitação a cada ajuste de texto. As mudanças favorecem compreensão e rastreamento; posição no Google não é garantida.

Fontes: https://developers.google.com/search/docs/fundamentals/seo-starter-guide e https://nextjs.org/docs/15/app/guides/json-ld.
