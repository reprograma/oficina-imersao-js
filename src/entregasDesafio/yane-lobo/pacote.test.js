const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Valor total de horas do pacote', () => {
  const testCases = [
    { horasPorProjeto: 49, pacoteEsperado: 'pacote_basico' },
    { horasPorProjeto: 50, pacoteEsperado: 'pacote_basico' },
    { horasPorProjeto: 99, pacoteEsperado: 'pacote_intermediario' },
    { horasPorProjeto: 100, pacoteEsperado: 'pacote_intermediario' },
    { horasPorProjeto: 199, pacoteEsperado: 'pacote_premium' },
    { horasPorProjeto: 200, pacoteEsperado: 'pacote_premium' },
  ];

  testCases.forEach(({ horasPorProjeto, pacoteEsperado }) => {
    it(`Retorna ${pacoteEsperado} caso o número total de horas seja ${horasPorProjeto}`, () => {
      const result = calcularPacote(horasPorProjeto);
      expect(result).toEqual(pacoteEsperado);
    });
  });
});