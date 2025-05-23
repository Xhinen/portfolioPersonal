function ejercicio1(){
    //var, let las dos variables de javascript
    //var es una variable que es visible en toda la funcion
    //let solo es visible dentro del bloque de llaves donde se ha declarado. Es obligatorio crear la variable con let antes de utilizarla.
    //con let no se pueden pisar la variable declarada con anterioridad

    let contenido = document.getElementById("mensaje1").value;
    console.log(contenido);
}

function ejercicio2(){
    let contenido = document.getElementById("mensaje2").value;
    alert(contenido);
}

function ejercicio3(){
    let contenido = document.getElementById("mensaje3").value;
    document.getElementById("parrafo1").innerHTML = contenido;
}

function ejercicio4(){
    let respuesta = prompt("Introduzca texto");
    console.log(respuesta);

}
function ejercicio5(){
    let respuesta = prompt("Introduzca texto");
    alert(respuesta);
}

function ejercicio6(){
    let respuesta = prompt("Introduzca texto");
    document.getElementById("parrafo2").innerHTML = respuesta;
}