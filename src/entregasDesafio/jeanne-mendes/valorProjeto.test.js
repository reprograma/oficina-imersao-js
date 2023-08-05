const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do projeto", ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Retornar o valor total de um projeto dado as funcionalidades e o valor/hora da pessoa quando até 50h", ()=>{
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

    test("Retornar o valor total de um projeto dado as funcionalidades e o valor/hora da pessoa de 51h a 100h", ()=>{
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
        expect(result).toEqual(4312)
    })

})

describe("Valor total do projeto", ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test("Retornar o valor total de um projeto dado as funcionalidades e o valor/hora da pessoa de 51h a 100h", ()=>{
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

describe("Valor total do projeto", ()=>{
    beforeEach(()=>{
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