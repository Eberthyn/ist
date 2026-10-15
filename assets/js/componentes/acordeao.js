/* <curso-acordeao>
     <curso-item titulo="Transmissão sexual"> …conteúdo… </curso-item>
     <curso-item aberto>
       <curso-titulo>VDRL (<i>Venereal Disease Research Laboratory</i>)</curso-titulo>
       …conteúdo…
     </curso-item>
   </curso-acordeao>
   Painéis que abrem e fecham. "aberto" deixa o item aberto ao carregar
   (sem nenhum "aberto", o primeiro começa aberto). "independente" no
   acordeão permite vários abertos ao mesmo tempo. */
(function () {
  const { Componente, definir, icone, novoId, lerItens, criar } = window.Curso;

  definir('curso-acordeao', class extends Componente {
    montar() {
      const id = novoId('acordeao');
      const itens = lerItens(this);
      const algumAberto = itens.some(({ item }) => item.hasAttribute('aberto'));
      const lista = criar('div', 'acordeao');
      lista.id = id;

      itens.forEach(({ titulo, conteudo, item }, i) => {
        const aberto = item.hasAttribute('aberto') || (!algumAberto && i === 0);
        const painel = novoId('painel');
        const bloco = criar('section', 'acordeao__item');
        bloco.innerHTML = `
          <h4 class="acordeao__cabecalho">
            <button class="acordeao__botao ${aberto ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse"
              data-bs-target="#${painel}" aria-expanded="${aberto}" aria-controls="${painel}">
              <span>${titulo}</span>${icone('chevron-down')}
            </button>
          </h4>`;
        const corpo = criar('div', `acordeao__painel collapse ${aberto ? 'show' : ''}`, [criar('div', 'acordeao__corpo', conteudo)]);
        corpo.id = painel;
        if (!this.hasAttribute('independente')) corpo.dataset.bsParent = `#${id}`;
        bloco.append(corpo);
        lista.append(bloco);
      });

      this.replaceChildren(lista);
    }
  });
})();
