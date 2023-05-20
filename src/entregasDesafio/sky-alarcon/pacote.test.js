const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Teste da análise de pacotes:", () => {
    test("10h", () => {
        const horasProjeto = 10
        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })
    test("50h", () => {
        const horasProjeto = 50
        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })
    test("100h", () => {
        const horasProjeto = 100
        expect(calcularPacote(horasProjeto)).toBe("pacote_intermediario")
    })
    test("101h", () => {
        const horasProjeto = 101
        expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
    })
})