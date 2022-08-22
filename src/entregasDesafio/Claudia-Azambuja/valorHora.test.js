const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

const SALARIO = 6000;
const SALARIONEGATIVO = -100;

describe('valor por hora', () => {
  test('retorna o valor arredondado correto dado o valor recebido no mês', () => {
    expect(calcularValorPorHora(SALARIO)).toEqual(35);
  });
  test('retorna o valor arredondado correto dado o valor recebido no mês', () => {
    expect(calcularValorPorHora(SALARIONEGATIVO)).toEqual('Salario deve ser maior que R$0,00');
  });
});