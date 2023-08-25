function limpiarSorteo() {
  const numerosSorteados = document.getElementById("numerosSorteados");
  const bola = document.querySelector(".number");
  const count=document.querySelector(".count");
  
  numerosSorteados.innerHTML = "";  // Borra los números sorteados en el elemento
  globoVisible = false;
  sortearBtn.disabled = false;
  bola.textContent="";
  count.textContent="0";
  // Elimina el contenido de la variable "numerosSorteadosArray" si lo necesitas
}

document.addEventListener("DOMContentLoaded", () => {
  const sortearBtn = document.getElementById("sortearBtn");
  const clear=document.getElementById("clear");
  const numerosSorteados = document.getElementById("numerosSorteados");
  const bola = document.querySelector(".number");
  const numerosSorteadosArray = [];
  const totalNumeros = 90;
  const count=document.querySelector(".count");

  let index=1;

  sortearBtn.addEventListener("click", () => {
    
    
    if (numerosSorteadosArray.length == totalNumeros) {
      alert("¡Ya se han sorteado todos los números!");
      sortearBtn.disabled = true;
      return;
    }

    count.textContent=index;

    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * totalNumeros) + 1;
    } while (numerosSorteadosArray.includes(numeroAleatorio));

    numerosSorteadosArray.push(numeroAleatorio);

    const nuevoNumero = document.createElement("div");
    nuevoNumero.classList.add("numero-sorteado");
    nuevoNumero.textContent = numeroAleatorio;

    numerosSorteados.appendChild(nuevoNumero);

    // Actualizar número en el globo 
    bola.textContent = numeroAleatorio;
    
    index++;
  });

  clear.addEventListener("click", () => {
    limpiarSorteo(); // Llama a la función para limpiar el sorteo
  });
});


