const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote", () => {
  test("Pacote de todas as funcionalidades", () => {
    const horasTotal = 104;

    expect(calcularPacote(horasTotal)).toBe(104);
  });
});
