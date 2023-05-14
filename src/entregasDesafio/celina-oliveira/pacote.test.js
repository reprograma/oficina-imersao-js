const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe ('Calcular pacote de acordo com cada projeto', () => {
    test('Retorna pacote basico caso o numero total de horas seja ate 50', () => {
        const totalDeHorasPorProjeto = 49;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');

    });
    test('Retorna pacote basico caso o numero total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50;

        const result = calcularPacote (totalDeHorasPorProjeto);
        expect (result).toEqual('pacote_basico');
    });
    test('Retorna pacote intermediario caso o numero total de horas seja ate 100', () => {
        const totalDeHorasPorProjeto = 80;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');

    });
    test('Retorna pacote intermediario caso o numero total de horas seja exatamente 100', () => {
        const totalDeHorasPorProjeto = 100;

        const result = calcularPacote (totalDeHorasPorProjeto);
        expect (result).toEqual('pacote_intermediario');
    });
    test('Retorna pacote basico caso o numero total de horas seja ate 200', () => {
        const totalDeHorasPorProjeto = 198;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');

    });
    test('Retorna pacote basico caso o numero total de horas seja exatamente 200', () => {
        const totalDeHorasPorProjeto = 200;

        const result = calcularPacote (totalDeHorasPorProjeto);
        expect (result).toEqual('pacote_premium');
    });
});
