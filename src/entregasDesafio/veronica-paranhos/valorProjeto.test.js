const {
	calcularValorTotalProjeto,
} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('valor total do projeto', () => {
	beforeEach(() => {
		pacote.calcularPacote.mockReturnValue('pacote_basico');
	});

	test('retornar valor total do projeto do pacote básico, de acordo com as funcionalidades passadas', () => {
		const funcionalidades = [
			'setup',
			'responsividade',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'construcao_1_pagina',
		]; //48horas
		const valorHora = 70;

		const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

		expect(resultado).toEqual(3696);
	});
});

describe('valor total do projeto', () => {
	beforeEach(() => {
		pacote.calcularPacote.mockReturnValue('pacote_intermediario');
	});

	test('retornar valor total do projeto do pacote intermediário, de acordo com as funcionalidades passadas', () => {
		const funcionalidades = [
			'setup',
			'responsividade',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'construcao_1_pagina',
		]; //48horas
		const valorHora = 70;

		const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

		expect(resultado).toEqual(3763);
	});
});

describe('valor total do projeto', () => {
	beforeEach(() => {
		pacote.calcularPacote.mockReturnValue('pacote_premium');
	});

	test('retornar valor total do projeto do pacote premium, de acordo com as funcionalidades passadas', () => {
		const funcionalidades = [
			'setup',
			'responsividade',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'construcao_1_pagina',
		]; //48horas
		const valorHora = 70;

		const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

		expect(resultado).toEqual(3864);
	});

	test('retornar 0 caso seja passado uma lista de funcionalidade vazia', () => {
		const funcionalidades = [];
		const valorHora = 70;

		const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

		expect(resultado).toEqual(0);
	});

	test('retornar 0 caso o valor de horas seja 0', () => {
		const funcionalidades = [
			'setup',
			'responsividade',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'construcao_1_pagina',
		]; //48horas
		const valorHora = 0;

		const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

		expect(resultado).toEqual(0);
	});
});
