const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe('calcularValorTotalProjeto', () => {
  test('should calculate the correct total value for a valid project', () => {
    const funcionalidades = ['setup', 'responsividade'];
    const valorHora = 50;
    const totalValue = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(totalValue).toBe(1320);
  });

  test('should throw an error if the argument is not an array', () => {
    const funcionalidades = 'invalid';
    const valorHora = 50;
    expect(() => calcularValorTotalProjeto(funcionalidades, valorHora)).toThrowError('funcionalidades must be an array');
  });
  
  test('should throw an error if valorHora is not positive', () => {
    const funcionalidades = ['setup'];
    const valorHora = -2;
    expect(() => calcularValorTotalProjeto(funcionalidades, valorHora)).toThrowError('valorHora must be greater than 0');
  });

  test('should default to 0 for an unknown package', () => {
    const funcionalidades = [];
    const valorHora = 50;
    const totalValue = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(totalValue).toBe(0);
  });
});
