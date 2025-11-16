
function ejercicioIF() {
  let mag = parseFloat(document.getElementById("magnitud").value);
  let texto = "";
  if (mag < 0) texto = "Extremadamente brillante";
  else if (mag < 2) texto = "Muy brillante";
  else if (mag < 4) texto = "Brillante";
  else if (mag < 6) texto = "Débil";
  else texto = "No visible";
  document.getElementById("resIF").textContent = texto;
}


function ejercicioFOR() {
  let entrada = document.getElementById("distancias").value;
  let distancias = entrada.split(",").map(Number);
  let suma = 0;
  for (let i = 0; i < distancias.length; i++) {
    suma += distancias[i];
  }
  let promedio = suma / distancias.length;
  document.getElementById("resFOR").textContent = "Promedio: " + promedio;
}

function ejercicioWHILE() {
  let entrada = document.getElementById("diametros").value;
  let diametros = entrada.split(",").map(Number);
  let i = 0, grandes = 0;
  while (diametros[i] !== 0) {
    if (diametros[i] > 50) grandes++;
    i++;
  }
  document.getElementById("resWHILE").textContent = "Cráteres grandes: " + grandes;
}

function ejercicioSWITCH() {
  let codigo = parseInt(document.getElementById("codigo").value);
  let cuerpo = "";
  switch (codigo) {
    case 1: cuerpo = "Estrella"; break;
    case 2: cuerpo = "Planeta"; break;
    case 3: cuerpo = "Cometa"; break;
    case 4: cuerpo = "Asteroide"; break;
    case 5: cuerpo = "Galaxia"; break;
    default: cuerpo = "Código inválido";
  }
  document.getElementById("resSWITCH").textContent = cuerpo;
}

function ejercicioDOWHILE() {
  let entrada = document.getElementById("valores").value;
  let valores = entrada.split(",");
  let i = 0, texto = "";
  do {
    if (!isNaN(valores[i]) && Number(valores[i]) < 5) {
      texto += "Valor " + valores[i] + ": noche profunda. ";
    }
    i++;
  } while (valores[i] !== "no");
  document.getElementById("resDO").textContent = texto;
}
