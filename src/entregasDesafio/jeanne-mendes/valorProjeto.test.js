const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

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