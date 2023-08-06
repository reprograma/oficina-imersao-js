const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Calculo dos totais de horas considerando as funcionalidades", () => {
    test("Calcular horas de um projeto com 128h", () => {
        //setup
        const funcionalidades = [
            "setup",//8
            "formulario",//16
            "responsividade",//16
            "otimizacao_seo",//16
            "construcao_1_pagina",//8
            "construcao_1_pagina",//8
            "construcao_1_pagina",//8
            "construcao_1_pagina",//8
            "integracao_mailchimp",//16
            "ssr",//8
            "integracao_api_propria"//16
        ];
        //ação
        const result = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(result).toEqual(128)
    })

    test("Retornar 0 se não houver funcionalidades", () => {
        //setup
        const funcionalidades = []
        //ação
        const result = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(result).toEqual(0)

    })

    test("Retornar erro se funcionalidade não existente", () => {
        //setup
        const funcionalidades = ["teste"]
        //ação
        const result = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(result).toEqual(NaN)

    })


    test('Verifica se é do tipo número', () => {
        //setup 
        const funcionalidades = [
            "construcao_1_pagina",
            "construcao_1_pagina",
        ];
        const valorHora = 70;
        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        //verificação
        expect(typeof result).toBe('number')
    })
})


describe("Valor total do projeto básico: até 50h", () => {
    beforeEach(()=> { 
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Retorna o valor total para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora", ()=>{
        //setup 
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]
        const valorHora = 70
        //ação
        const result = calcularValorTotalProjeto(funcionalidades,valorHora)
        //verificação
        expect(result).toEqual(3696)
    })
})

describe("Valor total do projeto intermediário: de 51h até 100h", () => {
    beforeEach(()=> {
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test("Retorna o valor total para um projeto premium dado as funcionalidades pedidas e o valor da hora da desenvolvedora", ()=>{
        //setup 
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]
        const valorHora = 70
        //ação
        const result = calcularValorTotalProjeto(funcionalidades,valorHora)
        //verificação
        expect(result).toEqual(4390)
    })


})

describe("Valor total do projeto intermediário: de 101h até 200h", () => {
    beforeEach(()=> {
        pacote.calcularPacote.mockReturnValue("pacote_premium")
    })
    test("Retornar o valor total de um projeto dado as funcionalidades e o valor/hora da pessoa quando maior que 100h", ()=>{
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
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]
        const valorHora = 70
        //ação
        const result = calcularValorTotalProjeto(funcionalidades,valorHora)
        //verificação
        expect(result).toEqual(9016)
    })
 
})