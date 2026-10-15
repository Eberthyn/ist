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
        { titulo: 'Diagnóstico laboratorial: testes e interpretação de resultados', arquivo: 'modulo2/aula2.html' },
        { titulo: 'Fluxogramas de diagnóstico: a investigação sequencial', arquivo: 'modulo2/aula3.html' },
        { titulo: 'Tratamento e acompanhamento', arquivo: 'modulo2/aula4.html' },
      ],
      resumo: { arquivo: 'modulo2/resumo.html' },
    },
    {
      numero: 3,
      titulo: 'Diagnósticos das hepatites A, B, C, D e E',
      introducao: {},
      aulas: [
        { titulo: 'Aspectos introdutórios: conceituação básica de hepatites virais e epidemiologia geral' },
        { titulo: 'Hepatite A' },
        { titulo: 'Hepatite B' },
        { titulo: 'Hepatite C' },
        { titulo: 'Hepatite D' },
        { titulo: 'Hepatite E' },
        { titulo: 'Investigação das Hepatites Virais: estratégias e desafios' },
      ],
      resumo: {},
    },
    {
      numero: 4,
      titulo: 'Diretrizes para o diagnóstico da gonorreia, da clamídia e de outras IST',
      introducao: { arquivo: 'modulo4/introducao.html' },
      aulas: [
        { titulo: 'Introdução à gonorreia, clamídia e outras ISTs: agentes de infecções, sinais e sintomas', arquivo: 'modulo4/aula1.html' },
        { titulo: 'Diagnósticos sindrômicos', arquivo: 'modulo4/aula2.html' },
        { titulo: 'Testes para diagnóstico das ISTs bacterianas e tricomoníase', arquivo: 'modulo4/aula3.html' },
        { titulo: 'Testes para diagnóstico da infecção causada pelo HTLV', arquivo: 'modulo4/aula4.html' },
      ],
      resumo: { arquivo: 'modulo4/resumo.html' },
    },
    {
      numero: 5,
      titulo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit amet',
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
