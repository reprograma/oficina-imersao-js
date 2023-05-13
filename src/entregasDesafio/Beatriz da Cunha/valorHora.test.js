
//fazendo a importação do calcular por hora
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')


//descrevendo o que esta sendo feito
describe('Valor por hora', () => {

    //aqui estamos colocando o valor arrendodad
    test('Retorna o valor arredondado correto dado o valor recebido no mês', () => {

        //valor do salario
        const valorPorMes = 5000;

        //calculando o valor por hora pelo valor por mes
        const result = calcularValorPorHora(valorPorMes)

        //exportando o resultado
        expect(result).toEqual(29);


    })
})


