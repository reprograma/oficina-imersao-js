const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote', () => {
    test('calcular o pacote dado um total de hora por projeto', () => {
        const totalHorasProjeto = 60;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario');
    });

    test('calcular o pacote dado um total de hora por projeto', () => {
        const totalHorasProjeto = 50;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('calcular o pacote dado um total de hora por projeto', () => {
        const totalHorasProjeto = 200;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium');
    });



});