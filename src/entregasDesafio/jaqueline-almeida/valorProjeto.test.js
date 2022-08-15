const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");


jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("Retornar o valor total para um projeto básico dadas as funcionalides pedidas e o valor da desenvolvedora", () => {
      const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];

      const valorHora = 70;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(result).toEqual(2464);
      //antes da execução do teste
    });
});
