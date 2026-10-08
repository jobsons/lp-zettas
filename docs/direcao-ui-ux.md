# Zettas Academias — proposta de direção UI e UX

Status: direção aprovada e implementada localmente.

Atualização: direção aprovada e aplicada à página inicial local e à rota `/conceito`. Inclui atendimento, cobrança automática, relatórios semanal e mensal, personalização, implantação, FAQ e convite final. `/links` e `/bio` foram preservados. Não houve publicação.

No desktop, cada cena ocupa um intervalo de 180vh e mantém sua composição visível enquanto a rolagem desenha a conexão, começando quando o topo da cena chega ao topo da tela. No celular, a rolagem permanece livre e o progresso é medido pela chegada da própria ilustração. Os loops só começam depois da construção inicial (74% do progresso), com mídia visível e aba ativa. A pausa e o movimento reduzido mostram estados completos.

## Prévia navegável

Rota local: `/conceito`. Prévia isolada, com `noindex`, para validar a composição e o movimento antes de expandir a LP. Base #050B14, conforme os estilos existentes do projeto, e iluminação azul muito sutil que se desloca com a rolagem. Conexões vetoriais e ilustrações de atendimento, cobrança e relatório respondem ao progresso de cada seção. Rolagem para cima reverte a construção. Texto principal permanece visível. Pausa e preferência de movimento reduzido apresentam os estados completos.

As ilustrações são componentes editáveis; não usam informações do cliente. A prévia ainda não representa a página final com implantação, FAQ e acabamento de todas as seções. `/`, `/links` e `/bio` continuam disponíveis.

## Referência e intenção

Referência principal: gravação enviada do microsite Future da 1Password. Foram examinados quadros em 0, 8, 16, 24 e 30 segundos. Observam-se fundo azul contínuo, títulos grandes, linhas conectando elementos, bastante espaço livre e composições de interfaces que evoluem com a rolagem.

Adaptar essa linguagem à Zettas: atendimento, cobrança e gestão conectados à rotina da academia. Usar as linhas de circuito presentes no logo como elemento de continuidade entre cenas. Cada cena tem uma mensagem, uma composição visual e um próximo passo compreensível.

## Proposta de sistema visual

| Papel | Cor proposta | Uso |
| --- | --- | --- |
| Fundo principal | #071827 | Ambiente azul profundo |
| Fundo de cena | #10375C | Variação de profundidade |
| Azul da identidade | #153B63 | Superfícies e detalhes da marca |
| Azul luminoso | #38BDF8 | Conexões e destaques pontuais |
| Verde da identidade | #75C83E | CTA principal, com texto escuro |
| Texto principal | #F5F9FF | Títulos e conteúdo |
| Texto secundário | #BDD0E0 | Apoio e legendas |

Cores propostas a partir dos logos enviados e dos estilos locais do projeto; não são uma medição da página publicada, que não ficou acessível na consulta. Validar contraste nas combinações finais. O verde identifica ação; o azul dá unidade à experiência. Evitar gradiente em todo título e brilhos em todas as superfícies.

Manrope nos títulos e Inter no corpo. Títulos expressivos com poucas linhas; apoio de no máximo duas frases por cena. Largura máxima de 1200 px; margens móveis de 24 px; ritmo de espaçamento em múltiplos de 8 px. Bordas discretas e cantos de 16 px nos enquadramentos de mídia.

Os logos fornecidos têm versões sobre fundo claro. Testar aplicação legível antes de definir o cabeçalho escuro. Preservar a marca; não redesenhar o símbolo nem remover seu fundo por CSS.

## Roteiro da experiência

| Cena | Mensagem proposta | Visual e comportamento |
| --- | --- | --- |
| 1. Abertura | Sua academia bem atendida. Sua equipe mais presente. | Título central, apoio curto e CTA. Uma conexão visual conduz ao atendimento, com poucos elementos ao redor. |
| 2. Contexto | A rotina da academia não cabe em respostas prontas. | Uma conversa em destaque mostra a diferença entre aluno e interessado. Cenário real demonstrado com dados de teste. |
| 3. Atendimento | A conversa começa no WhatsApp. O contexto acompanha sua equipe. | Gravação ou captura: identificação, consulta das regras e encaminhamento humano. Destacar apenas a região relevante em cada etapa. |
| 4. Cobrança | Cobrança com os dados certos, no momento certo. | Sequência curta: dados atualizados no EVO, seleção elegível, mensagem com link de pagamento. Apresentar como fluxo configurado, sem prometer recuperação financeira. |
| 5. Gestão | As informações do mês, organizadas para você. | Relatório de teste por período e categorias; aproximar o trecho importante, sem exibir um dashboard inteiro ilegível. |
| 6. Personalização e fechamento | Configurada para a sua academia. | Linguagem, regras e encaminhamento humano em texto conciso. Implantação em quatro etapas, FAQ recolhido e CTA para demonstração. |

Cabeçalho compacto: marca, link para demonstrações e CTA. CTA principal: “Quero uma demonstração”. Mensagem do WhatsApp: “Olá! Quero conhecer a operação personalizada da Zettas para minha academia.”

## Movimento e mídia

- Rolagem normal. Usar transições entre cenas e, quando ajudar a compreensão, um trecho visual fixo por tempo limitado; permitir acesso direto às demonstrações.
- Conexões animadas representam passagem de informação. Evitar movimento decorativo constante e cartões flutuando sem função.
- Priorizar capturas do ambiente de teste e gravações recortadas. Legendas ficam fora da gravação para manter leitura no celular.
- Prints funcionam como ponto de chegada de cada sequência. Vídeos com reprodução e pausa, poster estático e carregamento sob demanda.
- Indicação visível de “Demonstração com dados fictícios”. Ocultar nomes, telefones, valores reais, credenciais e dados do cliente.
- No celular, uma mídia por vez e texto antes da mídia. Não reduzir uma tela de desktop inteira até ela ficar ilegível.
- Em movimento reduzido, apresentar estados estáticos e manter todo o conteúdo acessível por teclado.

## Materiais para a próxima etapa

As capturas da operação ainda precisam ser selecionadas: atendimento com consulta e encaminhamento; cobrança com critérios e link; relatório do EVO. A gravação enviada é referência estética, não uma demonstração da Zettas.

Próximo entregável: layout estático de abertura e primeira cena de demonstração em desktop e celular, com esta paleta e hierarquia. Validar composição e legibilidade antes de expandir a página ou produzir as animações finais.

## Critérios de revisão

Em cada cena, identificar rapidamente a mensagem e a prova visual. Primeiro bloco deve esclarecer público, oferta e CTA. Conferir 375, 768, 1024 e 1440 px, contraste, foco, leitura sem áudio e ausência de rolagem horizontal. Nenhum dado inventado apresentado como resultado real e nenhuma funcionalidade além do trabalho comprovado.
