let p= document.getElementById("edad_java"); // capturo span edad_java, y ...
p.innerText=calc_edad(22,05,1968);            //cambio su texto por mi edad


// calcula edad en años
function calc_edad(dia,mes,año) 
{
    const hoy = new Date();
    let años  = hoy.getFullYear() - año;
   // Los meses en Date empiezan en 0, por eso sumo 1
  if (mes > (hoy.getMonth() + 1) || dia > hoy.getDate())
      años--;
  //console.log(años);
  return años
}


 // Ventana modal
let modal = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton = document.getElementById("abrirModal");

// Elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];


// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});