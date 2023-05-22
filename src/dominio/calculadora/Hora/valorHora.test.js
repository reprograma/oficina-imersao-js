//pego a função valor hora 
const {calcularValorPorHora} = require('./valorHora')

test('Retornar o valor recebido por mês', () => {
expect(calcularValorPorHora(5000)).toBe(29)
})

describe('Função para testar valor da hora trabalhada', () => {
    test('Retornar o valor recebido por mês', () => {
        const valorPorMes = 1300
        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(8)
    });

  
});