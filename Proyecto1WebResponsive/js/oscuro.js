const boton = document.getElementById("modoOscuro");
const banner = document.getElementById("banner");
const footer = document.getElementById("footer");

/* boton.addEventListener("click",oscuro);

function oscuro(){
    document.body.classList.toggle("oscuro");
    banner.classList.toggle("oscuro");
    footer.classList.toggle("oscuro");
} */

    // Función para aplicar el modo oscuro basado en el estado almacenado
    function aplicarModoOscuro() {
        const modoOscuroActivo = localStorage.getItem("modoOscuro") === "true";
        if (modoOscuroActivo) {
            document.body.classList.add("oscuro");
            if (banner) banner.classList.add("oscuro");
            if (footer) footer.classList.add("oscuro");
        } else {
            document.body.classList.remove("oscuro");
            if (banner) banner.classList.remove("oscuro");
            if (footer) footer.classList.remove("oscuro");
        }
    }

    // Aplicar el modo oscuro al cargar la página
    aplicarModoOscuro();

    // Manejar el clic en el botón
    boton.addEventListener("click", () => {
        // Alternar la clase oscuro
        document.body.classList.toggle("oscuro");
        if (banner) banner.classList.toggle("oscuro");
        if (footer) footer.classList.toggle("oscuro");

        // Guardar el estado en localStorage
        const modoOscuroActivo = document.body.classList.contains("oscuro");
        localStorage.setItem("modoOscuro", modoOscuroActivo);
    });