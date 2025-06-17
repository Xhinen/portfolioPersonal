/* let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav(); */


let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav() {
    let lanz = document.querySelector(lanzador);
    let despl = document.querySelector(desplegable);
    lanz.addEventListener("click", function(e) {
        e.preventDefault(); // Evita que el enlace recargue la página
        despl.classList.toggle(despliegaClase);
    });
}

nav();