// const { describe } = require('node:test')
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('valor por hora', () => {
    test('retorna o valor arrendondamento correto dado o valor recebido no mês', () => {
        const valorPorMES = 5000;

        const result = calcularValorPorHora(valorPorMES);

        expect(result).toEqual(29);
    })
})

