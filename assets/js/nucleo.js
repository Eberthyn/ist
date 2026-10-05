/* =====================================================================
   NÚCLEO
   Lê curso.config.js, monta a lista linear de páginas e oferece os
   utilitários usados pelos componentes.
   ===================================================================== */
(function () {
  const config = window.CURSO_CONFIG;
  const { raiz } = window.Curso;

  /** Escapa texto para uso seguro dentro de HTML. */
  const esc = (texto = '') =>
    String(texto).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /** Caminho da raiz do curso -> URL absoluta. */
  const url = (caminho) => raiz + caminho;

  // ---- Lista linear de páginas (ordem de navegação) -------------------
  const paginas = [];
  const nova = (dados) => {
    const pagina = { ...dados, url: dados.arquivo ? url(dados.arquivo) : null };
    paginas.push(pagina);
    return pagina;
  };

  nova({ tipo: 'home', arquivo: config.home, rotulo: 'Home', rotuloNav: 'Página Inicial' });

  config.modulos.forEach((modulo) => {
    const n = modulo.numero;
    modulo.paginas = [];
    const doModulo = (dados) => modulo.paginas.push(nova({ modulo, ...dados }));

    if (modulo.introducao) {
      doModulo({ tipo: 'intro', ...modulo.introducao, rotulo: 'Introdução', rotuloNav: `Introdução Módulo ${n}` });
    }
    (modulo.aulas || []).forEach((aula, i) => {
      doModulo({ tipo: 'aula', ...aula, numero: i + 1, rotulo: `Aula ${i + 1}`, rotuloNav: `Módulo ${n} Aula ${i + 1}` });
    });
    if (modulo.resumo) {
      doModulo({ tipo: 'resumo', ...modulo.resumo, rotulo: 'Resumo do Módulo', rotuloNav: `Resumo Módulo ${n}` });
    }
  });

  if (config.encerramento) {
    nova({ tipo: 'encerramento', ...config.encerramento, rotulo: 'Encerramento', rotuloNav: 'Encerramento' });
  }

  // Páginas extras (créditos, referências…) ficam fora da sequência.
  const extras = (config.extras || []).map((extra) => ({ tipo: 'extra', ...extra, url: url(extra.arquivo) }));

  // ---- Página atual ---------------------------------------------------
  const endereco = location.href.split(/[?#]/)[0];
  const ehAtual = (p) => p.url && (p.url === endereco || (p.tipo === 'home' && endereco === raiz));
  const atual = paginas.find(ehAtual) || extras.find(ehAtual) || null;

  const indice = paginas.indexOf(atual);
  const anterior = indice > 0 ? paginas[indice - 1] : null;
  const proxima = indice >= 0 && indice < paginas.length - 1 ? paginas[indice + 1] : null;

  // ---- Base dos componentes -------------------------------------------
  /** Garante que montar() rode uma única vez, mesmo se o elemento for movido. */
  class Componente extends HTMLElement {
    connectedCallback() {
      if (this.montado) return;
      this.montado = true;
      this.montar();
    }
    /** Lê um atributo com valor padrão. */
    attr(nome, padrao = '') {
      return this.getAttribute(nome) ?? padrao;
    }
  }

  const definir = (nome, classe) => customElements.define(nome, classe);
  const icone = (nome) => `<i class="bi bi-${nome}" aria-hidden="true"></i>`;

  Object.assign(window.Curso, {
    config, paginas, extras, atual, anterior, proxima,
    home: paginas[0],
    esc, url, icone, definir, Componente,
  });
})();
