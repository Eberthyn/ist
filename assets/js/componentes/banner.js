/* <curso-banner [modulo="2"] [grande]>
   Faixa com o título do curso. "modulo" mostra a tarja do módulo;
   "grande" é a versão da home. */
(function () {
  const { Componente, definir, esc, icone, url, config } = window.Curso;

  definir('curso-banner', class extends Componente {
    montar() {
      const { chamada, destaque } = config.titulo;
      const grande = this.hasAttribute('grande');
      const modulo = config.modulos.find((m) => String(m.numero) === this.attr('modulo'));
      // Só a home usa <h1> no banner; nas demais o <h1> é o título da página.
      const tag = grande ? 'h1' : 'p';

      this.innerHTML = `
        <div class="banner ${grande ? 'banner--grande' : ''}">
          <img class="banner__arte banner__arte--esq" src="${url('assets/img/banner-esq.png')}" alt="">
          <img class="banner__arte banner__arte--dir" src="${url('assets/img/banner-dir.png')}" alt="">
          <div class="banner__texto">
            ${grande ? '<span class="banner__selo">Curso</span>' : ''}
            <${tag} class="banner__titulo">
              <span class="banner__chamada">${esc(chamada)}</span>
              ${destaque.map((linha) => `<span class="banner__destaque">${esc(linha)}</span>`).join(' ')}
            </${tag}>
          </div>
          ${modulo ? `<p class="banner__modulo">Módulo ${modulo.numero} | ${esc(modulo.titulo)}</p>` : ''}
          ${grande ? `<a class="banner__seta" href="#apresentacao" aria-label="Ir para a apresentação">${icone('chevron-down')}</a>` : ''}
        </div>`;
    }
  });
})();
