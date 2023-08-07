const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('valor total do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

  test(' retorna o valor total do projeto do pacote basico, de acordo com as funcionalidades passadas' , () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
    ];
    const valorHora = 70;

    const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
    
    expect(resultado).toEqual(3696);
    });
});