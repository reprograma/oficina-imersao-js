const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe ('Calcular valor total do pacote', () => {
  test('deve retornar pacote_basico', () => {
    expect(calcularPacote(1)).toEqual('pacote_basico');
    expect(calcularPacote(50)).toEqual('pacote_basico');
  });
  test('deve retornar pacote_intermediario', () => {
    expect(calcularPacote(51)).toEqual('pacote_intermediario');
    expect(calcularPacote(100)).toEqual('pacote_intermediario');
  });
  test('deve retornar pacote_premium', () => {
    expect(calcularPacote(101)).toEqual('pacote_premium');
    expect(calcularPacote(200)).toEqual('pacote_premium');
  });
});