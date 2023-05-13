const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto de acordo com cada projeto', () => {

	test('Retorna pacote básico caso o número total de horas seja até 50',() => {
		const totalDeHorasPorProjeto = 49

		const result = calcularPacote(totalDeHorasPorProjeto)
		expect(result).toEqual('pacote_basico')
	})

	test('Retorna pacote intermediario caso o número total de horas seja acima de 50 até 100',() => {
		const totalDeHorasPorProjeto = 70

		const result = calcularPacote(totalDeHorasPorProjeto)

		expect(result).toEqual('pacote_intermediario')
	})

	test('Retorna pacote premium caso o numero total de horas seja maior que 100',() => {
		const totalDeHorasPorProjeto = 150
		const result = calcularPacote(totalDeHorasPorProjeto)

		expect(result).toEqual('pacote_premium')
	})
})