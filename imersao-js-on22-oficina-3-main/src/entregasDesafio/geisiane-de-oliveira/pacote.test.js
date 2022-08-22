
const { calcularPacote } = require ('../../dominio/calculadora/Projeto/pacote')

describe('Definir pacote', () => {
    test('Teste 1: Calcular qual o pacote de acordo com as horas do projeto', () =>{
        const totalDeHorasPorProjeto = 50


        const result = calcularPacote(totalDeHorasPorProjeto)
        
        expect(result).toEqual('pacote_basico')
        console.log("Pacote de acordo com as horas destinadas ao projeto: " + result)

    });
    test('Teste 2: Calcular qual o pacote de acordo com as horas do projeto', () =>{
        const totalDeHorasPorProjeto1 = 100


        const result = calcularPacote(totalDeHorasPorProjeto1)
        
        expect(result).toEqual('pacote_intermediario')
        console.log("Pacote de acordo com as horas destinadas ao projeto: " + result)

    });
    test('Teste 3: Calcular qual o pacote de acordo com as horas do projeto', () =>{
        const totalDeHorasPorProjeto2 = 200


        const result = calcularPacote(totalDeHorasPorProjeto2)
        
        expect(result).toEqual('pacote_premium')
        console.log("Pacote de acordo com as horas destinadas ao projeto: " + result)

    });
    
});