// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
var resultado = 35;
if(total==resultado){
    console.log('Correto');
} else{
    console.log('Errado');
}

// Crie duas expressões que retornem NaN
var num1 = 'e10';
var num2 = 5;
console.log(num1-num2);
console.log(num1%2);

// Somar a string '200' com o número 50 e retornar 250
console.log(+'200' + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
x++;
console.log(x);

// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(peso);
