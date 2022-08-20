const {
  calcularValorBaseProjeto,
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Calcula valor total do projeto basico", () => {
  test("Projeto que cabe no pacote básico", () => {
    const listaFuncionalidadesTrabalhadas = [
      "setup",
      "ssr",
      "construcao_1_pagina",
    ];

    expect(calcularValorTotalProjeto(listaFuncionalidadesTrabalhadas));
  });
});

describe("Calcula valor total do projeto premium", () => {
  test("Projeto que cabe no pacote premium", () => {
    const listaFuncionalidadesTrabalhadas = [
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "integracao_mailchimp",
      "integracao_api_propria"
    ];

    expect(calcularValorTotalProjeto(listaFuncionalidadesTrabalhadas));
  });
});
