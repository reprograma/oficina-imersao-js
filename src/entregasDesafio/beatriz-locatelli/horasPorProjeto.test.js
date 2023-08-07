const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('cálculo de horas gerais por projeto', () => {
    test('dado uma lista de funicionalidades desejadas por projeto, retornar a soma das horas totais',
     () => {
        //setup
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);

        //verificação
        expect(resultado).toEqual(72);
        
    });
});