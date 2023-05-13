const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  if(totalDeHorasPorProjeto === MAX_HORAS_POR_PACOTE.pacote_basico) {
    return "pacote_basico"
  }
  if(totalDeHorasPorProjeto === MAX_HORAS_POR_PACOTE.pacote_intermediario) {
    return "pacote_intermediario"
  }
  if(totalDeHorasPorProjeto === MAX_HORAS_POR_PACOTE.pacote_premium) {
    return "pacote_premium"
  }

  return Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value > totalDeHorasPorProjeto
  )[0];
};

exports.calcularPacote = calcularPacote;
