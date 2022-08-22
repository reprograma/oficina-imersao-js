
const{ calcularValorPorHora }= require('../../dominio/calculadora/Hora/valorHora');

describe ('Valor por hora',() => {
    test('retorna o valor arredondado correto dado o valor recebido no mẽs', () =>{
        const valorPormes = 2000
        const result = calcularValorPorHora(valorPormes)
        expect(result).toEqual(12)
    });
});


