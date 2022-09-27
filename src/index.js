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

    habilitarInputUsuario();
    manejarInputUsuario();
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
    secuenciaComputadora.push($cuadradoRandom);

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

function manejarInputUsuario(e) {
    const $cuadrado = e.target;
    secuenciaUsuario.push($cuadrado);

    iluminarCuadrado($cuadrado);
    deshabilitarInputUsuario();
}

function habilitarInputUsuario() {
    const $cuadrados = document.querySelectorAll('.cuadrado');

    $cuadrados.forEach($cuadrado => $cuadrado.addEventListener('click', manejarInputUsuario));
}

function deshabilitarInputUsuario() {
    const $cuadrados = document.querySelectorAll('.cuadrado');

    $cuadrados.forEach($cuadrado => $cuadrado.removeEventListener('click', manejarInputUsuario));
}
