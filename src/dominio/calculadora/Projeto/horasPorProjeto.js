const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => {
  if (!Array.isArray(listaDeFuncionalidades)) {
    throw new Error('ListaDeFuncionalidades must be an array');
  }

  const totalHours = listaDeFuncionalidades
    .map(func => {
      if (!HORAS_POR_FUNCIONALIDADE.hasOwnProperty(func)) {
        throw new Error(`Unknown functionality '${func}'`);
      }
      return HORAS_POR_FUNCIONALIDADE[func];
    })
    .reduce((sum, currentValue) => sum + currentValue, 0);
  return totalHours;
};

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
