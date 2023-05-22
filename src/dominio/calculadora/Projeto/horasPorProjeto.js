const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

//quantas horas eu trabalhei por projetos dados as funcionalidades
const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
