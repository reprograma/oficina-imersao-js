//para rodar
//npm test src/dominio/calculadora/Hora/valorHora.test.js

const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

test("Qual o valor hora, de um salário de 1500", () => {
  const salario = 1500;
  const valorHora = calcularValorPorHora(salario);
  console.log(valorHora);
  expect(valorHora).toBe(9);
});
