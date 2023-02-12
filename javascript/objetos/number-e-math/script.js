console.log(Number.isNaN('5'));
console.log(Number.isInteger(10.5));

console.log(parseFloat('354.458 reais'));
console.log(parseInt(25.9));

const preco = 10.4897;
console.log(+preco.toFixed(2))

console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

console.log(Math.abs(3 - 7));
console.log(Math.ceil(3.1));
console.log(Math.floor(4.9));
console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.max(4,6,7,8,9));
console.log(Math.min(4,6,7,8,9));
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * (20 - 10 + 1) + 10));

// Retorne um número aleatório
// entre 1050 e 2000
sorteio = Math.round(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(sorteio);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ');
console.log(Math.max(...numerosArray));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function moneyPattern(valor) {
  valor = +valor.toUpperCase().replace('R$', '').trim().replace(',', '.');
  valor = +valor.toFixed(2);
  return valor;
}

let soma = 0
somaTotal = listaPrecos.forEach((valor) => {
  soma += moneyPattern(valor);
})

console.log(soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
