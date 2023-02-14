/* function darOi(nome) {
  console.log('oi ' + nome)
}

darOi.call(null, 'felipe');

function descCarro(velocidade) {
  console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

descCarro.call({marca: 'honda', ano: 2015}, 100);


const carros = ['ford', 'fiat', 'vw'];

carros.forEach.call(carros, (item) => {
  console.log(item);
})

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  console.log(this)
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');

//const ul = new Dom('ul');
//ul.ativo.call(li, 'ativo');
//ul.ativo('ativar');

const frutas = ['uva', 'maçã', 'banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: '1',
  1: '2',
  2: '3',
  length: 3
}

const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo')
})

console.log(filtro())
console.log(li) 

const numeros = [3,4,6,1,34,44,32];
//console.log(Math.max.apply(null, numeros));
//console.log(Math.max.call(null, 3, 4, 5, 6, 7, 20));

const $ = document.querySelectorAll.bind(document, 'li') */

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'honda',
}

const acelerarHonda = carro.acelerar.bind(honda, 100);
console.log(acelerarHonda(20));

