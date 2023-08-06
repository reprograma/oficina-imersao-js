const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais de um projeto", () => {
  test("Dado uma array de 7 itens com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(72);
  });

  test("Dado uma array de 3 itens com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais", () => {
    //setup
    const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(32);
  });

  test("Dado uma array de 4 itens com as funcionalidades desejadas do projeto sendo uma destas uma string não-pertencente a constante usada, deve retornar erro", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "funcao_inexistente",
    ];

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(NaN);
  });

  test("Dado uma array de 4 itens com as funcionalidades desejadas do projeto sendo uma destas um valor numérico não-pertencente a constante usada, deve retornar erro", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      16,
    ];

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(NaN);
  });

  test("Dado um array vazio deve retornar valor zero", () => {
    //setup
    const funcionalidades = [];

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(0);
  });

  test("Dado número de valor positivo no lugar de um array deve retornar erro", () => {
    //setup
    const funcionalidades = 10;

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Dado número de valor zero no lugar de um array deve retornar erro", () => {
    //setup
    const funcionalidades = 0;

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(Error);
  });

  test("Dado número de valor negativo no lugar de um array deve retornar erro", () => {
    //setup
    const funcionalidades = -10;

    //acao
    const result = calcularHorasDeProjeto(funcionalidades);

    //verificacao
    expect(result).toEqual(Error);
  });
});
