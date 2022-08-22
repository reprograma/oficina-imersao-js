const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;
  const result = Math.ceil(valorPorHora)

  if (result <= 0) {
    return 'Salario deve ser maior que R$0,00';
  }
  return result;
};

exports.calcularValorPorHora = calcularValorPorHora;
