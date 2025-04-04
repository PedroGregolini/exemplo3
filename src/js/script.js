// Declaração e variaveis

var nome = "Fiap";
console.log(nome)

let idade = 19;
console.log(idade)

const sobrenome = "Fiapinho"
console.log(sobrenome)

// Undefined
let exemplo;
console.log(exemplo)

//nula
let exemplo1 = null
console.log(exemplo1)

//Consultar os tipos de variaveis
let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 2;
console.log(typeof ex2)

let ex3 = true
console.log(typeof ex3)

let ex4 = {}
console.log(typeof ex4)

let ex5 = []
console.log(typeof ex5)

/////////////////////////////////////////////////////////////

//CONVERSÕES

//FLOAT => STRING

let numFloat = 123.456;
console.log(numFloat.toString())

//STRING => FLOAT

let numString = "12.963"
console.log(parseFloat(numString))

//INT => STRING

let numInt = 12
console.log(numInt.toString())

//STRING => INT

let numString2 = "120"
console.log(parseInt(numString2))

/////////////////////////////////////////////////////////////

//METODOS

//METODO LENGHT - VERIFICA O TAMANHO DA STRING
let frase ="O mundo da Tecnologia";
console.log(frase.length)

//METODO indexof/lastindexoff - RETORNA U TRCHO DO SEU CODIGO
let texto = "Programação Sustentavel";
console.log(texto.indexOf("ão"))

//METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
let info = "Programação de ponta";
console.log(info.slice(2,6))

//OPERADORES ARITIMÉTICOS 


