const {
	calcularValorPorHora,
} = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
	test('retorno do valor arredondado está correto dado o valor informado no mês', () => {
		//arrange / setup
		const valorMes = 5000; // dado mockado
		//act / ação
		const resultado = calcularValorPorHora(valorMes);
		//assert / verificação
		expect(resultado).toEqual(29);
	});

	test('retorno do valor será NaN caso passe um valor undefined no valor do mês', () => {
		const valorMes = undefined;
		const resultado = calcularValorPorHora(valorMes);
		expect(resultado).toBeNaN();
	});

	test('retorno do valor será 0 caso o valor do mês seja 0', () => {
		const valorMes = 0;
		const resultado = calcularValorPorHora(valorMes);
		expect(resultado).toEqual(0);
	});
});
