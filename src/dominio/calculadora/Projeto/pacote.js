const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) =>
  Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
    //Mudança do operador de comparação de '>' para '>=' para que aceite valores exatos
  )[0];

exports.calcularPacote = calcularPacote;
