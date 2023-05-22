const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  if (typeof totalDeHorasPorProjeto !== 'number' || totalDeHorasPorProjeto < 0) {
    throw new Error('totalDeHorasPorProjeto must be greater than 0');
  }

  if (typeof valorHora !== 'number' || valorHora <= 0) {
    throw new Error('valorHora must be greater than 0');
  }

  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  if (!Array.isArray(funcionalidades)) {
    throw new Error('funcionalidades must be an array');
  }

  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  const pacote = calcularPacote(totalDeHorasPorProjeto);
  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);
  const taxaContratual = TAXAS_CONTRATUAIS_POR_PACOTE[pacote] || 0;
  return Math.round(valorBase * taxaContratual);
};

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;