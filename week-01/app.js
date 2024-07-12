//Dado um array de objetos que representam pessoas com nome e idade, crie uma função que retorna um novo array contendo apenas os nomes dessas pessoas.
const getNames = (pessoas) => {
  const novoArray = [];
  for (let i = 0; i < pessoas.length; i++) {
    novoArray.push(pessoas[i].nome);
  }
  return novoArray;
};

// Dado um array de objetos que representam eventos com data no formato ISO, crie um novo array de strings formatadas como "DD/MM/YYYY".
const formatDates = (eventos) => {
  const dataArray = [];
  for (let i = 0; i < eventos.length; i++) {
    dataArray.push(new Date(eventos[i].data).toLocaleDateString("pt-BR"));
  }
  return dataArray;
};

// Dado um array de números, crie um novo array contendo apenas os números maiores que 10.
const filterGreaterThanTen = (numeros) => {
  const maiorQue10 = numeros.filter(function (maior) {
    return maior > 10;
  });
  return maiorQue10;
};

// Dado um array de objetos que representam produtos com nome e preço, encontre o primeiro produto que custa mais de 50 unidades monetárias.
const findExpensiveProduct = (produtos) => {
  let produtosCaros = produtos.find(function (produtoCaro) {
    return produtoCaro.preco > 50;
  });
  return produtosCaros;
};

// Dado um array de objetos que representam transações com um valor, calcule a soma total dessas transações.
const calculateTotal = (transacoes) => {
  let somaTotal = 0;
  for (let i = 0; i < transacoes.length; i++) {
    somaTotal += transacoes[i].valor;
  }
  return somaTotal;
};

// Dado um array de strings que representam nomes, crie um novo array onde cada nome está em maiúsculas.
const toUpperCaseNames = (nomes) => {
  mai = [];
  for (let i = 0; i < nomes.length; i++) {
    mai.push(nomes[i].toUpperCase());
  }
  return mai;
};

// Dado um array de objetos que representam produtos com nome e preço, aplique um desconto de 10% em cada produto e retorne um novo array com os preços atualizados.
const applyDiscount = (produtos) => {
  for (let i = 0; i < produtos.length; i++) {
    let calc = (10 * produtos[i].preco) / 100;
    let precoAtualizado = produtos[i].preco - calc;
    produtos[i].preco = precoAtualizado;
  }
  return produtos;
};

// Dado um array de números representando temperaturas em Celsius, crie um novo array com essas temperaturas convertidas para Fahrenheit.
const celsiusToFahrenheit = (temperaturas) => {
  for (let i = 0; i < temperaturas.length; i++) {
    let calcFahrenheit = temperaturas[i] * 1.8 + 32;
    temperaturas[i] = calcFahrenheit;
  }
  return temperaturas;
};

// Dado um array de strings que representam nomes, imprima cada nome no console.
const printNames = (nomes) => {
  for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
};

// Dado um array de objetos que representam alunos com nome e nota, imprima no console uma mensagem para cada aluno com seu nome e sua nota.
const printStudentGrades = (alunos) => {
  for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome} tirou nota ${alunos[i].nota}`);
  }
};

module.exports = {
  getNames,
  formatDates,
  filterGreaterThanTen,
  findExpensiveProduct,
  calculateTotal,
  toUpperCaseNames,
  applyDiscount,
  celsiusToFahrenheit,
  printNames,
  printStudentGrades,
};
in