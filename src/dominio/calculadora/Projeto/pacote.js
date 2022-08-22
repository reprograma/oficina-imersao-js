const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto <= 0) {
    return "A entrada deve ser maior que 0";
  }

  if (typeof totalDeHorasPorProjeto === "string") {
    return "A entrada deve ser um número";
  }

  if (totalDeHorasPorProjeto > MAX_HORAS_POR_PACOTE.pacote_premium) {
    return "Pacote não disponível";
  }


  return Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
  )[0];
};

exports.calcularPacote = calcularPacote;
