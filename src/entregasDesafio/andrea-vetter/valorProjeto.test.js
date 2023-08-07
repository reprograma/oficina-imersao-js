const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor total do projeto", () => {
  test("Retornar erro por não receber valor do pacote", () => {
    //não consigo fazer um teste neste mesmo .js sem que eu precise indicar o valor mockado ou que não uso os valores dos BeforeEach já mockados.
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];
    const valorHora = 70;

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verificacao
    expect(result).toEqual(NaN);
  });

  describe("Valor total do projeto quando o pacote é básico", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_basico");
    });
    test("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3696);
    });

    test("Retornar valor total de um projeto dado as muitas funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "integracao_api_propria",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(8008);
    });

    test("Retornar valor total de um projeto dado as funcionalidades e um alto valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 3000;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(158400);
    });

    test("Retornar erro no valor total do projeto dado as funcionalidades sendo uma não-existente na constante e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "funcao_inexistente",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "70";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3696);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string não-numérica", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "seventy";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar zero dado as funcionalidades e o valor hora zero da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 0;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar zero dado as funcionalidades e o valor hora negativo da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = -70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado as funcionalidades e o valor hora vazio da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = {};

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar zero dado nenhuma funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado valor zero na funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 0;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico positivo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico negativo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = -100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });
  });

  describe("Valor total do projeto quando o pacote for intermediário", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    });

    test("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3763);
    });

    test("Retornar valor total de um projeto dado as muitas funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "integracao_api_propria",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(8154);
    });

    test("Retornar valor total de um projeto dado as funcionalidades e um alto valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 3000;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(161280);
    });

    test("Retornar erro no valor total do projeto dado as funcionalidades sendo uma não-existente na constante e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "funcao_inexistente",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "70";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3763);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string não-numérica", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "seventy";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar zero dado as funcionalidades e o valor hora zero da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 0;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar zero dado as funcionalidades e o valor hora negativo da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = -70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado as funcionalidades e o valor hora vazio da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = {};

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar zero dado nenhuma funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado valor zero na funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 0;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico positivo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico negativo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = -100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });
  });

  describe("Valor total do projeto quando o pacote for premium", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_premium");
    });

    test("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3864);
    });

    test("Retornar valor total de um projeto dado as muitas funcionalidades e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "integracao_api_propria",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(8372);
    });

    test("Retornar valor total de um projeto dado as funcionalidades e um alto valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 3000;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(165600);
    });

    test("Retornar erro no valor total do projeto dado as funcionalidades sendo uma não-existente na constante e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "funcao_inexistente",
      ];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "70";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(3864);
    });

    test("Retornar o valor total do projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora em string não-numérica", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = "seventy";

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });
    
    test("Retornar zero dado as funcionalidades e o valor hora zero da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = 0;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar zero dado as funcionalidades e o valor hora negativo da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = -70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado as funcionalidades e o valor hora vazio da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];
      const valorHora = {};

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(NaN);
    });

    test("Retornar zero dado nenhuma funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = [];
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(0);
    });

    test("Retornar erro dado valor zero na funcionalidade e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 0;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico positivo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = 100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });

    test("Retornar erro dado funcionalidade em valor numérico negativo e o valor hora da pessoa desenvolvedora", () => {
      //setup
      const funcionalidades = -100;
      const valorHora = 70;

      //acao
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      //verificacao
      expect(result).toEqual(Error);
    });
  });
});
