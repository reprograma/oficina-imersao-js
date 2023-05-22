const { HORAS_POR_DIA, DIAS_UTEIS_NO_MES } = require('../constantes/constantes');

const calcularValorPorHora = (rendaMensal) => {
  if (typeof rendaMensal !== 'number' || rendaMensal < 0) {
    throw new Error('Invalid input!');
  }
  const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;
  const valorPorHoraArredondado = Math.ceil(valorPorHora);

  return valorPorHoraArredondado;
};

exports.calcularValorPorHora = calcularValorPorHora;