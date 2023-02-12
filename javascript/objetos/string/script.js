// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0;
  transacoes.forEach((item) => {
    const numerosTratados = +item.valor.replace('R$ ', '');
    taxaTotal += numerosTratados;
  })

  console.log(taxaTotal)

  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const transportesArray = transportes.split(';');
  console.log(transportesArray);
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  const htmlNovo = html.split('span').join('a');
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  const ultimoCaracter = frase.charAt(frase.length - 1);
  console.log(ultimoCaracter);
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  let cont = 0;
  transacoes2.forEach((desc) => {
    if(desc.toLowerCase().trim().slice(0, 4) === 'taxa') {
        cont++;
    };
  })
  console.log(cont);
  