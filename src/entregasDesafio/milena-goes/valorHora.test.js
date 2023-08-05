const { calcularValorPorHora }= require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", ()=>{
    test("retornar o valor arrendodado correto dado um valor recebido no mes", ()=>{
        //setup- o que a funcao precisa para ser executada
        const valorPorMes = 5000;

        //acao - funcionando
        const result = calcularValorPorHora(valorPorMes)

        //verificacao - se o valor que esta vindo  o esperado
        expect(result).toEqual(29)
    })
})