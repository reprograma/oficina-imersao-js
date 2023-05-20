const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Calcular valor total do projeto", () => {
    test("Teste com setup, form e ssr (32h de projeto, R$1 de valor hora, pacote_basico)", () => {
        const funcionalidades = ["setup", "formulario", "ssr"]

        expect(calcularValorTotalProjeto(funcionalidades, 1)).toBe(35)
    });
    test("Teste com TODAS funcionalidades(104h de projeto, R$25 de valor hora, pacote_premium)", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"]
        expect(calcularValorTotalProjeto(funcionalidades, 25)).toBe(2990)
    });
})