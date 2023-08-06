const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', ()=> {
    test('retorno do valor arredondado está correto dado o valor informado no mês', ()=> {
        // arrange / setup
        const valorMes = 5000; // dado mockado

        // act / ação
        const resultado = calcularValorPorHora(valorMes);

        // assert / verificação
        expect(resultado).toEqual(29);
    });
});