const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');

describe("Salário mínimo de 1300", () => {
  const valorPorHoraCalculado = calcularValorPorHora(1300)
  const valorPorHoraEsperado = 8;

  test("Salário mínimo de 1300 paga 8/hora", () => {
    expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
  })

  test('Valor por hora seja maior que 0', () => {
    expect(valorPorHoraCalculado).toBeGreaterThan(0)
  })
})

