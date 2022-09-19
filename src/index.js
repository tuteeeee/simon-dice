let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

document.querySelector('#boton-empezar').onclick = empezarJuego;

function empezarJuego() {
    reiniciarSecuencias();
    actualizarEstado('¡Jugando!');
}

function reiniciarSecuencias() {
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    ronda = 0;
}

function actualizarEstado(estado) {
    document.querySelector('#estado').textContent = estado;
}
