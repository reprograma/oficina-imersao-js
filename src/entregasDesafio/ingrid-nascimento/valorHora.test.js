const { calcularValorPorHora } = require ("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor Por Hora", () => {
    test("Salário mínio de 1300 reais", () => {

        const salarioMinimo = 1300
        const valorPorHoraCalculado = calcularValorPorHora(salarioMinimo)

        expect(calcularValorPorHora(1300)).toBe(8);
        expect(calcularValorPorHora(1300)).toBeGreaterThan(7);
        expect(calcularValorPorHora(1300)).toBeGreaterThan(7);
    })

})