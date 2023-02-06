// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const distanciaTopo = img.offsetTop;
console.log(distanciaTopo);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
const imgsDados = img.getBoundingClientRect();
const somaLargura = imgsDados.width * imgs.length;
console.log(somaLargura);

function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
};

window.onload = () => somaImagens();


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  if(link.clientWidth < 48 && link.clientHeight < 48){
    console.log('Link muito pequeno');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const tamanhoMobile = window.matchMedia('max-width: 720px');
if (tamanhoMobile) menu.classList.add('menu-mobile');
