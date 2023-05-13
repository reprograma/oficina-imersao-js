const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const Pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');


describe('Valor total do projeto', () => {

    beforeEach(() => {

        Pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Retorna valor total para um projeto dadas as funcionalidades por projeto pepedidas e o valor da hora da desenenvolvedora ', () => {

        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina'
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(3696);

    });

});