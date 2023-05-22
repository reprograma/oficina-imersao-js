const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (typeof totalDeHorasPorProjeto !== 'number' || isNaN(totalDeHorasPorProjeto) || totalDeHorasPorProjeto < 0) {
    throw new Error('TotalDeHorasPorProjeto must be greater than 0');
  }

  const suitablePackage = Object.entries(MAX_HORAS_POR_PACOTE)
    .find(([key, value]) => value >= totalDeHorasPorProjeto);

  if (!suitablePackage) {
    throw new Error('Couldn`t find a package');
  }

  return suitablePackage[0];
};

exports.calcularPacote = calcularPacote;
