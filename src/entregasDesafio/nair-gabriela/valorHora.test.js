const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", () => {
  test("retornar valor arredondado correto dado um valor recebido no mês", () => {
    //setup
    const valorPorMes = 5000;
    //acao
    const result = calcularValorPorHora(valorPorMes);
    //verificacao
    expect(result).toEqual(29);
  });
});
