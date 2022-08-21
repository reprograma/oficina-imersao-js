const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  it('deve ser uma função', () => {
    expect(typeof calcularPacote).toBe('function');
  })

  it('deve calcular o pacote', () => {
    const horasTotal = 104
    expect(calcularPacote(horasTotal)).toBe('pacote_premium');
  })
  
})