const {calcularValorPorHora} = require('../../src/entregasDesafio/sarahGuerreiro/valorHora.test.js')

test('1 + 2 = 3', () => {
  expect(1 + 2).toBe(3)
})


test('calcular valor/horapara 1000R/mes', () => {
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6 // 6R/hora

    expect(resultadoCalculado).toBe{resultadoEsperado}
    expect(resultadoCalculado).not.toBe{5}

})