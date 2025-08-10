/* TOGGLE */
const boton = document.getElementById("modoOscuro");

// Comprobamos al cargar la web si el modo oscuro se activó con anterioridad
if (localStorage.getItem("tema") === "oscuro"){
    document.body.classList.add("oscuro");
}

boton.addEventListener("click",oscuro);

function oscuro(){
    document.body.classList.toggle("oscuro");


    // Guardar la preferencia en localStorage
    if (document.body.classList.contains("oscuro")){
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

