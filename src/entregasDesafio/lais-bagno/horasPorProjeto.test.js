const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo do horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'responsividade'
        ]

        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(24)
    })
})