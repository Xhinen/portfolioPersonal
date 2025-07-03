/* const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies");
//Cuando no hay cookies aceptadas
if(!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
}); */


function aceptarCookies() {
    document.cookie = "cookie_consent=accepted; max-age=31536000; path=/";
    document.getElementById("cookiePopup").style.display = "none";
}

function rechazarCookies() {
    document.cookie = "cookie_consent=rejected; max-age=31536000; path=/";
    document.getElementById("cookiePopup").style.display = "none";
}

function personalizarCookies() {
    // Aquí puedes abrir un modal o redirigir a una página para personalizar cookies
    alert("Funcionalidad de personalización en desarrollo.");
}

// Mostrar el banner solo si no hay consentimiento previo
window.onload = function() {
    if (document.cookie.includes("cookie_consent")) {
    document.getElementById("cookiePopup").style.display = "none";
    }
};

