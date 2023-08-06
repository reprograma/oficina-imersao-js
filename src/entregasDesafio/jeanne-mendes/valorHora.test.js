const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", ()=>{
    test("retornar o valor arredondado correto dado um valor recebido no mês", () => {
        //setup
        const valorPorMes = 5000; 
        //ação
        const result = calcularValorPorHora(valorPorMes)
        //verificação
        expect(result).toEqual(29)
    })
})