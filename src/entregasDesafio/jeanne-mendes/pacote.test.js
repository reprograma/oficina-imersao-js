const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", ()=>{
    test("Retorna pacote básico caso o numero total de horas seja ate 50h", ()=>{
        //setup
        const totalDeHorasPorProjeto = 49;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_basico")
    });

    test("Retorna pacote básico caso o numero total de horas seja exatamente 50h", ()=>{
        //setup
        const totalDeHorasPorProjeto = 50;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_basico")
    })

    test("Retorna pacote intermediario caso o numero seja entre 51h e 100h", ()=>{
        //setup
        const totalDeHorasPorProjeto = 51;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_intermediario")
    })

    test("Retorna pacote intermediario caso o numero total de horas seja exatamente 100h", ()=>{
        //setup
        const totalDeHorasPorProjeto = 100;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_intermediario")
    })

    test("Retorna pacote premium se o projeto tiver exatamente 200h", ()=>{
        //setup
        const totalDeHorasPorProjeto = 200;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_premium")
    })

})