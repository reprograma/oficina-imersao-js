const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto'); // Replace './your-module' with the correct path to your module

describe('calcularHorasDeProjeto', () => {
  test('should calculate total hours for a valid list of functionalities', () => {
    const listaDeFuncionalidades = ['setup', 'responsividade'];
    const totalHours = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(totalHours).toBe(24);
  });

  test('should throw an error if the argument is not an array', () => {
    const invalidInput = 'test';
    expect(() => calcularHorasDeProjeto(invalidInput)).toThrowError('ListaDeFuncionalidades must be an array');
  });

  test('should throw an error for invalid input', () => {
    const listaDeFuncionalidades = ['func1'];
    expect(() => calcularHorasDeProjeto(listaDeFuncionalidades)).toThrowError("Unknown functionality 'func1'");
  });
});