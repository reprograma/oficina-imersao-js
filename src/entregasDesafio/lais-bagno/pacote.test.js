const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote de acordo com cada projeto', () => {
    test('Retorna pacote básico caso o número total de horas seja até 50', () => {
        const totalDeHorasPorProjeto = 49;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico')
    })
     
    test('Retorna pacote básico caso o número total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico')
    })

    test('Retorna pacote intermediário caso o número total de horas seja até 100', () => {
        const totalDeHorasPorProjeto = 99;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario')
    })

    test('Retorna pacote intermediário caso o número total de horas seja exatamente 100', () => {
        const totalDeHorasPorProjeto = 100;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario')
    })

    test('Retorna pacote premium caso o número total de horas seja até 200', () => {
        const totalDeHorasPorProjeto = 199;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium')
    })

    test('Retorna pacote premium caso o número total de horas seja exatamente 200', () => {
        const totalDeHorasPorProjeto = 200;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium')
    })
})