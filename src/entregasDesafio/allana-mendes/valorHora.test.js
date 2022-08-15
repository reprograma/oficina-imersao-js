const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", () => {
  it("Deve retornar valor arredondado corretamente para o valor mais alto dado o valor recebido no mês", () => {
    const valorPorMes = 5000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(29);
  });

  it("O valor final deve ser arredondado para o valor mais alto", () => {
    const valorPorMes = 5000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).not.toEqual(28);
  });
});
