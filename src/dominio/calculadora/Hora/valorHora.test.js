const {calcularValorPorHora} = require("./valorHora");

test("1 + 1 = 2", ()=>{
    expect(1 + 1).toBe(2);
})

const listaDeCompras = [
    "fralda",
    "chocolate",
    "leite",
    "fermento",
    "abobrinha",
];

test("Verifica se existe leite na minha lista", () =>{
    expect(listaDeCompras).toContain("leite")
})