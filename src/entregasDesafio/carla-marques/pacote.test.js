const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")
describe('Testes para o cálculo do pacote para cada projeto', () => {
    test('Dado um número de horas menor que 50 retorna o pacote basico', () => {
        const horas = 45;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_basico');
    });
    test('Dado um número igual 50 retorna pacote básico', () => {
        const horas = 50;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_basico');
    });
    test('Dado um número maior que 50 e menor que 100 retorna pacote intermediário', () => {
        const horas = 78;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_intermediario');
    });
    test('Dado um número igual à 100 retorna pacote intermediário', () => {
        const horas = 100;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_intermediario');
    });
    test('Dado um número de horas maior que 100 retorna o pacote premium', () => {
        const horas = 104;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_premium');
    });
});
