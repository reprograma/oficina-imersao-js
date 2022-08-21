const { TAXAS_CONTRATUAIS_POR_PACOTE } = require("../constantes/constantes");
const { calcularHorasDeProjeto } = require("./horasPorProjeto");
const { calcularPacote } = require("./pacote");

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades); //104

  const pacote = calcularPacote(totalDeHorasPorProjeto); //pacote_premium

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
};

module.exports = {
  calcularValorBaseProjeto,
  calcularValorTotalProjeto,
};
