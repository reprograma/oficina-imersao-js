const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');
describe('Testes para o cálculo do valor por hora', () => {
    test('Retorna o valor arredondando correto dado o valor recebido no mês', () => {
        const valorPorMes = 5000;
        const result = calcularValorPorHora(valorPorMes);
        expect(result).toEqual(29);
    }); //Tanto faz it ou test
});
