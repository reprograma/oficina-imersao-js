const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Valor por projeto', () => {

    //somando todas as horas gasta no projeto
    test('Retornar a soma das horas necessárias por projeto', () => {

        //pegando as horas gasta 16 + 8 = 24
        const funcionalidades = [
            'setup',
            'responsividade'
        ]

        //calculando o valor da hora
        const result = calcularHorasDeProjeto(funcionalidades)
      
        expect(result).toEqual(24);
    });
});