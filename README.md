# Base de curso — HTML, CSS e JavaScript

Base reutilizável para cursos online: Bootstrap 5.3 + Web Components nativos.
Sem build, sem framework, sem jQuery. Abre direto pelo `index.html` e funciona offline.

## Estrutura

```
curso.config.js          ← estrutura do curso (módulos, aulas, links)
index.html               ← home
modulo2/introducao.html  ← modelo de página de introdução
modulo2/aula1.html       ← modelo de página de aula
assets/
  css/curso.css          ← único <link> das páginas (importa os demais)
  css/tokens.css         ← cores, fontes e medidas do tema
  js/curso.js            ← único <script> das páginas (carrega os demais)
  js/nucleo.js           ← lê o config e calcula página atual/anterior/próxima
  js/componentes/        ← um arquivo por componente
  img/  vendor/          ← imagens · Bootstrap, ícones e fontes locais
```

## Criar uma página nova

1. Copie `modulo2/aula1.html` e troque o conteúdo dentro de `<curso-pagina>`.
2. Informe o caminho em `curso.config.js` (`arquivo: 'modulo2/aula2.html'`).

Menu, trilha, título da aba e botões Voltar/Avançar se atualizam sozinhos em todas as páginas.

```html
<body>
  <curso-pagina>
    <h1>Título da aula</h1>
    <p>Texto…</p>
  </curso-pagina>
  <script src="../assets/js/curso.js"></script>
</body>
```

## Componentes

| Componente | Uso |
|---|---|
| `<curso-pagina tema="aula\|capa">` | Layout completo das páginas internas. O tema `capa` (fundo azul) é o padrão nas introduções. |
| `<curso-figura titulo src alt fonte>` | Imagem com título e fonte. Sem `src`, mostra um espaço reservado. |
| `<curso-destaque titulo icone>` | Caixa de destaque (Leitura Complementar, Saiba mais…). |
| `<curso-video src titulo>` | Vídeo 16:9 (link de incorporação ou `.mp4`). |
| `<ul class="lista-setas">` | Lista com setas. |
| `<curso-modulos>` | Cards dos módulos (home). |
| `<curso-navegacao>` | Voltar/Avançar; na home vira "Começar". |
| `<curso-topo>` `<curso-banner>` `<curso-menu>` `<curso-trilha>` `<curso-rodape>` | Peças de estrutura, já incluídas por `<curso-pagina>`. |

Ícones: nomes do [Bootstrap Icons](https://icons.getbootstrap.com) (ex.: `icone="book"`).

## Criar um componente novo

1. Crie `assets/js/componentes/nome.js` seguindo um dos existentes (`figura.js` é o mais simples).
2. Acrescente o arquivo na lista de `assets/js/curso.js`.
3. Estilos em `assets/css/componentes.css`, usando as variáveis de `tokens.css`.

## Usar a base em outro curso

Troque `curso.config.js`, as cores em `assets/css/tokens.css` e as imagens em `assets/img/`.
