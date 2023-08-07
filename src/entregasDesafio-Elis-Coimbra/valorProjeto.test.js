const {calcularValorTotalProjeto} = require('../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../dominio/calculadora/Projeto/pacote');
const { beforeEach } = require('node:test');

jest.mock('../dominio/calculadora/Projeto/pacote');

describe('Valor Total do Projeto', () =>{
    beforeEach( () =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });
    test('Retornando valor total do projeto do pacote de acordo com as funcionalidade passadas',() => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina'
        ]
        const valorHora = 50;

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(resultado).toEqual(3696);

      });
});
