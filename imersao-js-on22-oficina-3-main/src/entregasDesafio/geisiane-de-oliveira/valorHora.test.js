const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Valor por hora', () => {
    test('Retorna o valor arredondado correto, dado o valor recebido no mês', () => {
        const valorPorMes = 2000
        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(12)
    });
});