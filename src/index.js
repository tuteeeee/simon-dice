let secuenciaComputadora = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector('#boton-empezar').onclick = empezarJuego;

function empezarJuego() {
    reiniciarSecuencias();
    manejarJuego();
}

function manejarJuego() {
    manejarInputComputadora();
}

function reiniciarSecuencias() {
    secuenciaComputadora = [];
    secuenciaUsuario = [];
    ronda = 0;
}

function actualizarEstado(nuevoEstado) {
    document.querySelector('#estado').textContent = nuevoEstado;
}

function manejarInputComputadora() {
    const $cuadradoRandom = obtenerCuadradoRandom();

    iluminarCuadrado($cuadradoRandom);
}

function obtenerCuadradoRandom() {
    const $cuadrados = Number(document.querySelectorAll('.cuadrado').length);
    const numeroRandom = Math.floor(Math.random() * $cuadrados);

    return document.querySelectorAll('.cuadrado')[numeroRandom];
}

function iluminarCuadrado(cuadrado) {
    cuadrado.style.opacity = 1;

    setTimeout(function() {
        cuadrado.style.opacity = 0.5;
    }, 400);
}
