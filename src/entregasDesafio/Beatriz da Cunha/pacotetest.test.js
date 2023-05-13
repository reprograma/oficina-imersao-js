const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular o pacote correto de acordo com os projetos', () => {

    //aqui vai retornar o pacote que você deseja
    test('Retornar pacote básico caso o número total de horas seja até 50', () => {

        //função de horas por projeto
        const totalDeHorasPorProjeto = 49;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');

    });


    test('Retornar pacote básico caso o número total de horas seja 50', () => {

        const totalDeHorasPorProjeto = 50;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');

    })


    test('Retornar pacote intermediario caso o número seja 100', () => {

        const totalDeHorasPorProjeto = 99;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');

    });

    test('Retornar pacote intermediario caso o número seja 100', () => {

        const totalDeHorasPorProjeto = 100;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');

    });

    test('Retornar pacote premium caso o número seja 200', () => {

        const totalDeHorasPorProjeto = 200;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');

    });

});