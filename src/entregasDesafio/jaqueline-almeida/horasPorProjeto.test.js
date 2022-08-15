

const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcúlo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorne a soma ds horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
        ]

        const result = calcularHorasDeProjeto(funcionalidades)
        expect(result).toEqual(32)
    })
})