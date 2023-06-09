const {calcularValorPorHora} = require('./valorHora')

describe('calcularValorPorHora', () => {
  it('deve ser uma function', () => {
    expect(typeof calcularValorPorHora).toBe('function');
  })

  it('deve calcular as horas gastas', () => {
    const salario = 1500   
    const resultado = 9
    expect(calcularValorPorHora(salario)).toBe(resultado)
  })  
})

