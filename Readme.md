# {reprograma} - Oficina de Introdução aos testes unitários - Desafio

### **Você deve seguir os passos abaixo antes do início da oficina.**
 - Crie um fork deste repositório
 - Clone **_o seu fork_** para a sua máquina

## Pré-Requisitos
  - Visual Studio Code
  - Node.js ^14.15.x
  - Jest ^28.x.x

## Instalar dependências

`npm install`

## Produto e funcionalidades
Uma desenvolvedora iniciou um serviço de calculadora para desenvolvedoras web precificarem seu trabalho. Ela iniciou o projeto e já implementou as seguintes funcionalidades:

  1. Cálculo do valor por cada  hora trabalhada
      - Valor definido a partir da renda mensal necessária, estabelecida pela desenvolvedora após se organizar financeiramente.

  2. Cálculo do valor total de um projeto
      - Valor definido com base na lista de funcionalidades e do valor base da hora calculado anteriormente. Por fim, uma taxa contratual é aplicada com base no tipo de pacote necessário para o projeto:
      > - Pacote Básico: até 50h de trabalho, taxa de 10%;
      > - Pacote Intermediário: até 100h de trabalho, taxa de 12%;
      > - Pacote Premium: até 200h de trabalho, taxa de 15%.

No meio do caminho, a desenvolvedora percebeu que o código não estava testado e que isso pode trazer muitos problemas para o projeto. Seu trabalho vai ser testar as funcionalidades já existentes. Caso, no processo, você sinta necessidade de refatorar o código da desenvolvedora original, sinta-se à vontade!

## Entrega
1. A entrega do desafio deverá ser feita por meio de pull request neste repositório. Para criar o pull request, você deve:
  - Commitar suas alterações locais e dar push para o seu fork
  - Abrir um pull request diretamente do seu fork para este repositório (perfil da reprograma).


2. Você deverá criar uma pasta com seu nome seguindo o padrão abaixo e adicionar um arquivo de teste para cada funcionalidade:
````
.src
├── dominio
│   └── calculadora
│       ├── constantes
│       │   └── constantes.js
│       ├── Hora
│       │   ├── valorHora.js
│       └── Projeto
│           ├── horasPorProjeto.js
│           ├── pacote.js
│           └── valorProjeto.js
└── entregasDesafio
    ├── exemplo-nome-sobrenome
    │   ├── horasPorProjeto.test.js
    │   ├── valorHora.test.js
    │   ├── pacotetest.test.js
    │   └── valorProjeto.test.js
    └── exemplo-milena-martins
        ├── horasPorProjeto.test.js
        ├── valorHora.test.js
        ├── pacotetest.test.js
        └── valorProjeto.test.js
````

## Versão do Node

Caso a versão do seu node não seja compatível para rodar o projeto da oficina, recomendamos o uso do NVM - Node Version Manager. 
Consulte a versão atual do node usando o comando `node -v` em seu terminal.

Veja um passo a passo detalhado para realizar a instalação do NVM em diversos sistemas operacionais: 

[Tutorial de instalação do NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm)

Após a instalação do NVM para realizar a alteração da versão atual do node basta rodar dois comandos: 

`nvm install v14.15.0`

`nvm use v14.15.0`

**A vantagem de utilizar o NVM é a possibilidade ter várias versões do node instaladas na sua máquina e alternar facilmente entre elas sempre que necessário.**
