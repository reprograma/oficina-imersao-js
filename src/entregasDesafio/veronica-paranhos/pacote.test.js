const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote correto de acordo com a quantidade de horas', () => {
	test('retornar o pacote básico caso a quantidade de horas seja até 50', () => {
		//setup
		const totalDeHorasPorProjeto = 49;
		//ação
		const resultado = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(resultado).toEqual('pacote_basico');
	});
	test('retornar o pacote básico caso a quantidade de horas seja igual 50', () => {
		//setup
		const totalDeHorasPorProjeto = 50;
		//ação
		const resultado = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(resultado).toEqual('pacote_basico');
	});
	test('retornar o pacote intermediário caso a quantidade de horas seja 51 a 100', () => {
		//setup
		const totalDeHorasPorProjeto = 74;
		//ação
		const resultado = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(resultado).toEqual('pacote_intermediario');
	});
	test('retornar o pacote básico caso a quantidade de horas seja igual 100', () => {
		//setup
		const totalDeHorasPorProjeto = 100;
		//ação
		const resultado = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(resultado).toEqual('pacote_intermediario');
	});
	test('retornar o pacote premium caso a quantidade de horas seja de 101 a 200', () => {
		//setup
		const totalDeHorasPorProjeto = 199;
		//ação
		const resultado = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(resultado).toEqual('pacote_premium');
	});
});
