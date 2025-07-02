const boton = document.getElementById("modoOscuro");
/* const banner = document.getElementById("banner"); */
/* const footer = document.querySelector("footer"); */

boton.addEventListener("click",oscuro);

function oscuro(){
    document.body.classList.toggle("oscuro");
    banner.classList.toggle("oscuro");
    pie.classList.toggle("oscuro");
}