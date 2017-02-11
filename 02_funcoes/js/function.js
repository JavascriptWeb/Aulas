// Parâmetros de função ----------------------------------------------------------------
var parameters = function(value1, value2, value3) {
  console.log("Quantidade de parâmetros: " + arguments.length)
  console.log("Primeiro parâmetro: " + arguments[0])
}

parameters(1)
parameters(1, 2)
parameters(1, 2, 5)
parameters(1, 2, 5, 8, 17)


// Retorno de funções ------------------------------------------------------------------
function sum(value1, value2) {
  return value1 + value2
}

function rectangleArray(base, height) {
  var area = base * height
  var perimeter = (base * height)/2
  return [area, perimeter]
}

function rectangleObject(base, height) {
  var area = base * height
  var perimeter = (base * height)/2
  return {
    area: area,
    perimeter: perimeter
  }
}

console.log("5 + 7 = " + sum(5, 7))
console.log(rectangleArray(2, 7))
console.log(rectangleObject(2, 7))
console.log("Área do retangulo: " + rectangleArray(2, 7)[0])
console.log("Área do retangulo: " + rectangleObject(2, 7)['area'])
console.log("Perimetro do retangulo: " + rectangleArray(2, 7)[1])
console.log("Perimetro do retangulo: " + rectangleObject(2, 7)['perimeter'])


// Escopo de variáveis -----------------------------------------------------------------
var global = "Global: Estou fora das funções, posso ser visto por todas as funções"

function localScope1() {
  var local = "Local: Estou preso dentro da função escopoLocal1"
  console.log(local)
  console.log(global)
}

function localScope2() {
  var local = "Local: Agora estou preso dentro da função escopoLocal2"
  function localScope3() {
    var global = "Global: Fui preso na função escopoLocal3"
    return global
  }
  console.log(localScope3())
  console.log(local)
  console.log(global)
}
/*console.log(local) Erro: local is not defined */

localScope1()
localScope2()
