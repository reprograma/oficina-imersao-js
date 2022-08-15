const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Testar pacotes de acordo com as horas totais de projeto", () => {
  test("Testar o pacote básico (<=50)", () => {
    const horasProjeto = 50;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_basico");
  });
  test("Testar o pacote intermediário (>50 e <=100)", () => {
    const horasProjeto = 100;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_intermediario");
  });
  test("Testar o pacote premium (>100 e <=200)", () => {
    const horasProjeto = 200;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
