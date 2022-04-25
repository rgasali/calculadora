//DECLARACION DE VARIABLES
let primerNumero = <HTMLInputElement>document.getElementById("primerNumero");
let segundoNumero = <HTMLInputElement>document.getElementById("segundoNumero");
let btnCalcularpotencia = <HTMLButtonElement>(
  document.getElementById("btnCalcularPotencia")
);
let divResultado = <HTMLDivElement>document.getElementById("resultado");

let btnSumar = <HTMLButtonElement>document.getElementById("btnSumar");
let btnRestar = <HTMLButtonElement>document.getElementById("btnRestar");
let btnMultiplicar = <HTMLButtonElement>(
  document.getElementById("btnMultiplicar")
);
let btnDividir = <HTMLButtonElement>document.getElementById("btnDividir");

let valorPrimerNumero: number;
let valorSegundoNumero: number;
let resultado: number;
let sumaExponencial: number;

//DECLARACION DE FUNCIONES:

function potenciar(base: number, exponente: number) {
  sumaExponencial = base;
  for (let contador = 1; contador < Number(exponente); contador++) {
    sumaExponencial = Number(sumaExponencial) * Number(base);
  }

  return Number(sumaExponencial);
}

function sumar(num1: number, num2: number) {
  return num1 + num2;
}

function restar(num1: number, num2: number) {
  return num1 - num2;
}

function dividir(dividendo: number, divisor: number) {
  return dividendo / divisor;
}

function multiplicar(multiplicando: number, multiplicador: number) {
  return multiplicando * multiplicador;
}
//RESTO DEL CODIGO

btnCalcularpotencia.addEventListener("click", () => {
  valorPrimerNumero = Number(primerNumero.value);
  valorSegundoNumero = Number(segundoNumero.value);
  if (segundoNumero.value !== "") {
    divResultado.innerHTML =
      "debe ingresar un numero base y un numero exponente";
  }

  resultado = potenciar(valorPrimerNumero, valorSegundoNumero);
  if (valorSegundoNumero === 0) {
    divResultado.innerHTML = "el resultado es 1";
  } else if (valorSegundoNumero < 0) {
    divResultado.innerHTML = "el exponente debe ser un numero positivo";
  } else {
    divResultado.innerHTML = `El resultado es ${resultado}`;
    console.log(`El resultado es ${resultado}`);
  }
});

btnSumar.addEventListener("click", () => {
  valorPrimerNumero = Number(primerNumero.value);
  valorSegundoNumero = Number(segundoNumero.value);
  divResultado.innerHTML = `El resultado es ${sumar(
    valorPrimerNumero,
    valorSegundoNumero
  )}`;
});

btnRestar.addEventListener("click", () => {
  valorPrimerNumero = Number(primerNumero.value);
  valorSegundoNumero = Number(segundoNumero.value);
  divResultado.innerHTML = `El resultado es ${restar(
    valorPrimerNumero,
    valorSegundoNumero
  )}`;
});

btnDividir.addEventListener("click", () => {
  valorPrimerNumero = Number(primerNumero.value);
  valorSegundoNumero = Number(segundoNumero.value);
  divResultado.innerHTML = `El resultado es ${dividir(
    valorPrimerNumero,
    valorSegundoNumero
  )}`;
});

btnMultiplicar.addEventListener("click", () => {
  valorPrimerNumero = Number(primerNumero.value);
  valorSegundoNumero = Number(segundoNumero.value);
  divResultado.innerHTML = `El resultado es ${multiplicar(
    valorPrimerNumero,
    valorSegundoNumero
  )}`;
});
//pruebas de escritorio

// base    exponente   resultado esperado              resultado logrado
// 1          4               1                              1
// 3          5              243                            243
// 0          4               0                              0
//-4          3              -64                           -64
// 3          1               3                             3
// 4          0               1                            1
// 3          -1      solicitar valores positivos          solicitar valores positivos
//
