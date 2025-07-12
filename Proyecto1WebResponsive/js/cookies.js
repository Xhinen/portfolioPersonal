function aceptarCookies() {
    document.cookie = "cookie_consent=accepted; max-age=31536000; path=/";
    document.getElementById("cookiePopup").style.display = "none";
}

function rechazarCookies() {
    document.cookie = "cookie_consent=rejected; max-age=31536000; path=/";
    document.getElementById("cookiePopup").style.display = "none";
}

// Mostrar popup de personalización, añadido con .classList.add/remove("hidden") la animación del banner y el popup
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
        essential: true,
        analytics: true,
        personalization: true
    }));

    document.getElementById("cookiePopup").classList.add("hidden");
}

// Rechazar cookies no esenciales
function rechazarCookies() {
    localStorage.setItem("cookiePreferences", JSON.stringify({
        essential: true,
        analytics: false,
        personalization: false
    }));

    document.getElementById("cookiePopup").classList.add("hidden");
}

// Guardar preferencias personalizadas
function guardarPreferencias() {
    const analytics = document.getElementById("analyticsCookies").checked;
    const personalization = document.getElementById("personalizationCookies").checked;

    localStorage.setItem("cookiePreferences", JSON.stringify({
        essential: true,
        analytics: analytics,
        personalization: personalization
    }));

    cerrarPersonalizacion();
    document.getElementById("cookiePopup").classList.add("hidden");
}

// Ocultar el banner de cookies
function ocultarBannerCookies() {
    document.getElementById("cookiePopup").classList.add("hidden");
}

// Comprobar preferencias al cargar la web
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("cookiePopup");
    const prefs = localStorage.getItem("cookiePreferences");

    if (prefs) {
        ocultarBannerCookies();
        console.log("Preferencias ya guardadas:", JSON.parse(prefs));
    } else {
        popup.classList.remove("hidden"); // Mostrar el banner solo si no hay preferencias
    }
});

