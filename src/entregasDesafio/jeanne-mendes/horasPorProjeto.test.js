const{ calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais de um projeto",() => {
    test("Dado uma array com as funcionalidades do projeto, deve retornar a soma de horas necessarias totais", ()=>{
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ]
        //ação
        const result = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(result).toEqual(72)
    })
})