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

btnWhile.addEventListener("click", function() {
  let i = 1;
  let texto = "";

  while (i <= 10) {
    texto += i + " ";
    i++;
  }

  resultadoWhile.textContent = texto;
});


btnSumar.addEventListener("click", function(){
    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);

    const resultadoFinal = sumar(valor1, valor2);

    resultadoSuma.textContent = resultadoFinal;
});

function esNumeroValido(valor) {
    return valor > 0;
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

function sumar(a,b) {
    return a + b;
}


btn3.addEventListener("click", function(){
    listaHTML.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        listaHTML.innerHTML += "<li>" + lista[i] + "</li>";

    }
});


btnLista.addEventListener("click", function(){

});

listaHTML.innerHTML = "";

for(let i = 0; i < lista.length; i++) {
    listaHTML.innerHTML += "<li>" + lista[i] + "</li>";

}

boton.addEventListener("click", function(){
if (campo.value === ""){
    resultado.textContent = "El campo no puede estar vacio";

} else if (campo.value.length < 3){
    resultado.textContent = "Debe tener al menos 3 caracteres";

} else {
    resultado.textContent = "Valido";
}

});