// const { describe, test } = require('node:test')
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote de acordo com cada projeto', () => {
    test('Retorna pacote básico caso o número total de horas seja até 50',() => {
        const totalDeHorasPorProjeto = 49;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico')
    });

    test('Retorna pacote básico caso o número total de horas seja 50', () => {
        const totalDeHorasPorProjeto = 50;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico')
    });
    
});
