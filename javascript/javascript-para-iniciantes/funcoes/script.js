// Crie uma função para verificar se um valor é Truthy
function verdadeiro(valor){
  return !!valor;
}
console.log(verdadeiro(0));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado*4;
}
console.log(perimetro(3));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('luis felipe', 'silva de melo'));


// Crie uma função que verifica se um número é par
function parImpar(numero){
  if(numero%2 === 0) {return 'par'}
  else {return 'impar'}
}
console.log(parImpar(2));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(argumento){
  return typeof argumento;
}
console.log(tipo(4));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
  console.log('Luis Felipe Silva de Melo');
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
