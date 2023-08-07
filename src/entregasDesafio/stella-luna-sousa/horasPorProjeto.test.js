const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('cálculo de horas totais por projeto', ()=>{
    test('dado uma lista de funcionalidades desejadas por projeto, retornar a soma das horas totais', ()=>{
        //arrange
            const funcionalidades = [
                'setup',
                'responsividade',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'formulario',
                'ssr'
            ];

        //act
            const resultado = calcularHorasDeProjeto(funcionalidades);
        
        //assert
        expect(resultado).toEqual(72);
    });
});