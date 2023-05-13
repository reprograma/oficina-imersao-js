const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
  it('calcula corretamente o valor por hora trabalhada arredondado para cima', () => {
    const rendaMensal = 5000;

    const result = calcularValorPorHora(rendaMensal);

    expect(result).toEqual(29);
  });
});