const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calculo de horas por projeto', () => {
    test('dado uma lista de funcionalidade desjadas por projeto,deve retornar a soma das horas totais', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]
        const resultado = calcularHorasDeProjeto(funcionalidades)
        expect(resultado).toEqual(72);
    });

    test('dado uma lista de funcionalidades vazia, deve retornar 0', () => {
        const funcionalidades = [];
        const resultado = calcularHorasDeProjeto(funcionalidades);
        expect(resultado).toEqual(0);
    })

    test('dado um lista de funcionalidades e nela há um item que não existe deve dar erro de NAN', () => {
        const funcionalidades = [
            'testes unitarios', //não existe essa funcionalidade
            'responsividade',
            'construcao_1_pagina',
        ]
        const resultado = calcularHorasDeProjeto(funcionalidades);
        expect(resultado).toBeNaN();
    })
});