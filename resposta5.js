//Resposta Exercício 5
function reverseString(str) {
  if (typeof str !== "string") return;

  str = str.trim();

  let arrayStr = str.split("");
  let novoArray = [];

  for (let i = arrayStr.length ; i >= 0; i--) {
    novoArray.push(arrayStr[i]);
  }

  let strReverse = novoArray.join("");
  return strReverse;
}

function validaEntrada() {
  let entrada = reverseString("Amor");

  if (!entrada) {
    return "Entrada inválida!";
  }
  return entrada;
}

console.log(validaEntrada());
