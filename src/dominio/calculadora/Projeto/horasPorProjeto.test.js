const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
        const funcionalidades = [
            'formulario', //16
            'setup', //8
            'responsividade', //16
            'otimizacao_seo',//16
            'construcao_1_pagina',//8
            'integracao_mailchimp',//16
            'ssr',//8
            'integracao_api_propria',//16
        ]


        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(104)
    })
})
        test('Calcular horas com funcionalidade que não existeo', () => {
           
            const listaDeFuncionalidadeNaoExiste = ['teste']
    
            expect(calcularHorasDeProjeto(listaDeFuncionalidadeNaoExiste).toBeNan)
    })

    


    