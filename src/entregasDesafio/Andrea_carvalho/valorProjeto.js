//const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');
const { MAX_HORAS_POR_PACOTE } = require("../../dominio/calculadora/constantes/constantes")
const { pacote } = require("./pacote")
const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (MAX_HORAS_POR_PACOTE, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(pacote);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * MAX_HORAS_POR_PACOTE[pacote]);
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;
