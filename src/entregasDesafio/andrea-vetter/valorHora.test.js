const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", () => {
  test("Retornar o valor arredondado correto dado um valor de 5000 recebido no mês", () => {
    //setup
    const valorPorMes = 5000;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(29);
  });

  test("Retornar o valor arredondado correto dado um valor de 500 recebido no mês", () => {
    //setup
    const valorPorMes = 500;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(3);
  });

  test("Retornar o valor arredondado correto dado um valor de 50 recebido no mês", () => {
    //setup
    const valorPorMes = 50;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(1);
  });

  test("Retornar o valor arredondado correto dado um valor de 5 recebido no mês", () => {
    //setup
    const valorPorMes = 5;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(1);
  });

  test("Retornar o valor arredondado correto dado um valor numérico em formato string recebido no mês", () => {
    //setup
    const valorPorMes = "5000";

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(29);
  });

  test("Retornar erro de NaN dado um valor não-numérico em formato string recebido no mês", () => {
    //setup
    const valorPorMes = "five thousand";

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(NaN);
  });

  test("Retornar o valor zero dado um valor de zero recebido no mês", () => {
    //setup
    const valorPorMes = 0;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(0);
  });

  test("Retornar o valor zero dado um valor negativo recebido no mês", () => {
    //setup
    const valorPorMes = -5;

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(0);
  });

  test("Retornar erro dado um valor vazio", () => {
    //setup
    const valorPorMes = {};

    //acao
    const result = calcularValorPorHora(valorPorMes);

    //verificacao
    expect(result).toEqual(NaN);
  });
});
