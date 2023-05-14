const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe ('Calcular pacote de acordo com cada projeto', () => {
    test('Retorna pacote básico o número total de horas seja até 50', () => {
        const totalDeHoraPorProjeto = 49;

        const result = calcularPacote(totalDeHoraPorProjeto);
        expect(result).toEqual('pacote_basico')
    })

    test('Retorna pacote básico caso o número total de horas seja exatamente 50', () => {
        const totalDeHoraPorProjeto = 50;
        
        const result = calcularPacote(totalDeHoraPorProjeto);
        expect(result).toEqual('pacote_basico')
    })

    test('Retorna pacote intermediário número total de horas seja até 100', () => {
        const totalDeHoraPorProjeto = 99;

        const result = calcularPacote(totalDeHoraPorProjeto);
        expect(result).toEqual('pacote_intermediario')
    })

    test('Retorna pacote premium número total de horas seja até 200', () => {
        const totalDeHoraPorProjeto = 199;

        const result = calcularPacote(totalDeHoraPorProjeto);
        expect(result).toEqual('pacote_premium')
    })
})