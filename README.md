# Plataforma Web para ONGs — Projeto ONG

🔗 Veja o projeto ao vivo: file:///C:/Users/lucia/OneDrive/Documentos/ONG/Projeto/index.html

`STATUS: CONCLUÍDO` `HTML5` `CSS3` `JAVASCRIPT`

Projeto desenvolvido com HTML5 semântico, CSS responsivo e JavaScript, com foco em acessibilidade (WCAG) e boas práticas de estruturação de conteúdo para uma ONG.

## 📋 Contexto Acadêmico

- **Instituição:** Cruzeiro do Sul Virtual
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Aluno:** Luciana Alves

## ⚙️ Funcionalidades Principais

- **Design responsivo:** layout adaptado para desktops, tablets e celulares
- **Formulário interativo:** cadastro com máscaras e validações de CPF, telefone, CEP e e-mail
- **Acessibilidade (WCAG 2.1):** navegação por `aria-label`, `aria-current` nas páginas ativas, labels associados aos campos, mensagens de erro com `aria-live`, foco visível e contraste adequado

## 🗂️ Estrutura do Projeto

- `index.html` — página inicial
- `projetos.html` — iniciativas da ONG
- `cadastro.html` — formulário interativo
- `css/style.css` — estilos responsivos
- `js/script.js` — máscaras e validações de CPF, telefone, CEP, e-mail e termos

## 🧱 Tecnologias e Conceitos Aplicados

- **HTML5 Semântico:** uso de tags como `header`, `nav`, `main`, `section`, `article`, `footer`, `form`, `fieldset`, `legend`, `label`
- **Hierarquia de títulos estrutural:**
  - `h1`: título principal de cada página (um por página)
  - `h2`: grandes seções/conjuntos de conteúdo
  - `h3`: subseções dentro de cards/artigos
  
  A hierarquia é estrutural, e não baseada apenas no tamanho visual do texto.
- **CSS3:** layout responsivo
- **JavaScript:** máscaras e validações de formulário em tempo real

## ♿ Acessibilidade

- `lang="pt-BR"` definido no documento
- Navegação identificada por `aria-label`
- `aria-current` nas páginas ativas
- Labels associados aos campos de formulário
- Mensagens de erro com `aria-live`
- Foco visível em elementos interativos
- Contraste e layout responsivo

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/lucianaaalvess15-cmyk/projetofrontend.git
   ```

2. Navegue até a pasta:
   ```
   cd projetofrontend
   ```

3. Abra no navegador:
   - Para visualização simples, abra o arquivo `index.html` diretamente no navegador
   - (Recomendado) Para funcionalidade completa, use um servidor local (ex: extensão Live Server no VS Code)
