const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular pacote correto para cada projeto",()=>{

    test("Retorna pacote básico caso o numero total de horas seja até 50h",() =>{
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto)
    expect(result).toEqual("pacote_basico")
    });

    test("Retorna pacote basico caso o numero total de horas seja exatamente 50",() =>{
        const totalDeHorasPorProjeto = 50;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_basico")
    });

    test("Retorna pacote intermediario caso o numero total de horas seja entre 51 e 100",() =>{
        const totalDeHorasPorProjeto = 70;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_intermediario")
    });

    test("Retorna pacote intermediario caso o numero total de horas seja exatamente 100",() =>{
        const totalDeHorasPorProjeto = 100;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_intermediario")
    });

    test("Retorna pacote premium caso o numero total de horas seja exatamente 200",() =>{
        const totalDeHorasPorProjeto = 200;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_premium")
    })
})

    