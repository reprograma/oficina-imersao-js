const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')
const { execPath } = require('process')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('valor do projeto ' , () => {
    beforeEach(()=> {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })


test ('retorna valor totalpara um projeto dadas as funcionalidades por projetos pedidas e o valor da hora desenvolverar ',() => {
    const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina'
    ]
    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696)
})
})