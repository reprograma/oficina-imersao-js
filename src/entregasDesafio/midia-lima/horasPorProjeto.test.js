const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const {HORAS_POR_FUNCIONALIDADE} = require('../../dominio/calculadora/constantes/constantes')


const arrayTodasFuncionalidades = [
  'responsividade', 
  'otimizacao_seo', 
  'ssr',
  'formulario', 
  'integracao_api_propria',
  'setup',
  'integracao_mailchimp',
  'construcao_1_pagina'
]

const objFuncionalidades = {
  setup: 8,
  formulario: 16,
  responsividade: 16,
  otimizacao_seo: 16,
  construcao_1_pagina: 8,
  integracao_mailchimp: 16,
  ssr: 8,
  integracao_api_propria: 16
}


describe('calcularHorasDeProjeto', () => {

  it('deve ser uma function', () => {
    expect(typeof calcularHorasDeProjeto).toBe('function');
  }) 

  it('deve calcular as funcionalidades escolhidas', () => {
    const arrayFuncionalidadesTrabalhadas = ['responsividade', 'otimizacao_seo', 'ssr']
    const horasTotais = calcularHorasDeProjeto(arrayFuncionalidadesTrabalhadas)
    expect(horasTotais).toBe(40);
  })

  it('deve calcular duas funcionalidades', () => {
    const arrayFuncionalidadesTrabalhadas = ['formulario', 'integracao_api_propria']
    const horasTotais = calcularHorasDeProjeto(arrayFuncionalidadesTrabalhadas)
    expect(horasTotais).toBe(32);
  })

  it('deve calcular todas as funcionalidades', () => {
    const todasFuncionalidades = calcularHorasDeProjeto(arrayTodasFuncionalidades)
    expect(todasFuncionalidades).toBe(104);
  })

  it('deve retornar um objeto com resultados', () => {    
    expect(objFuncionalidades).toEqual(HORAS_POR_FUNCIONALIDADE);
  })
})

