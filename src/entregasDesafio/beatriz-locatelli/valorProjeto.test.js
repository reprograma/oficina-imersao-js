const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    });

    test('retorno valor total do projeto do pacote básico de acordo com as funcionalides passadas', 
    () => {
        const funcionalidades =[
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] // 48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(resultado).toEqual(3696)
    });
});
