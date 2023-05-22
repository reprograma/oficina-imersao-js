const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  it('should calculate the correct package for a valid total hours', () => {
    const totalHours = 20;
    const packageResult = calcularPacote(totalHours);
    expect(packageResult).toBe('pacote_basico');
  });

  it('should throw an error if the user enter a negative number', () => {
    const totalHours = -10;
    expect(() => calcularPacote(totalHours)).toThrowError('TotalDeHorasPorProjeto must be greater than 0');
  });

  it('should throw an error if the user enter a string', () => {
    const totalHours = 'test';
    expect(() => calcularPacote(totalHours)).toThrowError('TotalDeHorasPorProjeto must be greater than 0');
  });
});