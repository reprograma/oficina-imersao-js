const { calcularValorPorHora } = require("./valorHora");

/* test("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2)
})

test(" testa se 2 * 2 = 4 ", () =>{
    expect(2 * 2).toBe(4)
} )

const listaDeCompras = [
    "fraldas",
    "Sabonetes",
    "Saco de lixo",
    "Ovos",
    "Queijo",
]

test("descrição: verifica se existe item na lista", () => {
    expect(listaDeCompras).toContain("Ovos")
}) */

/* test("Qual o valor hora, de um salário de 1500", () => {
  const salario = 1500;
  const valorHora = calcularValorPorHora(salario);
  console.log(valorHora);
  expect(valorHora).toBe(9);
});

 */
describe("Teste contas matematicas", () => {
  test("10 + 10 = 20 (soma)", () => {
    expect(10 + 10).toBe(20);
  });
  test("10 + 10 = 100 (multiplicação)", () => {
    expect(10 * 10).toBe(100)
  })
});
