const{ calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js") // funcao interna que define um mock

describe("Valor total do projeto", ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })

    test ("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora",()=>{
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]
        const valorHora = 70;
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(result).toEqual(3696)
    });

    test ("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora",()=>{
        //setup
        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]
        const valorHora = 50;
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(result).toEqual(5720)
    });
    test ("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desenvolvedora",()=>{
        //setup
        const funcionalidades = [
            "construcao_1_pagina"
        ]
        const valorHora = 30;
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(result).toEqual(264)
    });
})