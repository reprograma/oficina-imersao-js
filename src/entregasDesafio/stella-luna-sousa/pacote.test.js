const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote correto de acordo com a quantidade de horas', ()=>{
    test('retorna pacote básico caso a quantidade de horas seja de até 50', ()=>{
        //arrange
        const totalDeHorasPorProjeto = 50;

        //act
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //assert
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote basico caso a quantidade de horas seja igual a 50', ()=>{
        //arrange
        const totalDeHorasPorProjeto = 50;

        //act
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //assert
        expect(resultado).toEqual('pacote_basico');
    });

    test('retorna pacote intermediário caso a quantidade de horas seja de 51 até 100', ()=>{
        //arrange
        const totalDeHorasPorProjeto = 66;

        //act
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //assert
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote intermediário caso a quantidade de horas seja igual a 100', ()=>{
        //arrange
        const totalDeHorasPorProjeto = 100;

        //act
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //assert
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('retorna pacote premium caso a quantidade de horas seja de 101 até 200', ()=>{
        //arrange
        const totalDeHorasPorProjeto = 130;

        //act
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //assert
        expect(resultado).toEqual('pacote_premium');
    });
});