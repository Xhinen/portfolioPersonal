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

/* function personalizarCookies() {
    // Aquí puedes abrir un modal o redirigir a una página para personalizar cookies
    alert("Funcionalidad de personalización en desarrollo.");
} */

// Mostrar popup de personalización
function personalizarCookies() {
    document.getElementById("personalizarPopup").classList.remove("hidden");
    document.getElementById("cookiePopup").classList.add("hidden"); // Oculta el banner
}

// Ocultar el popup sin guardar
function cerrarPersonalizacion() {
    document.getElementById("personalizarPopup").classList.add("hidden");

    // Mostrar el banner de nuevo si no se han guardado las cookies, es decir, si se cierra la pantalla de personalización de cookies
    const prefs = localStorage.getItem("cookiePreferences");
    if (!prefs) {
        document.getElementById("cookiePopup").classList.remove("hidden");
    }

}

// Aceptar todas las cookies
function aceptarCookies() {
    localStorage.setItem("cookiePreferences", JSON.stringify({
        analytics: true,
        personalization: true
    }));

    ocultarBannerCookies();
    console.log("Todas las cookies aceptadas");
}

// Rechazar cookies no esenciales
function rechazarCookies() {
    localStorage.setItem("cookiePreferences", JSON.stringify({
        analytics: false,
        personalization: false
    }));

    ocultarBannerCookies();
    console.log("Solo cookies esenciales aceptadas");
}

// Guardar preferencias personalizadas
function guardarPreferencias() {
    const analytics = document.getElementById("analyticsCookies").checked;
    const personalization = document.getElementById("personalizationCookies").checked;

    localStorage.setItem("cookiePreferences", JSON.stringify({
        analytics,
        personalization
    }));

    document.getElementById("personalizarPopup").classList.add("hidden");
    ocultarBannerCookies();
    console.log("Preferencias personalizadas guardadas:", { analytics, personalization });
}

// Ocultar el banner de cookies
function ocultarBannerCookies() {
    document.getElementById("cookiePopup").classList.add("hidden");
}

// Comprobar preferencias al cargar la web
document.addEventListener("DOMContentLoaded", function () {
    const prefs = localStorage.getItem("cookiePreferences");
    if (prefs) {
        ocultarBannerCookies();
        console.log("Preferencias ya guardadas:", JSON.parse(prefs));
    }
});
