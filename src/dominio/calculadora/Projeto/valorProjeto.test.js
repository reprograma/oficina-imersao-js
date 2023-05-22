const { calcularValorTotalProjeto } = require('./valorProjeto');
const pacote = require('./pacote')

jest.mock('./pacote.js')


describe('valor do projeto: pacote_basico', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');//taxa contratual: 1.1
    })
    test('retornar valor total para um projeto dada as funcionalidades, usando pacote pacote_basico', () => {
        // A soma dá 72
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const valorHora = 70;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(5544)
    })
})


describe('Valor do projeto: pacote_intermediario', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario'); // taxa 1.2
    })
    test('retornar valor total para um projeto dada as funcionalidades, usando pacote  pacote_intermediario', () => {
        // A soma de funcionalidades é  24
        const funcionalidades = [
            'setup', //8
            'responsividade', //16
        ];
        const valorHora = 1;
        //valorBase = totalDeHorasPorProjeto * valorHora; = 24 x 1 = 24
        // calcularValorTotalProjeto retorna = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE = 24 x 1.2 = 28,8
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(29) // resultado 28,8, porém arredonda para 29
    })
})

describe('Valor do projeto: pacote_premium', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium'); // taxa 1.5
    })
    test('retornar valor total para um projeto dada as funcionalidades,  usando pacote  pacote_premium', () => {
        // A soma de funcionalidades é  24
        const funcionalidades = [
            'setup', //8
            'responsividade', //16
        ];
        const valorHora = 2;
        //valorBase = totalDeHorasPorProjeto * valorHora; = 24 x 2 = 48
        // calcularValorTotalProjeto retorna = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE = 48 x 1.5 = 72
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(72) // resultado 72
    })
})

describe('Verifica o tipo de retorno', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium'); // taxa 1.5
    })
    test('Verifica se o retorno é um número', () => {
        const funcionalidades = [
            'setup', //8
            'responsividade', //16
        ];
        const valorHora = 1;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(typeof result).toBe('number')
    })

})



  describe('Verifica se o retorno é arredondado corretamente para cima', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario'); // taxa 1.2
    })
// Vai restaurar o mock, para não dar conflito com o outro teste que está usando função Math.round
    afterEach(() => {
        jest.restoreAllMocks(); 
      });

    
    test('Verificar se o  valor retornado é arredondado corretamente', () => {
        const valorDecimal = 28.8;
        const valorArredondado = Math.round(valorDecimal);
      
        jest.spyOn(Math, 'round').mockReturnValue(valorArredondado);
      
        const funcionalidades = [
          'setup', // 8
          'responsividade', // 16
        ];
        const valorHora = 1;
      
         //valorBase = totalDeHorasPorProjeto * valorHora; = 24 x 1 = 24
        // calcularValorTotalProjeto retorna = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE = 24 x 1.2 = 28,8
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
      
      
        expect(resultado).toBe(29);
        //verifica se Math.round foi chamada com número
        expect(Math.round).toHaveBeenCalledWith(expect.any(Number));
      });
      
})


describe('Verifica se o retorno é arredondado corretamente para baixo', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario'); // taxa 1.2
    })
// Vai restaurar o mock, para não dar conflito com o outro teste que está usando função Math.round
    afterEach(() => {
        jest.restoreAllMocks(); 
      });

    test('Verificar se o  valor retornado é arredondado corretamente', () => {
        const resultadoDecimal =  19.2;
        const valorArredondadoParaBaixo = Math.round(resultadoDecimal);
      
        jest.spyOn(Math, 'round').mockReturnValue(valorArredondadoParaBaixo);
      
        const funcionalidades = [
          'responsividade', // 16
        ];
        const valorHora = 1;
       //valorBase = totalDeHorasPorProjeto * valorHora; = 16 x 1 = 16
        // calcularValorTotalProjeto retorna = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE = 16 x 1.2 = 19,2
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
      
       
        expect(resultado).toEqual(19);
        //verifica se Math.round foi chamada com número
        expect(Math.round).toHaveBeenCalledWith(expect.any(Number));
      });
      
})




