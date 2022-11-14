let secuenciaComputadora = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector('#boton-empezar').onclick = empezarJuego;

function empezarJuego() {
    reiniciarSecuencias();
    manejarJuego();
}

function manejarJuego() {
    actualizarRonda();
    manejarInputComputadora();
    deshabilitarInputUsuario();

    const RETRASO_TURNO_JUGADOR = (secuenciaComputadora.length + 1) * 1000;

    secuenciaComputadora.forEach(function($cuadrado, index) {
        const RETRASO_MS = (index + 1) * 1000;
        setTimeout(function() {
            iluminarCuadrado($cuadrado);
        }, RETRASO_MS);
    });

    setTimeout(function() {
        actualizarEstado('Turno de Jugador');
        habilitarInputUsuario();
    }, RETRASO_TURNO_JUGADOR);

    secuenciaUsuario = [];
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
    actualizarEstado('Turno de Computadora');
    const $cuadradoRandom = obtenerCuadradoRandom();
    secuenciaComputadora.push($cuadradoRandom);
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

    const cuadradoComputadora = secuenciaComputadora[secuenciaUsuario.length - 1];

    if ($cuadrado.id !== cuadradoComputadora.id) {
        perderJuego();
        return;
    }

    if (secuenciaUsuario.length === secuenciaComputadora.length) {
        deshabilitarInputUsuario();
        setTimeout(manejarJuego, 1000);
    }
}

function habilitarInputUsuario() {
    const $cuadrados = document.querySelectorAll('.cuadrado');

    $cuadrados.forEach($cuadrado => $cuadrado.addEventListener('click', manejarInputUsuario));
}

function deshabilitarInputUsuario() {
    const $cuadrados = document.querySelectorAll('.cuadrado');

    $cuadrados.forEach($cuadrado => $cuadrado.removeEventListener('click', manejarInputUsuario));
}

function actualizarRonda() {
    document.querySelector('#ronda').textContent = ronda += 1;
}

function perderJuego() {
    deshabilitarInputUsuario();
    actualizarEstado('¡Perdiste, Tocá "Empezar"!');
}
