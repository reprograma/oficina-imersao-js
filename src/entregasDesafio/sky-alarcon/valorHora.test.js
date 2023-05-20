const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por hora", () => {
    test("Salario mínimo de 1300 reais", () => {
        expect(calcularValorPorHora(1300)).toBe(8);
    });
    test("Salario de 2200", () => {
        expect(calcularValorPorHora(2200)).toBe(13)
    })
})