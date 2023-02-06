// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const footer = document.querySelector('.copy');

footer.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
const dlFaq = document.querySelector('.faq dl');
const primeiroDt = dlFaq.children[0];


// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;
