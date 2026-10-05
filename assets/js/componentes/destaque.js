/* <curso-destaque titulo="Leitura Complementar" icone="file-earmark-text">
     <p>Qualquer conteúdo HTML.</p>
   </curso-destaque>
   Caixa de destaque (leitura complementar, saiba mais, atenção…).
   "icone" é um nome do Bootstrap Icons. */
(function () {
  const { Componente, definir, esc, icone } = window.Curso;

  definir('curso-destaque', class extends Componente {
    montar() {
      const corpo = document.createElement('div');
      corpo.className = 'destaque__corpo';
      corpo.append(...this.childNodes);

      const caixa = document.createElement('aside');
      caixa.className = 'destaque';
      caixa.innerHTML = `
        <p class="destaque__titulo">${icone(this.attr('icone', 'file-earmark-text'))} ${esc(this.attr('titulo', 'Saiba mais'))}</p>`;
      caixa.append(corpo);
      this.append(caixa);
    }
  });
})();
