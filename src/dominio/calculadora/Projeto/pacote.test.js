const {calcularPacote} = require('./pacote');

describe('Calcular pacote correto para cada projeto', () => {
    test('Retorna pacote básico caso o número total seja até 50', () => {
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote básico caso o número total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
        
    })    

})
