// const { describe, test } = require('node:test');
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calculo de horas totais par finalizar um porjeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
        const funcionalidades = [
        'setup',
            'responsividade'
    ]
    
    const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(24
        )
    
});

    
});