const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

const VALORHORA = 60;
const FUNCIONALIDADES = [
  'setup',
  'construcao_1_pagina',
  'formulario'
];

describe('valor projeto', () => {
  beforeEach(() => { 
    calcularPacote.mockReturnValue('pacote_basico');
  });
  test('confere se a função esta realmente sendo mockada', () => {
    expect(calcularPacote(101)).toEqual('pacote_basico');
  })  
  test('retorna o valor total para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
    expect(calcularValorTotalProjeto(FUNCIONALIDADES, VALORHORA)).toEqual(2112);
  });
});