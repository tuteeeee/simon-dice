let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector('#boton-empezar').onclick = empezarJuego;

function empezarJuego() {
    reiniciarSecuencias();
    actualizarEstado('¡Jugando!');
    manejarJuego();
}

function reiniciarSecuencias() {
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    ronda = 0;
}

function actualizarEstado(estado) {
    document.querySelector('#estado').textContent = estado;
}

function manejarJuego() {
    const cuadradoRandom = obtenerCuadradoRandom();
    secuenciaMaquina.push(cuadradoRandom);
    iluminarCuadrado(cuadradoRandom);
}

function obtenerCuadradoRandom() {
    const $cuadrados = Number(document.querySelectorAll('.cuadrado').length);
    const numeroRandom = Math.floor(Math.random() * $cuadrados);
    
    return document.querySelectorAll('.cuadrado')[numeroRandom];
}

function iluminarCuadrado(cuadradoRandom) {
    cuadradoRandom.style.opacity = 1;

    setTimeout(function() {
        cuadradoRandom.style.opacity = 0.5;
    }, 500);
}
