const {calcularValorPorHora} = require('./valorHora')

test('retornar o valor arrendondado correto dado o valor recebido por mês', () => {
    expect(calcularValorPorHora(5000)).toBe(29)
})

describe('Valor por hora', () => {
    test("retornar o valor arrendondado correto dado o valor recebido por mês", () => {

        const valorPorMes = 1300;    
        
        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(8);        
    });    
});