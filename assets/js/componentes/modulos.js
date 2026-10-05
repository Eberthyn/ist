/* <curso-modulos>
   Cards dos módulos na home, gerados de curso.config.js. */
(function () {
  const { Componente, definir, esc, config } = window.Curso;

  const rotulo = (pagina) => (pagina.tipo === 'resumo' ? `Resumo do Módulo ${pagina.modulo.numero}` : pagina.rotulo);

  const linha = (pagina) => `
    <li>
      ${pagina.url ? `<a href="${pagina.url}">${esc(rotulo(pagina))}</a>` : `<strong>${esc(rotulo(pagina))}</strong>`}
      ${pagina.titulo ? `<span>${esc(pagina.titulo)}</span>` : ''}
    </li>`;

  const card = (m) => `
    <article class="modulo-card">
      <header class="modulo-card__topo">
        <h3>Módulo ${m.numero}</h3>
        <p>${esc(m.titulo)}</p>
      </header>
      <ul class="modulo-card__lista">${m.paginas.map(linha).join('')}</ul>
    </article>`;

  definir('curso-modulos', class extends Componente {
    montar() {
      this.innerHTML = `<div class="modulos">${config.modulos.map(card).join('')}</div>`;
    }
  });
})();
