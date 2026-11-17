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

