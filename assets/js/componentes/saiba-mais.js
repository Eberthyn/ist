/* <curso-saiba-mais titulo="Testes vendidos como VDRL…"> …conteúdo… </curso-saiba-mais>
   Botão "Saiba mais" que abre um conteúdo complementar logo abaixo.
   Para formatar o assunto (ex.: nome científico), use <curso-titulo> dentro. */
(function () {
  const { Componente, definir, esc, icone, novoId, criar } = window.Curso;

  definir('curso-saiba-mais', class extends Componente {
    montar() {
      const painel = novoId('saiba-mais');
      const tituloEl = this.querySelector(':scope > curso-titulo');
      const assunto = tituloEl ? tituloEl.innerHTML : esc(this.attr('titulo'));
      if (tituloEl) tituloEl.remove();
      const bloco = criar('div', 'saiba-mais');
      bloco.innerHTML = `
        <button class="saiba-mais__botao collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#${painel}" aria-expanded="false" aria-controls="${painel}">
          ${icone('hand-index-thumb-fill')}
          <span><strong>Saiba mais</strong><span class="saiba-mais__assunto">${assunto}</span></span>
        </button>`;
      const corpo = criar('div', 'collapse', [criar('div', 'saiba-mais__corpo', [...this.childNodes])]);
      corpo.id = painel;
      bloco.append(corpo);
      this.replaceChildren(bloco);
    }
  });
})();
