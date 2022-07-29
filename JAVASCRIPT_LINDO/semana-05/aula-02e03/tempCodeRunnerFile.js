const calculaParteInteiraDaRaizQuadrada = (numero) => {
  if (numero < 0 ) return "Não é possível calcular a raiz quadrada de números negativos."
  const raizQuadrada = Math.sqrt(numero)
  return Math.round(raizQuadrada)
}


console.log(calculaParteInteiraDaRaizQuadrada(5)) // 4