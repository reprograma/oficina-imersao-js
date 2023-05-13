const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote de acordo com cada projeto', () => {
  test('Retorne pacote básico caso o número total de horas seja até 50', () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_basico');
  });

  test('Retorne pacote básico caso o número total de horas seja exatamente 50', () => {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_basico');
  });

  test('Retorna pacote intermediário caso o número total de horas seja 50 ou até 100', () => {
    const totalDeHorasPorProjeto = 78;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_intermediario');
  });

  test('Retorne pacote intermediário caso o número total de horas seja exatamente 100', () => {
    const totalDeHorasPorProjeto = 100;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_intermediario');
  });

  test('Retorna pacote premium caso o número total de horas seja 100 ou até 200', () => {
    const totalDeHorasPorProjeto = 125;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_premium');
  });

  test('Retorne pacote premium caso o número total de horas seja exatamente 200', () => {
    const totalDeHorasPorProjeto = 200;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_premium');
  });
});