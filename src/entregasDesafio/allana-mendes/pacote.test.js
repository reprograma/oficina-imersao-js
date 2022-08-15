const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Testar pacotes de acordo com as horas totais do projeto", () => {
  test("testar o pacote básico", () => {
    const horasProjeto = 49.99;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("testar o pacote intermediário", () => {
    const horasProjeto = 99.99;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("testar o pacote premium", () => {
    const horasProjeto = 199.99;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_premium");
  });
});

describe("Se o valor der exatamente o valor máximo de horas por pacote, ele deve passar para o próximo pacote", () => {
  test("testar o pacote básico", () => {
    const horasProjeto = 50;
    const result = calcularPacote(horasProjeto);

    expect(result).not.toEqual("pacote_basico");
    expect(result).toEqual("pacote_intermediario");
  });
  test("testar o pacote intermediário", () => {
    const horasProjeto = 100;
    const result = calcularPacote(horasProjeto);

    expect(result).not.toEqual("pacote_intermediario");
    expect(result).toEqual("pacote_premium");
  });
});
