const { MAX_HORAS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes')

const calcularHorasDeProjeto = (listaDePacotes) => (
  listaDePacotes
    .map(func => MAX_HORAS_POR_PACOTE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
