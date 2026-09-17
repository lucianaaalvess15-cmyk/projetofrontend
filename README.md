# Projeto ONG — HTML5 Semântico

Estrutura:
- index.html — página inicial
- projetos.html — iniciativas da ONG
- cadastro.html — formulário interativo
- css/style.css — estilos responsivos
- js/script.js — máscaras e validações de CPF, telefone, CEP, e-mail e termos

Tags semânticas principais:
header, nav, main, section, article, footer, h1, h2, h3, form, fieldset, legend, label.

Hierarquia:
- h1: título principal de cada página (um por página)
- h2: grandes seções/conjuntos de conteúdo
- h3: subseções dentro de cards/artigos
A hierarquia é estrutural, e não baseada apenas no tamanho visual do texto.

Acessibilidade:
- lang="pt-BR"
- navegação identificada por aria-label
- aria-current nas páginas ativas
- labels associados aos campos
- mensagens de erro com aria-live
- foco visível
- contraste e layout responsivo
