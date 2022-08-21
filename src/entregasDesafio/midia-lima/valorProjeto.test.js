const {calcularValorBaseProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');

describe('calcularValorTotalProjeto', () => {
  it('deve ser uma function', () => {
    expect(typeof calcularValorBaseProjeto).toBe('function');
  })  

  it('deve multiplicar os valores', () => {
    var num1 = 1
    var num2 = 2
    expect(calcularValorBaseProjeto(num1, num2)).toBe(2);
  }) 

  it('deve calcular o valor total do projeto', () => {
    const arrayFuncionalidadesTrabalhadas = ['responsividade', 'otimizacao_seo', 'ssr']
    const hora = 9
    expect(calcularValorTotalProjeto(arrayFuncionalidadesTrabalhadas, hora)).toBe(396);
  }) 

})