// nomeie 3 propriedades ou métodos de strings
var string = 'Luis Felipe Silva de Melo';

console.log(string.slice(5)); //remove os 5 primeiros caracteres da string

console.log(string.split(' ')); // separa a string cada vez que encontrar um caracter específico e retorna um array

console.log(string.toUpperCase()) //retorna a string escrita toda em caixa alta



// nomeie 5 propriedades ou métodos de elementos do DOM
var botao = document.getElementById('#botao'); // pega o elemento pelo id

//addEventListener
//apend
//hasAttribute
//innerHtml
//className



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var text = document.querySelector('.texto');
text.addEventListener('click', function(){
  this.select();
  document.execCommand('copy');
})
