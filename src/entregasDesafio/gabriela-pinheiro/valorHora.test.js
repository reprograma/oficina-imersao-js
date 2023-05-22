const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcularValorPorHora', () => {
  it('should calculate the value per hour correctly', () => {
    const monthlyIncome = 10000;
    const expectedValue = 57;
    expect(calcularValorPorHora(monthlyIncome)).toBe(expectedValue);
  });

  it('should return 0 when the monthly income is 0', () => {
    const monthlyIncome = 0;
    expect(calcularValorPorHora(monthlyIncome)).toBe(0);
  });

  it('should throw an error if the argument is negative', () => {
    const monthlyIncome = -1;
    expect(() => calcularValorPorHora(monthlyIncome)).toThrowError('Invalid input!');
  });
});