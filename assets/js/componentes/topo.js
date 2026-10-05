/* <curso-topo [com-menu]>
   Barra superior: logo, links extras e (com-menu) botão do menu no celular. */
(function () {
  const { Componente, definir, esc, icone, url, home, extras, atual } = window.Curso;

  definir('curso-topo', class extends Componente {
    montar() {
      const botaoMenu = this.hasAttribute('com-menu')
        ? `<button class="topo__menu d-lg-none" type="button" data-bs-toggle="offcanvas"
             data-bs-target="#menu-curso" aria-controls="menu-curso" aria-label="Abrir menu do curso">${icone('list')}</button>`
        : '';

      const links = extras.map((extra) => `
        <a class="topo__link" href="${extra.url}" ${extra === atual ? 'aria-current="page"' : ''}>
          ${icone(extra.icone)}<span>${esc(extra.rotulo)}</span>
        </a>`).join('');

      this.innerHTML = `
        <header class="topo">
          ${botaoMenu}
          <a class="topo__logo" href="${home.url}">
            <img src="${url('assets/img/logo-campus-branco.png')}" alt="Campus Virtual Fiocruz — página inicial do curso">
          </a>
          <nav class="topo__links" aria-label="Links do curso">${links}</nav>
        </header>`;
    }
  });
})();
