const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');


describe('calcularHorasDeProjeto', () => {
  it('deve ser uma function', () => {
    expect(typeof calcularHorasDeProjeto).toBe('function');
  }) 
})

