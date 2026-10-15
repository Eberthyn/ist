/* <curso-figura titulo="..." src="..." alt="..." fonte="..." [fonte-link="..."] [legenda="..."] [larga]>
    [texto da legenda]
   </curso-figura>
   Imagem, gráfico ou foto.
   - titulo: aparece acima da imagem (ou <curso-titulo> para usar itálico etc.).
   - legenda + conteúdo interno: aparecem abaixo da imagem (título rosa e texto).
   - larga: ocupa toda a largura do conteúdo e abre a imagem em tamanho real
     ao clicar (fluxogramas, linhas do tempo, quadros).
   Sem "src" mostra um espaço reservado (útil enquanto a arte não chega). */
(function () {
  const { Componente, definir, esc, criar, fonteHtml } = window.Curso;

  definir('curso-figura', class extends Componente {
    montar() {
      // Título com formatação (ex.: nome científico em itálico): use <curso-titulo>
      const tituloEl = this.querySelector(':scope > curso-titulo');
      const titulo = tituloEl ? tituloEl.innerHTML : esc(this.attr('titulo'));
      if (tituloEl) tituloEl.remove();
      const src = this.attr('src');
      const legenda = this.attr('legenda');
      const texto = [...this.childNodes].filter((n) => n.nodeType === 1 || n.textContent.trim());

      // Figuras largas (fluxogramas, quadros) abrem em tamanho real ao clicar — útil no celular
      const larga = this.hasAttribute('larga');
      const ampliar = (img) => (larga ? `<a class="figura__ampliar" href="${esc(src)}" target="_blank" rel="noopener" title="Abrir imagem em tamanho real">${img}</a>` : img);

      const figura = criar('figure', `figura ${larga ? 'figura--larga' : ''}`);
      figura.innerHTML = `
        ${titulo ? `<figcaption class="figura__titulo">${titulo}</figcaption>` : ''}
        ${src
          ? ampliar(`<img class="figura__imagem" src="${esc(src)}" alt="${esc(this.attr('alt'))}" loading="lazy">`)
          : '<div class="figura__imagem figura__imagem--vazia" role="img" aria-label="Imagem a definir"></div>'}
        ${fonteHtml(this)}`;
        
      if (legenda || texto.length) {
        const bloco = criar('div', 'figura__legenda', texto);
        if (legenda) bloco.insertAdjacentHTML('afterbegin', `<p class="figura__legenda-titulo">${esc(legenda)}</p>`);
        // Sem título acima, a legenda é que descreve a figura
        if (!titulo) {
          const caption = criar('figcaption', '', [bloco]);
          figura.append(caption);
        } else {
          figura.append(bloco);
        }
      }

      this.replaceChildren(figura);
    }
  });
})();
