const { toUpperCaseNames } = require("../week-01/app");

// Dado um array de números, crie uma função que retorna um novo array com os números multiplicados por 2 e depois filtrados para manter apenas os números maiores que 10.
const transformAndFilter = (numeros) => {
  let multiplicar = numeros.map(function (numero) {
    return numero * 2;
  });
  let filtrar = multiplicar.filter(function (maiorQ10) {
    return maiorQ10 > 10;
  });
  return filtrar;
};

// Dado um array de strings que representam itens, crie uma função que retorna um objeto onde cada chave é um item e o valor é o comprimento da string do item.
const arrayToObject = (itens) => {
  let newObeject = {};
  for (let i = 0; i < itens.length; i++) {
    let chave = itens[i];
    let valor = itens[i].length;
    newObeject[chave] = valor;
  }
  return newObeject;
};

// Dado um array de objetos que representam produtos com nome e preço, crie uma função que retorna um novo array de objetos com os nomes em maiúsculas e os preços aumentados em 10%.
const transformProducts = (produtos) => {
  const uppecaseProdutos = [];
  for (let i = 0; i < produtos.length; i++) {
    let porcentagem = produtos[i].preco * 0.1;
    let novoPreco = produtos[i].preco + porcentagem;
    let nomeUppercase = produtos[i].nome.toUpperCase();
    const newObjeto = {
      nome: nomeUppercase,
      preco: novoPreco,
    };
    uppecaseProdutos.push(newObjeto);
  }
  return uppecaseProdutos;
};

//  Dado um array de strings, crie uma função que retorna um novo array onde cada string está invertida.
const reverseStrings = (strings) => {
  let invertida = strings.map(function (reverso) {
    return reverso.split("").reverse().join("");
  });
  return invertida;
};

// Dado um array de objetos que representam alunos com nome e notas, crie uma função que retorna um novo array de objetos com a média das notas e um status de aprovação (média >= 7).
const calculateAverages = (alunos) => {
  const media = [];
  for (let aluno = 0; aluno < alunos.length; aluno++) {
    let somarMedias = alunos[aluno].notas.length;
    let somar = 0;
    for (let nota = 0; nota < alunos[aluno].notas.length; nota++) {
      somar += alunos[aluno].notas[nota];
    }
    let mediaTotal = somar / somarMedias;
    const status = mediaTotal >= 7 ? "Aprovado" : "Reprovado";
    const nome = alunos[aluno].nome;
    const newObjeto = {
      nome: nome,
      media: mediaTotal,
      status: status,
    };
    media.push(newObjeto);
  }
  return media;
};

// Dado um array de objetos que representam eventos com data no formato ISO, crie uma função que retorna um novo array de strings formatadas como "DD/MM/YYYY" e filtradas para manter apenas eventos após uma certa data.
const filterAndFormatDates = (eventos, dataLimite) => {};

// Dado um array de strings que representam frases, crie uma função que retorna um novo array onde cada palavra da frase está capitalizada.
const capitalizeWords = (frases) => {};

// Dado um array de objetos que representam medidas com valor e unidade (kg, g), crie uma função que retorna um novo array de objetos com todas as medidas convertidas para gramas.
const convertToGrams = (medidas) => {};

// Dado um array de números, crie uma função que retorna um novo array sem valores duplicados.
const removeDuplicates = (numeros) => {
  const numerosSemRepetição = [...new Set(numeros)];
  return numerosSemRepetição;
};

//Dado um array de strings, crie uma função que retorna um novo array onde cada string é invertida e em maiúsculas.
const reverseAndUpperCase = (strings) => {
  let inver = strings.map(function (revese) {
    return revese.toUpperCase().split("").reverse().join("");
  });
  return inver;
};

module.exports = {
  transformAndFilter,
  arrayToObject,
  transformProducts,
  reverseStrings,
  calculateAverages,
  filterAndFormatDates,
  capitalizeWords,
  convertToGrams,
  removeDuplicates,
  reverseAndUpperCase,
};
