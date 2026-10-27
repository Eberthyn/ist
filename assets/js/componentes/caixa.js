/* <curso-caixa tipo="refletir|sabia" [titulo="..."]> …conteúdo… </curso-caixa>
   Caixa com cabeçalho azul: "Para refletir", "Você sabia?" ou um título livre. */
(function () {
  const { Componente, definir, esc, icone, criar } = window.Curso;

  const TIPOS = {
    refletir: { titulo: 'Para refletir', icone: 'chat-left-dots' },
    sabia: { titulo: 'Você sabia?', icone: 'question-circle-fill' },
    importante: { titulo: 'Importante', icone: 'exclamation-triangle-fill' },
  };

  definir('curso-caixa', class extends Componente {
    montar() {
      const tipo = TIPOS[this.attr('tipo')] || { titulo: 'Atenção', icone: 'info-circle-fill' };
      const caixa = criar('aside', 'caixa');
      caixa.innerHTML = `<p class="caixa__titulo">${icone(tipo.icone)} ${esc(this.attr('titulo', tipo.titulo))}</p>`;
      caixa.append(criar('div', 'caixa__corpo', [...this.childNodes]));
      this.replaceChildren(caixa);
    }
  });
})();
