const {
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
} = require("./app");

test("Multiplicar e filtrar números", () => {
  const numeros = [2, 5, 3, 7];
  expect(transformAndFilter(numeros)).toEqual([14]);
});

test("Converter array para objeto", () => {
  const itens = ["maçã", "banana", "cereja"];
  expect(arrayToObject(itens)).toEqual({ maçã: 4, banana: 6, cereja: 6 });
});

test("Transformar produtos", () => {
  const produtos = [
    { nome: "Produto A", preco: 100 },
    { nome: "Produto B", preco: 200 },
  ];
  const produtosTransformados = [
    { nome: "PRODUTO A", preco: 110 },
    { nome: "PRODUTO B", preco: 220 },
  ];
  expect(transformProducts(produtos)).toEqual(produtosTransformados);
});

test("Inverter strings", () => {
  const strings = ["abc", "def", "ghi"];
  expect(reverseStrings(strings)).toEqual(["cba", "fed", "ihg"]);
});

test("Calcular média e status dos alunos", () => {
  const alunos = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Bruno", notas: [5, 6, 7] },
  ];
  const resultadoEsperado = [
    { nome: "Ana", media: 8, status: "Aprovado" },
    { nome: "Bruno", media: 6, status: "Reprovado" },
  ];
  expect(calculateAverages(alunos)).toEqual(resultadoEsperado);
});

test("Filtrar e formatar datas", () => {
  const eventos = [
    { nome: "Evento 1", data: "2024-07-01T10:00:00Z" },
    { nome: "Evento 2", data: "2024-08-15T15:00:00Z" },
  ];
  const dataLimite = "2024-07-15";
  expect(filterAndFormatDates(eventos, dataLimite)).toEqual(["15/08/2024"]);
});

test("Capitalizar palavras nas frases", () => {
  const frases = ["ola mundo", "bem vindo ao javascript"];
  expect(capitalizeWords(frases)).toEqual([
    "Ola Mundo",
    "Bem Vindo Ao Javascript",
  ]);
});

test("Converter medidas para gramas", () => {
  const medidas = [
    { valor: 2, unidade: "kg" },
    { valor: 500, unidade: "g" },
  ];
  const medidasConvertidas = [
    { valor: 2000, unidade: "g" },
    { valor: 500, unidade: "g" },
  ];
  expect(convertToGrams(medidas)).toEqual(medidasConvertidas);
});

test("Remover duplicatas do array", () => {
  const numeros = [1, 2, 2, 3, 4, 4, 5];
  expect(removeDuplicates(numeros)).toEqual([1, 2, 3, 4, 5]);
});

test("Inverter e converter strings para maiúsculas", () => {
  const strings = ["abc", "def", "ghi"];
  expect(reverseAndUpperCase(strings)).toEqual(["CBA", "FED", "IHG"]);
});
