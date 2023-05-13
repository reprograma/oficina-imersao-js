const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Horas totais para finalizar um projeto', () => {
    it('dado um array com as horas que levam cada funcionalidade, calcula corretamente o valor das horas totais para finalizar um projeto', () => {
  
      const funcionalidades = [
        'setup',
        'formulario'
      ];   

      const result = calcularHorasDeProjeto(funcionalidades);
      expect(result).toEqual(24);
    });
  });