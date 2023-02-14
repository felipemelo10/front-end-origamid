// Crie uma função que verifique
// corretamente o tipo de dado
function funcao(n1, n2) {
  return n1 + n2;
}
const array = [1,2,3];
const objeto = {}

function whichType(nomeObjeto) {
  return Object.prototype.toString.call(nomeObjeto);
}
console.log(whichType(objeto))


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {

}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  }
})

console.log(quadrado.lados);


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
configuracao.teste = 700;

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String));
console.log(Object.getOwnPropertyNames(Array));
