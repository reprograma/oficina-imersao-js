const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", () => {
  test("Retornar pacote básico caso o número total de horas seja até 50h", () => {
    //setup
    const totalDeHorasPorProjeto = 49;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retornar pacote básico caso o número total de horas seja exatas 50h", () => {
    //setup
    const totalDeHorasPorProjeto = 50;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retornar pacote intermediario caso o numero total de horas seja maior que 50h e menor que 100h", () => {
    //setup
    const totalDeHorasPorProjeto = 99;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retornar pacote intermediario caso o numero total de horas seja exatas 100h", () => {
    //setup
    const totalDeHorasPorProjeto = 100;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retornar pacote premium caso o numero total de horas maior que 100h e menor que 200h", () => {
    //setup
    const totalDeHorasPorProjeto = 199;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_premium");
  });

  test("Retornar pacote premium caso o numero total de horas seja exatas de 200h", () => {
    //setup
    const totalDeHorasPorProjeto = 200;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_premium");
  });

  test("Retornar erro caso o numero total de horas seja maior que 200h", () => {
    //setup
    const totalDeHorasPorProjeto = 201;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Retornar pacote básico caso o número total de horas seja até 50h mas esteja numa string numérica", () => {
    //setup
    const totalDeHorasPorProjeto = "49";

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retornar erro caso o valor total de horas esteja numa string não-numérica", () => {
    //setup
    const totalDeHorasPorProjeto = "forty nine";

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Retornar erro caso o número total de horas seja zero", () => {
    //setup
    const totalDeHorasPorProjeto = 0;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Retornar erro caso o número total de horas seja vazio", () => {
    //setup
    const totalDeHorasPorProjeto = {};

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Retornar erro caso o número total de horas seja negativo", () => {
    //setup
    const totalDeHorasPorProjeto = -51;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toEqual(Error);
  });
});
