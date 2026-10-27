
/* ==================================
   CONFIGURACIÓN
================================== */

// 🔐 TU CLAVE
const CLAVE = "DENISEANDNOE";

// 💓 FECHA EN QUE COMENZÓ LA RELACIÓN
// Viernes 9 de octubre de 2026
// 10:00 de la noche
const fechaInicio = new Date("2026-10-09T22:00:00");


/* ==================================
   LOGIN
================================== */

function entrar() {

    const input =
        document.getElementById("passwordInput");

    const error =
        document.getElementById("errorMessage");

    const login =
        document.getElementById("loginScreen");

    const contenido =
        document.getElementById("mainContent");


    if (input.value === CLAVE) {

        error.textContent = "";

        login.classList.add("hide");

        setTimeout(() => {

            login.style.display = "none";

            contenido.classList.remove("hidden");

            crearParticulas();

            actualizarContador();

        }, 1000);

        lluviaDeCorazones();

    } else {

        error.textContent =
            "La clave no es correcta... intenta nuevamente 🌷";

        input.value = "";

        input.focus();
    }
}


/* ==================================
   ENTER PARA INGRESAR
================================== */

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            entrar();
        }

    });


/* ==================================
   ABRIR CARTA
================================== */

function abrirCarta() {

    const carta =
        document.getElementById("letter");

    carta.classList.add("show");

    carta.scrollIntoView({
        behavior: "smooth"
    });

    lluviaDeCorazones();
}


/* ==================================
   LLUVIA DE CORAZONES
================================== */

function lluviaDeCorazones() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            const corazones = [
                "❤️",
                "💗",
                "💖",
                "💕",
                "🌷",
                "💓"
            ];

            heart.textContent =
                corazones[
                    Math.floor(
                        Math.random() *
                        corazones.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                15 + Math.random() * 25 + "px";

            heart.style.animationDuration =
                3 + Math.random() * 3 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6500);

        }, i * 80);
    }
}


/* ==================================
   PARTÍCULAS
================================== */

function crearParticulas() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.textContent =
            Math.random() > .5
                ? "✦"
                : "·";

        particle.style.position =
            "absolute";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.opacity =
            .2 + Math.random() * .7;

        particle.style.color =
            "#ffb5d1";

        particle.style.fontSize =
            5 + Math.random() * 10 + "px";

        particle.style.animation =
            `floating ${
                3 + Math.random() * 4
            }s ease-in-out infinite`;

        particle.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(particle);
    }
}


/* ==================================
   ❤️ CONTADOR DE NUESTRA RELACIÓN
================================== */

function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        ahora - fechaInicio;


    // Si todavía no ha llegado
    // la fecha de inicio
    if (diferencia < 0) {

        document.getElementById("days")
            .textContent = "0";

        document.getElementById("hours")
            .textContent = "0";

        document.getElementById("minutes")
            .textContent = "0";

        document.getElementById("seconds")
            .textContent = "0";

        return;
    }


    const segundosTotales =
        Math.floor(
            diferencia / 1000
        );


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


    document.getElementById("days")
        .textContent = dias;

    document.getElementById("hours")
        .textContent =
            String(horas).padStart(2, "0");

    document.getElementById("minutes")
        .textContent =
            String(minutos).padStart(2, "0");

    document.getElementById("seconds")
        .textContent =
            String(segundos).padStart(2, "0");
}


/* Actualizar cada segundo */

setInterval(
    actualizarContador,
    1000
);

actualizarContador();