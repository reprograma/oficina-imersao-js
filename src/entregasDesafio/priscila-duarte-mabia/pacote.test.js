const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote", () => {
  test("Pacote de todas as funcionalidades", () => {
    const horas = 100;

    expect(calcularPacote(horas)).toBe("pacote_premium");
  });
});
