/* =====================================================================
   CONFIGURAÇÃO DO CURSO
   Único arquivo que descreve a estrutura: título, módulos, aulas e links.
   Menu lateral, trilha (breadcrumb), botões Voltar/Avançar e cards da
   home são gerados a partir daqui.

   - "arquivo" é o caminho a partir da raiz do curso.
   - Página sem "arquivo" aparece no menu como texto (ainda não publicada).
   ===================================================================== */
window.CURSO_CONFIG = {
  titulo: {
    chamada: 'Diretrizes para o diagnóstico de',
    destaque: ['Infecções Sexualmente', 'Transmissíveis'],
  },

  home: 'index.html',

  // Links da barra superior
  extras: [
    { rotulo: 'Créditos', icone: 'list-ul', arquivo: 'creditos.html' },
    { rotulo: 'Referências', icone: 'file-earmark-text', arquivo: 'referencias.html' },
  ],

  modulos: [
    {
      numero: 1,
      titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      introducao: {},
      aulas: [
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
      ],
      resumo: {},
    },
    {
      numero: 2,
      titulo: 'Diretrizes para o diagnóstico da sífilis',
      introducao: { arquivo: 'modulo2/introducao.html' },
      aulas: [
        {
          titulo: 'Introdução à sífilis: o agente etiológico, formas de transmissão, manifestações clínicas e dados epidemiológicos',
          arquivo: 'modulo2/aula1.html',
        },
        { titulo: 'Diagnóstico laboratorial: testes e interpretação de resultados' },
        { titulo: 'Fluxogramas de diagnóstico: a investigação sequencial' },
        { titulo: 'Tratamento e acompanhamento' },
      ],
      resumo: {},
    },
    {
      numero: 3,
      titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      introducao: {},
      aulas: [
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
      ],
      resumo: {},
    },
    {
      numero: 4,
      titulo: 'Diretrizes para o diagnóstico da gonorreia, da clamídia e de outras IST',
      introducao: {},
      aulas: [
        { titulo: 'Introdução à gonorreia, clamídia e outras ISTs: agentes de infecções, sinais e sintomas' },
        { titulo: 'Diagnósticos sindrômicos' },
        { titulo: 'Testes para diagnóstico das ISTs bacterianas e tricomoníase' },
        { titulo: 'Testes para diagnóstico da infecção causada pelo HTLV' },
      ],
      resumo: {},
    },
    {
      numero: 5,
      titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      introducao: {},
      aulas: [
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
        { titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
      ],
      resumo: {},
    },
  ],

  encerramento: {},
};
