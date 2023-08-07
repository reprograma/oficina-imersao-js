const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('calcular pacote correto de acordo com a quantidade de horas', () => {
    test('retorna pacote básico caso a quantidade de horas seja de até 50', () => {
        //setup
        const totalDeHorasPorProjeto = 49;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)

        //verficação 
        expect(resultado).toEqual('pacote_basico')

    });
    test('retorna pacote básico caso a quantidade de horas seja de igual a 50', () => {
        //setup
        const totalDeHorasPorProjeto = 50;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)

        //verficação 
        expect(resultado).toEqual('pacote_basico')

    });
    test('retorna pacote itermediario caso a quantidade de horas seja de 51 até 100', () => {
        //setup
        const totalDeHorasPorProjeto = 55;

        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)

        //verficação 
        expect(resultado).toEqual('pacote_intermediario')
    });
    test('retorna pacote intermediario caso a quantidade de horas seja de igual a 100', () => {
         //setup
         const totalDeHorasPorProjeto = 100;

         //ação
         const resultado = calcularPacote(totalDeHorasPorProjeto)
 
         //verficação 
         expect(resultado).toEqual('pacote_intermediario')
    });
    test('retorna pacote premium caso a quantidade de horas seja de 101 até 200', () => {
         //setup
         const totalDeHorasPorProjeto = 125;

         //ação
         const resultado = calcularPacote(totalDeHorasPorProjeto)
 
         //verficação 
         expect(resultado).toEqual('pacote_premium')
    });
    test('retorna pacote premium caso a quantidade de horas seja de igual a 200', () => {
         //setup
         const totalDeHorasPorProjeto = 200;

         //ação
         const resultado = calcularPacote(totalDeHorasPorProjeto)
 
         //verficação 
         expect(resultado).toEqual('pacote_premium')
    });
});