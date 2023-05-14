const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  return Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
  )[0];
};

exports.calcularPacote = calcularPacote;
