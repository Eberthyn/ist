/* <curso-figura titulo="..." src="..." alt="..." fonte="...">
   Imagem, gráfico ou foto com título e fonte.
   Sem "src" mostra um espaço reservado (útil enquanto a arte não chega). */
(function () {
  const { Componente, definir, esc } = window.Curso;

  definir('curso-figura', class extends Componente {
    montar() {
      const titulo = this.attr('titulo');
      const src = this.attr('src');
      const fonte = this.attr('fonte');

      this.innerHTML = `
        <figure class="figura">
          ${titulo ? `<figcaption class="figura__titulo">${esc(titulo)}</figcaption>` : ''}
          ${src
            ? `<img class="figura__imagem" src="${esc(src)}" alt="${esc(this.attr('alt'))}" loading="lazy">`
            : '<div class="figura__imagem figura__imagem--vazia" role="img" aria-label="Imagem a definir"></div>'}
          ${fonte ? `<p class="figura__fonte">Fonte: ${esc(fonte)}</p>` : ''}
        </figure>`;
    }
  });
})();
