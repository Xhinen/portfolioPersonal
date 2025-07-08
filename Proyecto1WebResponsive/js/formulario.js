//ENVIAR FORMULARIO
const form = document.getElementById("contacto-form");
const mensajeDiv = document.getElementById("form-mensaje");

form.addEventListener("submit", function(e){
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if(nombre === "" || email === "" || mensaje === ""){
        mensajeDiv.textContent = "Por favor completo todos los campos";
        mensajeDiv.style.color = "red";
        return;
    }

    mensajeDiv.textContent = "Mensaje enviado correctamente";
    mensajeDiv.style.color = "green";
    form.requestFullscreen();
})