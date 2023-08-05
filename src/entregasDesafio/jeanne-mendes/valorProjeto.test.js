const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do projeto básico: até 50h", ()=>{
    beforeEach(()=>{
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

describe("Valor total do projeto intermediário: de 51h até 100h", ()=>{
    beforeEach(()=>{
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

        test('Verifica se é do tipo número', () => {
        //setup 
        const funcionalidades = [
            'construcao_1_pagina',
            'construcao_1_pagina',
        ];
        const valorHora = 70;
        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        //verificação
        expect(typeof result).toBe('number')
    })

})

describe("Valor total do projeto intermediário: de 101h até 200h", ()=>{
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