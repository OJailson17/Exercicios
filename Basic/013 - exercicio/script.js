// Objeto para receber os valores
const person = [{}, {}, {}, {}, {}];

// Função que recebe os dados e coloca no objeto person
function receiveDatas() {
  for (let i = 0; i < 5; i++) {
    let idade = Number(prompt("Digite as sua idade:"));
    let peso = Number(prompt("Digite o seu peso:"));
    let sexo = prompt("Digite o seu sexo:");

    person[i]["idade"] = idade;
    person[i]["peso"] = peso;
    person[i]["sexo"] = sexo;
  }

  console.log(checkSexo(person));
}

// Função que checa a quatidade de homens e mulheres
function checkSexo(str) {
  let result = str.map(function (sexo) {
    let arrSex = sexo.sexo;
    return arrSex;
  });
  const resultadoMen = result.filter((word) => word.indexOf("feminino"));
  const resultadoWomen = result.filter((word) => word.indexOf("masculino"));
  return `Este objeto possui ${resultadoMen.length} homens e ${resultadoWomen.length} mulheres`;
}

receiveDatas();
