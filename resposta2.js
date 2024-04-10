/**
 * 2) Dado a sequência de Fibonacci, onde se inicia
 * por 0 e 1 e o próximo valor sempre será a soma dos
 * 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
 *  escreva um programa na linguagem que desejar onde, informado um número,
 *  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se
 * o número informado pertence ou não a sequência.
 */

function fibonacci(numero) {
  let primeiro = 0;
  let segundo = 1;
  let proximo = 0;

  const arrayFibonacci = [];
  arrayFibonacci.push(primeiro);
  for (let i = 0; i < numero; i++) {
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    arrayFibonacci.push(segundo);
  }

  if (arrayFibonacci.includes(numero)) {
    return `o número informado pertence a sequência`;
  } else {
    return `o número informado não pertence a sequência`;
  }
}
console.log(fibonacci(34));
