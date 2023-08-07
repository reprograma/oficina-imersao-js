const {calcularPacote} = require('../dominio/calculadora/Projeto/pacote');

describe('Calcular o pacote correto de acordo com a quantidade de horas', () =>{
    test('retorna pacote básico caso a quantidade de horas seja de até 50', () =>{
        //setup
        const totalDeHorasPorProjeto = 49;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect (resultado).toEqual('pacote_basico');

    });
    test('retorna pacote intermediário caso a quantidade de horas seja igual a  50', () =>{
          //setup
          const totalDeHorasPorProjeto = 50;
          
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect (resultado).toEqual('pacote_basico')


    });
    test('retorna pacote intermediário caso a quantidade de horas seja de  51 até 100', () =>{
         
        //verificação
        const totalDeHorasPorProjeto = 65;
          
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect (resultado).toEqual('pacote_intermediario')


    });
    test('retorna pacote premium caso a quantidade de horas seja de 101 até 200', () =>{
        const totalDeHorasPorProjeto = 190;
          
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect (resultado).toEqual('pacote_premium')

    });
});