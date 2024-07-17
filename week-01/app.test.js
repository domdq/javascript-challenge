const {
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
} = require('../week-02/app');

test('Obter nomes das pessoas', () => {
  const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Bruno', idade: 22 },
    { nome: 'Carla', idade: 30 },
  ];
  expect(getNames(pessoas)).toEqual(['Ana', 'Bruno', 'Carla']);
});

test('Formatar datas', () => {
  const eventos = [
    { nome: 'Evento 1', data: '2024-07-01T10:00:00Z' },
    { nome: 'Evento 2', data: '2024-08-15T15:00:00Z' },
  ];
  expect(formatDates(eventos)).toEqual(['01/07/2024', '15/08/2024']);
});

test('Filtrar números maiores que 10', () => {
  const numeros = [5, 12, 8, 21, 3, 18];
  expect(filterGreaterThanTen(numeros)).toEqual([12, 21, 18]);
});

test('Encontrar produto caro', () => {
  const produtos = [
    { nome: 'Produto A', preco: 45 },
    { nome: 'Produto B', preco: 55 },
    { nome: 'Produto C', preco: 35 },
  ];
  expect(findExpensiveProduct(produtos)).toEqual({
    nome: 'Produto B',
    preco: 55,
  });
});

test('Calcular total das transações', () => {
  const transacoes = [
    { descricao: 'Transação 1', valor: 100 },
    { descricao: 'Transação 2', valor: 200 },
    { descricao: 'Transação 3', valor: 50 },
  ];
  expect(calculateTotal(transacoes)).toBe(350);
});

test('Converter nomes para maiúsculas', () => {
  const nomes = ['ana', 'bruno', 'carla'];
  expect(toUpperCaseNames(nomes)).toEqual(['ANA', 'BRUNO', 'CARLA']);
});

test('Aplicar desconto nos produtos', () => {
  const produtos = [
    { nome: 'Produto A', preco: 100 },
    { nome: 'Produto B', preco: 200 },
    { nome: 'Produto C', preco: 150 },
  ];
  const produtosComDesconto = [
    { nome: 'Produto A', preco: 90 },
    { nome: 'Produto B', preco: 180 },
    { nome: 'Produto C', preco: 135 },
  ];
  expect(applyDiscount(produtos)).toEqual(produtosComDesconto);
});

test('Converter temperaturas de Celsius para Fahrenheit', () => {
  const temperaturasCelsius = [0, 20, 30, 40];
  expect(celsiusToFahrenheit(temperaturasCelsius)).toEqual([32, 68, 86, 104]);
});

test('Imprimir nomes no console', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  const nomes = ['Ana', 'Bruno', 'Carla'];
  printNames(nomes);
  expect(consoleSpy).toHaveBeenCalledWith('Ana');
  expect(consoleSpy).toHaveBeenCalledWith('Bruno');
  expect(consoleSpy).toHaveBeenCalledWith('Carla');
  consoleSpy.mockRestore();
});

test('Imprimir notas dos alunos no console', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  const alunos = [
    { nome: 'Ana', nota: 9 },
    { nome: 'Bruno', nota: 7.5 },
    { nome: 'Carla', nota: 8.5 },
  ];
  printStudentGrades(alunos);
  expect(consoleSpy).toHaveBeenCalledWith('Ana tirou nota 9');
  expect(consoleSpy).toHaveBeenCalledWith('Bruno tirou nota 7.5');
  expect(consoleSpy).toHaveBeenCalledWith('Carla tirou nota 8.5');
  consoleSpy.mockRestore();
});
