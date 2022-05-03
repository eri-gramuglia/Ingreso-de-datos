let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Indique la altura de la persona:";

btnEnv.addEventListener("click", () => {
  console.log("La altura es:", dato.value);
});
