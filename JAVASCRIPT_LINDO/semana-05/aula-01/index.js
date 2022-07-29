// Aula 01

///////////////////////////////////////////////////////////
// REVISÃO DE FUNÇÕES
///////////////////////////////////////////////////////////

// ------- Exercício 1 -----------
// Crie uma função que recebe um array de strings e retorne a maior string do array.

const estados = ['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']

function maiorStringDoArray(array) {
  let maiorString = '';
  for(let item of array) {
    if(item.length > maiorString.length) {
      maiorString = item;
    }
  }
  return maiorString;
}

console.log(maiorStringDoArray(estados))


// Escolha dos alunos - correta, mas não tão legível
// ------ usando um método do próprio JS: .reduce()

function maiorStringDoArray2(array = []){
  var longest = array.reduce(
  function (a, b) {
    return a.length > b.length ? a : b;
  });
  return longest
}

console.log(maiorStringDoArray2(estados))


// ------- Exercício 2 -----------
// Crie uma função que recebe um array e devolve seus valores de forma invertida (de trás pra frente)

function inverteArray(array){
  let arrayInvertido = [];
  let ultimaPosicaoDoArray = array.length - 1
  let primeiraPosicaoDoArray = 0
  for(let i = ultimaPosicaoDoArray; i >= primeiraPosicaoDoArray; i--) {
    let itemNaPosicaoAtual = array[i]
    arrayInvertido.push(itemNaPosicaoAtual);
  }
  return arrayInvertido;
}

const arrayDeNumeros = [1, 2, 3];
// console.log(inverteArray(arrayDeNumeros))

const arrayDeLetras = ["a", "b", "c", "d"]
// console.log(inverteArray(arrayDeLetras))


// Mais simples e legível
// ------ usando um método do próprio JS: .reverse()
const inverteArray2 = function(array) {
  return array.reverse();
}
// console.log(inverteArray2(arrayDeNumeros))
// console.log(inverteArray2(arrayDeLetras))


///////////////////////////////////////////////////////////
// CALLBACKS
///////////////////////////////////////////////////////////
// Callbacks são funções que são passadas como argumento para outras funções - elas são usadas no fim da função principal ou depois de uma etapa muito importante
// - no exemplo abaixo a função callback será imprimeResultado
// Quando o evento acontece, a função é executada e chamada de volta (por isso callback)


// Já vimos que:
// - Funções podem receber variáveis como parâmetros.
function cumprimentaPessoa(nome) {
    return `Olá ${nome}`;
}

// - Variáveis podem receber funções
const imprimeBomDia = function () {
    return "Bom dia!";
}

// - NOVIDADE: Funções podem receber funções como parâmetros.

const informaParOuImpar = function(numero, funcaoASerUtilizada) {
  let resultado
  if (numero % 2 === 0) {
    resultado = 'par'
  } 
  else if (numero % 2 === 1) {
    resultado = 'impar'
  } 
  else {
    resultado = 'não foi informado um valor válido'
  }
  funcaoASerUtilizada(resultado)
}

const imprimeResultado = function(resultadoEsperado) {
  console.log(`O resultado é: ${resultadoEsperado}`)
}

const comemoraSeForPar = function(resultadoEsperado) {
  if (resultadoEsperado === 'par') {
    console.log('Parabéns! Você é um bom número!')
  }
}

informaParOuImpar(2, imprimeResultado) // O resultado é: par
informaParOuImpar(2, comemoraSeForPar)  // Parabéns! Você é um bom número!



// ------- Exemplo com map()

// Forma já estudada
const resultadoDoMap = [10,20,30].map(function(numero) {
  return numero + 100
})
console.log(resultadoDoMap) // [110, 120, 130]

// Forma com callback mais explícita
const somaCom100 = function(numero) {
  return numero + 100
}
const resultadoDoMap2 = [10,20,30].map(somaCom100)
console.log(resultadoDoMap2) // [110, 120, 130]


// ------- Exemplo com addEventListener()
const botao3 = document.getElementById("botao-de-inserir-conteudo");
const conteudo = document.getElementById("conteudo")

// Forma já estudada
botao3.addEventListener("click", function() {
  conteudo.innerHTML = "Conteudo aqui"
})

// Forma com callback mais explícita
const funcaoDeInserirConteudo = function() {
  conteudo.innerHTML = "Conteudo aqui"
}
botao3.addEventListener("click", funcaoDeInserirConteudo)



// ------- Exercício 1 -----------
// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

const botao = document.querySelector('button')
// botao.addEventListener('click', function() {
//   alert('O botão foi clicado')
// })

// outra opção
const imprimeAlerta = function() {
  alert('O botão foi clicado!!!!')
}
botao.addEventListener('click', imprimeAlerta)



// ------- Exercício 2 -----------
// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.


const verificaSeEPar = function(numero) {
  // if (numero % 2 === 0) {
  //   return true
  // }
  // else {
  //   return false
  // }

  // simplificando com if ternário
  // return numero % 2 === 0 ? true : false

  // simplificado ainda mais
  return numero % 2 === 0
}

const verificaSeEImpar = function(numero) {
  // if(numero % 2 === 1) {
  //   return true
  // }
  // else {
  //   return false
  // }

  // simplificado
  return !verificaSeEPar(numero)

  //ou
  // return numero % 2 === 1
}

// FOR OF
const filtraNumeros = function (numeros, funcaoDeCondicaoDeFiltro) {
  let numerosFiltrados = []
  for (let numero of numeros) {
    if (funcaoDeCondicaoDeFiltro(numero)) {
      numerosFiltrados.push(numero)
    }
  }
  return numerosFiltrados
}

// FOREACH
const filtraNumeros2 = function (numeros, funcaoDeCondicaoDeFiltro) {
  let numerosFiltrados = []
  numeros.forEach(function(numero) {
    if (funcaoDeCondicaoDeFiltro(numero)) {
      numerosFiltrados.push(numero)
    }
  })
  return numerosFiltrados
}
//FILTER
const filtraNumeros3 = function (numeros, funcaoDeCondicaoDeFiltro) {
  return numeros.filter(numero => funcaoDeCondicaoDeFiltro(numero))
  // return numeros.filter(funcaoDeCondicaoDeFiltro)
}

console.log(filtraNumeros2([1,2,3,4,5], verificaSeEPar)) // [2,4]
console.log(filtraNumeros2([1,2,3,4,5], verificaSeEImpar)) // [1,3,5]


// Qual seria a abordagem mais legível da questão?
// Na minha opinião:

const verificaSeONumeroEPar = function(numero) {
  return numero % 2 === 0
}
const verificaSeONumeroEImpar = function(numero) {
 return numero % 2 === 1
}
const filtraOsNumeros = function (numeros, funcaoDeCondicaoDeFiltro) {
  return numeros.filter(numero => funcaoDeCondicaoDeFiltro(numero))
}

console.log(filtraOsNumeros([1,2,3,4,5], verificaSeONumeroEPar)) // [2,4]
console.log(filtraOsNumeros([1,2,3,4,5], verificaSeONumeroEImpar)) // [1,3,5]
