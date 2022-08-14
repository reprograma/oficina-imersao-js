
const { calcularHorasDeProjeto } = require("../../entregasDesafio/Andrea_carvalho/horasPorProjeto")

const listaDePacotes = ["pacote_basico", "pacote_intermediario", "pacote_premium"]

describe("Calculo de Horas de Projeto", () => {
    test("Calculo de Horas de Pacote intermediário", () => {
        const listaDePacotes = ["pacote_intermediario"]
        console.log('minhas horas', listaDePacotes);
        const horasParaRealizarProjeto = calcularHorasDeProjeto(listaDePacotes)
        console.log(horasParaRealizarProjeto);

        expect(horasParaRealizarProjeto).toBe(100)
    })
})
