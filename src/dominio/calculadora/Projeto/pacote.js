const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
  //Alterado sinal de >(maior que) para >=(maior que ou igual) para aceitar valores exatos no pacote como 50, 100, 200
)[0];

exports.calcularPacote = calcularPacote;
