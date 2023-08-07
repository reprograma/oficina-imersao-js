const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');


describe ('calcular pacote correto de acordo com a quantidade de horas', () => {
  test ('retorna pacote básico caso a quantidade de horas seja até 50 ' , () => {

    const totaldehorasPorProjeto = 49;

    const resultado = calcularPacote(totaldehorasPorProjeto);

    expect(resultado).toEqual('pacote_basico');

  });
  test ('retorna pacote básico caso a quantidade de horas seja igual a 50 ' , () => {

    const totaldehorasPorProjeto = 50;

    const resultado = calcularPacote(totaldehorasPorProjeto);

    expect(resultado).toEqual('pacote_basico');

  });

  test ('retorna pacote intermediário caso a quantidade de horas seja de 51 a 100' , () => {

    const totaldehorasPorProjeto = 51;

    const resultado = calcularPacote(totaldehorasPorProjeto);

    expect(resultado).toEqual('pacote_intermediario');

  });
  test ('retorna pacote intermediário caso a quantidade de horas seja igual a 100  ' , () => {

    
    const totaldehorasPorProjeto = 100;

    const resultado = calcularPacote(totaldehorasPorProjeto);

    expect(resultado).toEqual('pacote_intermediario');


  });
  test ('retorna pacote premium caso a quantidade de horas que seja de 101 a 200 ' , () => {

    
    const totaldehorasPorProjeto = 199;

    const resultado = calcularPacote(totaldehorasPorProjeto);

    expect(resultado).toEqual('pacote_premium');


  });

});