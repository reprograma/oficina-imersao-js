const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
  //Alterado sinal de >(maior que) para >=(maior que ou igual) para aceitar valores exatos 
  //no pacote como 50 para o pacote básico, 100 para o pacote intermediário, 200 para o pacote premium
)[0];

exports.calcularPacote = calcularPacote;
