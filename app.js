const campo = document.getElementById("campo");
const boton = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");
const lista = ["Manzana", "Banana", "Pera", "Naranja", "Kiwi"];
const btnLista = document.getElementById("btnLista");
const listaHTML = document.getElementById("listaHTML");
const btn3 = document.getElementById("btn3");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSumar = document.getElementById("btnSumar");
const resultadoSuma = document.getElementById("resultadoSuma");
const btnWhile = document.getElementById("btnWhile");
const resultadoWhile = document.getElementById("resultadoWhile");

function mostrarLista(cantidad) {
  listaHTML.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    listaHTML.innerHTML += "<li>" + lista[i] + "</li>";
  }
}

btnWhile.addEventListener("click", function() {
  let i = 1;
  let texto = "";

  while (i <= 10) {
    texto += i + " ";
    i++;
  }

  resultadoWhile.textContent = texto;
});

function esNumeroValido(valor) {
  return !isNaN(valor);
}

btnSumar.addEventListener("click", function() {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (!esNumeroValido(valor1) || !esNumeroValido(valor2)) {
    resultadoSuma.textContent = "Error: valores inválidos";
    return;
  }

  const resultadoFinal = sumar(valor1, valor2);
  resultadoSuma.textContent = resultadoFinal;
});

function sumar(a, b) {
  return a + b;
}

btn3.addEventListener("click", function() {
  mostrarLista(3);
});

btnLista.addEventListener("click", function() {
  mostrarLista(lista.length);
});

boton.addEventListener("click", function(){
  if (campo.value === ""){
    resultado.textContent = "El campo no puede estar vacío";
  } else if (campo.value.length < 3){
    resultado.textContent = "Debe tener al menos 3 caracteres";
  } else {
    resultado.textContent = "Válido";
  }
});