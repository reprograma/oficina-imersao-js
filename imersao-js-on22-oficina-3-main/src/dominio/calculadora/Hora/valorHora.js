const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;
  /*A função Math.ciel arredonda para cima*/
  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;
