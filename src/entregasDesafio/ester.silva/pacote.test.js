 const {calcularPacote} = require ('../../dominio/calculadora/Projeto/pacote')

 

describe('caucular pacote de acordo com cada projeto ', () => {

    test('retorna pacoto basico caso o numero total de horas seja até 50 ', () => {
        const  totaldeDeHorasPorProjetos = 49

        const result = calcularPacote(totaldeDeHorasPorProjetos);
        
        expect(result).toEqual('pacote_basico');
    })

    test('retorna pacoto basico caso o numero total de horas seja exatamente 50 ', () => {
        const  totaldeDeHorasPorProjetos = 50

        const result = calcularPacote(totaldeDeHorasPorProjetos);
        
        expect(result).toEqual('pacote_basico');
    })
    
})