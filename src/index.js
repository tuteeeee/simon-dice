let secuenciaComputadora = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector('#boton-empezar') = empezarJuego;

function empezarJuego() {
    reiniciarSecuencias();
    manejarJuego();
}

function manejarJuego() {}

function reiniciarSecuencias() {
    secuenciaComputadora = [];
    secuenciaUsuario = [];
    ronda = 0;
}

function actualizarEstado(nuevoEstado) {
    document.querySelector('#estado').textContent = nuevoEstado;
}
