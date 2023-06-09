const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

const FUNCIONALIDADE = [ 'ssr' ];
const ALGUMASFUNCIONALIDADES = [
  'setup',
  'construcao_1_pagina',
  'formulario'  
];
const TODASFUNCIONALIDADES = [
  'ssr',
  'setup',
  'formulario',
  'responsividade',
  'otimizacao_seo',
  'construcao_1_pagina',
  'integracao_mailchimp',
  'integracao_api_propria'
];
const TODASFUNCIONALIDADESREPETIDAS = [
  'ssr',
  'setup',
  'formulario',
  'responsividade',
  'otimizacao_seo',
  'construcao_1_pagina',
  'integracao_mailchimp',
  'integracao_api_propria',
  'ssr',
  'setup',
  'formulario',
  'responsividade',
  'otimizacao_seo',
  'construcao_1_pagina',
  'integracao_mailchimp',
  'integracao_api_propria'
];

describe(' Cálculo de horas totais para finalizar o projeto', () => {
  test('Dado um array sem funcionalidades confere o valor', () => { 
    expect(calcularHorasDeProjeto([])).toEqual(0);
  });
  test('Dado um array com uma funcionalidade confere o valor', () => { 
    expect(calcularHorasDeProjeto(FUNCIONALIDADE)).toEqual(8);
  });
  test('Dado um array com algumas funcionalidades confere o valor', () => { 
    expect(calcularHorasDeProjeto(ALGUMASFUNCIONALIDADES)).toEqual(32);
  });
  test('Dado um array com todas funcionalidades confere o valor', () => { 
    expect(calcularHorasDeProjeto(TODASFUNCIONALIDADES)).toEqual(104);
  });
  test('Dado um array com todas funcionalidades repetidas confere o valor', () => { 
    expect(calcularHorasDeProjeto(TODASFUNCIONALIDADESREPETIDAS)).toEqual(208);
  });
});