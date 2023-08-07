const {
	calcularHorasDeProjeto,
} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('cálculo de horas por projeto', () => {
	test('dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais', () => {
		//setup
		const funcionalidades = [
			'setup',
			'responsividade',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'construcao_1_pagina',
			'formulario',
			'ssr',
		];
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades);
		//verificação
		expect(resultado).toEqual(72);
	});

	test('dado uma lista de funcionalidades vazia, retornar a 0', () => {
		//setup
		const funcionalidades = [];
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades);
		//verificação
		expect(resultado).toEqual(0);
	});
});
