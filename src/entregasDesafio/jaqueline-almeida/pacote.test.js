
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com a hora total do projeto', () => {

    test('testar o pacote basico', () => {
        const horasProjeto = 49;
        const result = calcularPacote(horasProjeto)

        expect(result).toEqual('pacote_basico')
    });

    
    test('testar o pacote intermediario', () => {
        const horasProjeto = 99;
        const result = calcularPacote(horasProjeto)

        expect(result).toEqual('pacote_intermediario')
    });

    test('testar o pacote premium', () => {
        const horasProjeto = 199;
        const result = calcularPacote(horasProjeto)

        expect(result).toEqual('pacote_premium')
    });

});


describe('Se o valor for exatamente o valor maximo de horas por pacote, não validar e passar para o pacote seguinte ', () => {

    test('testar o pacote basico', () => {
        const horasProjeto = 50;
        const result = calcularPacote(horasProjeto);

        expect(result).not.toEqual('pacote_basico');
        expect(result).toEqual('pacote_intermediario');
    });

    
    test('testar o pacote intermediario', () => {
        const horasProjeto = 100;
        const result = calcularPacote(horasProjeto)

        expect(result).not.toEqual('pacote_intermediario');
        expect(result).toEqual('pacote_premium')
    });

    test('testar o pacote premium', () => {
        const horasProjeto = 200;
        const result = calcularPacote(horasProjeto)

        expect(result).not.toEqual('pacote_premim');
        expect(result).toEqual('pacote_master')
    });


});
