const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote", () => {
  test("calcular pacote quando o total de horas for igual a  50", () => {
    const totalHorasProjeto = 50;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("calcular pacote quando o total de horas for igual a  100", () => {
    const totalHorasProjeto = 100;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_intermediario");
  });

  test("calcular pacote quando o total de horas for igual a  200", () => {
    const totalHorasProjeto = 200;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_premium");
  });

  test("calcular pacote quando o total de horas for igual a  0", () => {
    const totalHorasProjeto = 0;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("A entrada deve ser maior que 0");
  });

  test("calcular pacote quando o total de horas for menor que 0", () => {
    const totalHorasProjeto = -1;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("A entrada deve ser maior que 0");
  });

    test("calcular pacote quando o total de horas for null", () => {
    const totalHorasProjeto = null;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("A entrada deve ser maior que 0");
    });

  test("calcular pacote quando o total de horas for um valor não númerico", () => {
    const totalHorasProjeto = "a";
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("A entrada deve ser um número");
  });

  test("calcular pacote quando o total de horas for maior que o máximo permitido", () => {
    const totalHorasProjeto = 201;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("Pacote não disponível");
  });

  test("calcular pacote quando o total de horas for decimal", () => {
    const totalHorasProjeto = 1.5;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("calcular pacote quando o total de horas for um decimal com mais de uma casa", () => {
    const totalHorasProjeto = 0.55;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_basico");
  });
});
