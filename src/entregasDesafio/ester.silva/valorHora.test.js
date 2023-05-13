
const { calcularValorPorHora } = require ('../../dominio/calculadora/Hora/valorHora')


describe('valor por hora ', () => {

    test('retorna o valor aredondado correto ', () => {
        const  valorPormes = 5000

        const result = calcularValorPorHora(valorPormes);
        
        expect(result).toEqual(29);
    })

    
})