const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

//=============================================

const li = document.querySelectorAll('li');

const retornoForEach = li.forEach((item) => {
  item.classList.add('teste');
});

const retornoMap = carros.map((item, index, array) => {
  console.log(item, index, array);
  return item.toUpperCase();
});

//=============================================


const numeros = [2, 4, 5, 6, 78];
const numerosx2 = numeros.map(n => n * 2);
console.log(numerosx2);


const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas1.map(aula => aula.min);
const arrayNomeAulas = aulas1.map(aula => aula.nome);

console.log(tempoAulas);
console.log(arrayNomeAulas);

//=============================================


const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return item + acumulador;
}, 0);

const maiorValor = aulas2.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
});

//=============================================


const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas3.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

console.log(listaAulas);

//=============================================


const frutas1 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas1.some((fruta) => {
  return fruta === 'Uva';
})

const every = frutas1.every((fruta) => {
  return fruta;
})

const indexUva = frutas1.findIndex(fruta => fruta === 'Uva');
console.log(indexUva); 

//=============================================


const frutas2 = ['banana', undefined, null, '', 'uva', 0, 1, 'pera'];

const filterFrutas = frutas2.filter((fruta) => {
  return fruta;
});

console.log(filterFrutas);

const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas4.filter((aula) => { 
  return aula.min > 15;
});

