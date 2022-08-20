const {calcularValorPorHora} = require('./valorHora')

describe('calcularValorPorHora', () => {
  it('deve ser uma function', () => {
    expect(typeof calcularValorPorHora).toBe('function');
  })

  it('Quao o valor hora de um sálario de 1500', () => {
    const salario = 1500   
    const resultado = 9
    expect(calcularValorPorHora(salario)).toBe(resultado)
  })  
})

