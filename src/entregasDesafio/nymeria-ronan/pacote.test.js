



const{ calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote', () => {
    test('calcular o pacote dado um total de hora por projeto', () => {
        const totalHorasProjeto = 83

        const result = calcularPacote(totalHorasProjeto)

       expect(result).toEqual('pacote_intermediario')
    });

    test('calcular o pacote  dado um total de hoje por projeto',() => {
        const totalDeHorasPorProjeto = 45
        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico');
    })


}) 

test ('calcular o pacote dado um total de hoje por projeto ', () => {
    const totalDeHorasPorProjeto = 133
    const result = calcularPacote(totalDeHorasPorProjeto)

    expect(result).toEqual('pacote_premium')
} )


