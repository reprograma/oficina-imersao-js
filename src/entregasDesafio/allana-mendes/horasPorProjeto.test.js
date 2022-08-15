const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcula as horas necessárias para finalizar um projeto", () => {
  it("Dado um array com as funcionalidades desejada do projeto, retorne a soma das horas necessárias", () => {
    const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(32);
  });
});
