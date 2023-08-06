const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('', () => {
    test('deve calcular o valor total do projeto de pacote básico de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3696);
    });

    test('deve calcular o valor total do projeto de pacote intermediário de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3763);
    });

    test('deve calcular o valor total do projeto pacote premium de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3864);
    });

    test('não deve calcular o valor total do projeto premium pois não definiu funcionalidades, deve retornar 0', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [];
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(0);
    });

    test('não deve calcular o valor total do projeto premium pois valorHora é undefined, deve retornar NaN', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [];
        const valorHora = undefined;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toBeNaN();
    });
})