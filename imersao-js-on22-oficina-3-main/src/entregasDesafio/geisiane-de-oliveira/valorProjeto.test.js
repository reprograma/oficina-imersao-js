const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto') 
const pacote  = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor projeto', () => {
    beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Rertornar o valor total para um projeto básico dado as funcionalidade pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidade = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]

        const valorHora = 60
        const result = calcularValorTotalProjeto(funcionalidade, valorHora)

        expect(result).toEqual(2112)
    });
});