// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'felipe',
  sobrenome: 'melo',
  idade: 19,
  profissao: 'designer',
  cidade: 'petrolina',
  habilitacao: true,
  faculdade: 'facape'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.mostrarNome = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var animal = {
  reino: 'vertebrados',
  classe: 'mamífero',
  especie: 'cachorro',
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(algo){
    if(algo === 'homem'){
      return 'au';
    }
  }
}