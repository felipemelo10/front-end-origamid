// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
  if(index > 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => console.log(img, img.hasAttribute('alt')));

// Modifique o href do link externo no menu
itensMenu.forEach((item) => {
  if('[href!^="#"]') item.setAttribute('href', 'https://behance.net/felipemelo4');
})
