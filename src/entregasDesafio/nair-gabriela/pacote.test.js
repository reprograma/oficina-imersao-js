const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", () => {
  test("Retorna pacote basico caso o numero total de horas seja até 50hr", () => {
    //setup
    const totalDeHorasPorProjeto = 49;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote basico caso o numero total de horas seja exatamente 50hr", () => {
    //setup
    const totalDeHorasPorProjeto = 50;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote intermediario caso o numero total de horas seja entre 51hr e 100hrs", () => {
    //setup
    const totalDeHorasPorProjeto = 52;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna pacote intermediario caso o numero total de horas seja exatamente 100hrs", () => {
    //setup
    const totalDeHorasPorProjeto = 100;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna pacote premium caso o numero total de horas seja entre 101hrs e 200hrs", () => {
    //setup
    const totalDeHorasPorProjeto = 105;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_premium");
  });

  test("Retorna pacote premium caso o numero total de horas seja exatamente 200hrs", () => {
    //setup
    const totalDeHorasPorProjeto = 200;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_premium");
  });
});
