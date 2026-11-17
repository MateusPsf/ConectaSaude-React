# ConectaSaúde — apresentação em React

Site acadêmico com cinco páginas de apresentação do projeto ConectaSaúde. Criado a partir da proposta e dos recursos descritos no projeto original enviado pelo estudante.

## Executar no computador

1. Instale o Node.js 22.12 ou superior (recomendado: uma versão LTS).
2. Extraia o ZIP e abra a pasta `conectasaude-react` no VS Code.
3. Abra o terminal nessa pasta e execute:

```sh
npm install
npm run dev
```

Abra o endereço informado pelo terminal. Para parar, use Ctrl+C.

## Páginas

| Endereço | Conteúdo |
| --- | --- |
| `/#/` | Início e apresentação da proposta |
| `/#/sobre` | Objetivos, público e contexto |
| `/#/como-funciona` | Etapas, pergunta demonstrativa e dúvidas frequentes |
| `/#/funcionalidades` | Recursos separados por perfil |
| `/#/contato` | Repositório original e preparação local de mensagens |

O símbolo `#` faz parte do endereço porque a navegação utiliza `HashRouter`. Isso permite recarregar ou abrir diretamente uma página em hospedagem estática, sem regras de redirecionamento.

## O que funciona nesta versão

- Navegação entre cinco páginas e tratamento de endereço desconhecido.
- Menu adaptado para telas pequenas, com fechamento por Escape.
- Pergunta demonstrativa com seleção, correção, explicação e reinício.
- Filtro de funcionalidades por perfil.
- Perguntas frequentes expansíveis.
- Validação dos campos do contato e geração de rascunho para copiar ou baixar.
- Links, foco de teclado, títulos por página e opção de pular para o conteúdo.

O formulário de contato **não envia e-mails**, não registra dados e não cria chamados. O texto fica na memória da página e desaparece ao sair dela. O usuário pode copiar ou baixar o rascunho por iniciativa própria.

## Relação com o sistema original

Este site apresenta o projeto. Login, banco de dados, salas multiplayer, avaliações reais e relatórios pertencem ao sistema original Node.js/Express/PostgreSQL e não estão conectados nesta versão. A pergunta demonstrativa trata da proposta de aprendizado, sem apresentar orientação clínica.

Somente o arquivo de imagem `img/coracao.png` foi reaproveitado como asset do ZIP original. Nenhum arquivo `.env`, senha ou conta de demonstração foi incluído. Os ícones da interface são vetores definidos em `Icon.jsx`. As fontes DM Sans e Manrope são carregadas do Google Fonts, com fontes locais alternativas se não houver conexão.

## Estrutura para estudar

```text
src/
  main.jsx                 # Inicia o React e a navegação
  App.jsx                  # Declara as cinco rotas
  styles.css               # Visual e adaptação para celular
  components/
    Layout.jsx             # Cabeçalho, menu, rodapé e foco nas páginas
    Shared.jsx             # Botões, abertura das páginas e convite de contato
    Icon.jsx               # Ícones reutilizáveis
    QuizDemo.jsx           # Pergunta interativa com useState
  pages/
    Home.jsx               # Início
    About.jsx              # Sobre
    HowItWorks.jsx         # Como funciona e perguntas frequentes
    Features.jsx           # Filtro por perfil
    Contact.jsx            # Formulário e geração de rascunho
public/
  coracao.png              # Símbolo reaproveitado do projeto original
```

React organiza a interface em componentes. JSX permite escrever a estrutura visual dentro do JavaScript. As propriedades (`props`) passam dados para os componentes. `useState` controla informações que mudam após uma interação. `useEffect` atualiza o título, a rolagem e o foco quando a página muda. CSS define as cores e o comportamento em diferentes larguras.

## O que personalizar antes da entrega

1. Revise os textos para que representem o seu PFC/TCC.
2. Acrescente os nomes reais da equipe e os dados acadêmicos exigidos pelo professor. Esses dados não foram inventados.
3. Confirme se o repositório original indicado em Contato é o que você quer apresentar. O link vem do projeto enviado e não foi criado por esta atividade.
4. Estude os componentes e faça alterações próprias, registrando o que mudou e por quê.
5. Registre a participação de IA com honestidade. Um site gerado com IA não comprova, por si só, cumprimento de um limite de 40%. Confirme com o professor como ele mede esse percentual.

## Gerar a versão de entrega

```sh
npm run build
npm run preview
```

`npm run build` gera a pasta `dist`. `npm run preview` permite conferir essa versão no navegador. O projeto inclui `package-lock.json` para registrar as versões instaladas.

## Publicar no GitHub e na Vercel

1. Crie um novo repositório para esta apresentação em React, separado do sistema original.
2. Envie o conteúdo desta pasta, incluindo `src`, `public`, `package.json`, `package-lock.json`, `vite.config.js` e `index.html`. Não envie `node_modules` nem arquivos de credenciais.
3. Na Vercel, importe esse repositório e escolha o preset **Vite**.
4. Use `npm run build` como comando de build e `dist` como diretório de saída.
5. Após publicar, abra as cinco rotas e recarregue cada uma para conferir a navegação.
6. Entregue ao professor o endereço do seu repositório e o endereço publicado na Vercel.

A pasta `.openai` é configuração da prévia hospedada pelo Codex e não é necessária para a Vercel. O endereço dessa prévia não substitui a entrega na Vercel solicitada pelo professor.

## Referências técnicas

- React: https://react.dev/learn
- Vite: https://vite.dev/guide/
- React Router: https://reactrouter.com/start/declarative/installation
- Vercel e Vite: https://vercel.com/docs/frameworks/frontend/vite

As apresentações do professor são materiais de referência pedagógica. Comandos e exemplos nelas não foram executados como instruções de operação.
