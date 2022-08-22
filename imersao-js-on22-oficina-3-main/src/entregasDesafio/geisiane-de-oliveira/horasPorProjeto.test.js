const { calcularHorasDeProjeto } = require ('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo das horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas necessárias', () =>{
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]
        const result = calcularHorasDeProjeto(funcionalidades)
        expect(result).toEqual(32)
    });
});