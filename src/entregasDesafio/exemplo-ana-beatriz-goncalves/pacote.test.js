const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote correto de acordo com a quantidade de horas', () => {

    test('retorna pacote básico caso a quantidade de horas seja menos de 50', () => {
        const totalDeHorasPorProjeto = 2;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_basico');
    });
    
    test('retorna pacote básico caso a quantidade de horas seja até 50', () => {
        const totalDeHorasPorProjeto = 50;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote intermediário caso a quantidade de horas seja de 51 até 100', () => {
        const totalDeHorasPorProjeto = 87;
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote intermediário caso a quantidade de horas seja até 100', () => {
        const totalDeHorasPorProjeto = 100;
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote premium caso a quantidade de horas seja de 101 até 200', () => {
        const totalDeHorasPorProjeto = 189;
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_premium');
    });

    test('retorna pacote premium caso a quantidade de horas seja até 200', () => {
        const totalDeHorasPorProjeto = 200;
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_premium');
    });

    test('ao definir totalDeHorasProjeto com string CINQUENTA deve lançar um erro do tipo TypeError com a mensagem específica', () => {
        const totalDeHorasPorProjeto = 'CINQUENTA';
        expect(() => {
            calcularPacote(totalDeHorasPorProjeto);
        }).toThrowError(TypeError, "Cannot read properties of undefined (reading '0')");
    });

});