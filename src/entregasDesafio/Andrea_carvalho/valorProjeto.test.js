const { calcularValorTotalProjeto } = require("../../entregasDesafio/Andrea_carvalho/valorProjeto.js");
const { calcularValorPorHora } = require("./horasPorProjeto.js");
const {valorHora} = require ("./valorProjeto.js")
const {calcularPacote} = require('./pacote')
const { MAX_HORAS_POR_PACOTE } = require("../../dominio/calculadora/constantes/constantes")
const { pacote_premium } = require('../../dominio/calculadora/constantes/constantes')


describe("Calculo Valor Por Projeto", () => {
    test("O valor por projeto de 100 horas", () => {
        const horas = 100;
        const valorPorProjetoCalculado = horas*calcularValorTotalProjeto
        
        expect(valorPorProjetoCalculado).toBe("pacote_premium");

        console.log("nunca é tarde para aprender");


    })})
    