// Aulas 02 e 03

///////////////////////////////////////////////////////////
// ARROW FUNCTIONS
///////////////////////////////////////////////////////////

// Simplificar funções anônimas
const multiplicar = function(a, b) {
  return a * b
}
const multiplicar2 = (a, b) => a * b


// Sintaxe
const dividir = (a, b) => a / b
[10,20].map(numero => dividir(numero, 2)) // [5,10]


[10,20].map((numero) => numero / 2) // [5,10]


// if ternário
const verificaMaiorQue4 = numero => numero > 4 ? "sim" : "não"

console.log(verificaMaiorQue4(2)) // não
console.log(verificaMaiorQue4(5)) // sim



// ------- Exercício 1 -----------
// Crie uma arrow function que recebe um array de números e calcula a média deles
const media = (array) => {
  let soma = 0;
  for (let numero of array) {
    soma += numero;
  }
  return soma / array.length
}

console.log(media([1,2,3,4,5])) // 3


// ------- Exercício 2 -----------
// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos
const numerosPositivos = (arrayDeNumeros) => {
  let numerosPositivos = [];
  for (let numero of arrayDeNumeros) {
    if (numero >= 0) {
      numerosPositivos.push(numero);
    }
  }
  return numerosPositivos
}

const numerosPositivos2 = (arrayDeNumeros) => arrayDeNumeros.filter(numero => numero >= 0)

console.log(numerosPositivos([-5, 10, -3.2, 12, -9, 5, 90, 0, 1, 4.5])) // [10, 12, 5, 90, 1, 4.5]


// ------- Exercício 3 -----------
// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

const descobreQuinzena = numeroDoDia = numeroDoDia <= 15 ? "primeira quinzena" : "segunda quinzena"

console.log(descobreQuinzena(1)) // primeira quinzena
console.log(descobreQuinzena(16)) // segunda quinzena


// ------- Exercício 4 -----------
// Crie uma array function que receba um array e localize o número de maior valores
const maiorValor = (array) => {
  let maiorValor = array[0];
  for (let numero of array) {
    if (numero > maiorValor) {
      maiorValor = numero;
    }
  }
  return maiorValor
}

console.log(maiorValor([5, 2, 7, -10, 3])) // 7


// ------- Exercício 5 -----------
// Crie uma arrow function que receba 2 arrays e retorne um array contendo os dois
const juntaArrays = (array1, array2) => {
  let arrayJuntado = [];
  for (let numero of array1) {
    arrayJuntado.push(numero);
  }
  for (let numero of array2) {
    arrayJuntado.push(numero);
  }
  return arrayJuntado
}

console.log(juntaArrays([1,2,3], [4,5,6])) // [1,2,3,4,5,6]


// ou
const juntaArrays1 = (array1, array2) => array1.concat(array2)



// ------- Exercício 6 -----------
// Crie uma array functions que ordene um array de números
const ordenaArray = (array) => {
  return array.sort((a, b) => a - b);
}


// ------- Exercício 7 -----------
// Crie uma arrow function que receba um número, calcule sua raiz quadrada 
// e em seguida retorne a parte inteira desse resultado
// OBS: Procure alertar o usuário caso o número inserido seja negativo, 
// pois na matemática não existe raiz quadrada de número negativo

const calculaParteInteiraDaRaizQuadrada = (numero) => {
  if (numero < 0 ) return "Não é possível calcular a raiz quadrada de números negativos."
  const raizQuadrada = Math.sqrt(numero)
  return Math.round(raizQuadrada)
}

console.log(calculaParteInteiraDaRaizQuadrada(5)) // 2
















// ------- Exercício 8 -----------
// Crie uma arrow function que receba uma string e devolva um objeto com as informações: 
// - quantos caracteres a string possui
// - qual seu primeiro caracter 
// - e qual seu último caracter

const descobreInformacoesDaPalavra = palavra => {
  const informacoes = {
    quantidadeDeCaracteres: palavra.length,
    primeiroCaracter: palavra[0],
    ultimoCaracter: palavra[palavra.length - 1]
  }
  return informacoes
}

console.log(descobreInformacoesDaPalavra("maçã")) // {quantidadeDeCaracteres: 4, primeiroCaracter: "m", ultimoCaracter: "ã"}


// Crie uma arrow function que receba uma frase, tire:
// -seus espaços, 
// - suas vírulas 
// - e acentos em qualquer letra 

// e devolva um objeto com as informações: 
// - frase já tratada
// - quantos caracteres a string possui
// - qual seu segundo caracter 
// - e qual seu penúltimo caracter

const descobreInformacoesDaFrase = frase => {
  // const fraseSemEspacos = frase.replace(/\s/g, "")
  // const fraseSemVirgula = fraseSemEspacos.replace(/\,/g, "")
  // const fraseSemAcentosEmLetras = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
  const fraseSemEspacoSemVirgulasESemAcentos = frase.replace(/\s/g, "").replace(/\,/g, "").normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
  const informacoes = {
    novaFrase: fraseSemEspacoSemVirgulasESemAcentos,
    quantidadeDeCaracteres: fraseSemEspacoSemVirgulasESemAcentos.length,
    segundoCaracter: fraseSemEspacoSemVirgulasESemAcentos[1],
    penultimoCaracter: fraseSemEspacoSemVirgulasESemAcentos[fraseSemEspacoSemVirgulasESemAcentos.length - 2]
  }
  return informacoes
}

console.log(descobreInformacoesDaFrase("Você é ótimo, viu?")) 
// {
//   novaFrase: 'Voceeotimoviu?',
//   quantidadeDeCaracteres: 14,
//   segundoCaracter: 'o',
//   peultimoCaracter: 'u'
// }















// ------- Exercício 9 -----------
// O dono de um restaurante bem excêntrico pede que você crie um algoritimo para ajudar o segurança que permite a entrada de clientes. 
// O programa recebe uma lista com informações de cada cliente (nome, idade e altura) e verifique qual deles pode entrar no restaurante.
// - Se a idade for maior que 25 anos e a altura for menor ou igual a 1.70m, então pode entrar.
// O programa dee retornar uma frase no seguinte formado: "Podem entrar Fulano, Beltrano, Sicrano."

const clientes = [
  { nome: "João", idade: 25, altura: 1.70 },
  { nome: "Maria", idade: 23, altura: 1.60 },
  { nome: "José", idade: 32, altura: 1.85 },
  { nome: "Joaquina", idade: 26, altura: 1.69 },
  { nome: "Pedro", idade: 19, altura: 1.65 },
  { nome: "Marcos", idade: 42, altura: 1.50 },
]

const verificaRequisitos = (listaDeClientes) => {
  const podemEntrar = listaDeClientes.filter(cliente => cliente.idade > 25 && cliente.altura <= 1.70) 
  const podemEntrarEmString = podemEntrar.map(cliente => cliente.nome).join(', ')
  return `Podem entrar: ${podemEntrarEmString}.`
}

console.log(verificaRequisitos(clientes)) // Podem entrar: Joaquina, Marcos.
















// ------- Exercício 10 -----------
// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// A primeira deve imprimir a tabuada de um número
// A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// Use a primeira função como callback da segunda

const imprimeTabuadaDeUmNumero = (numero) => {
  console.log(`----------- Tabuada de ${numero}-----------`)
  for (let i = 1; i <= 10; i++) {
    const linha = `${numero} * ${i} = ${numero * i}`
    console.log(linha)
  }
} 

const realizaRepeticoes = (numero, funcao) => {
  for (let i = 1; i <= numero; i++) {
    funcao(i)
  }
}

realizaRepeticoes(10, imprimeTabuadaDeUmNumero)


