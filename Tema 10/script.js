

function cambiartitulo() {
    document.getElementById("titulo").textContent = "Hola jonathan";
}

function cambiarparrafo() {
    document.getElementById("parrafo").innerHTML = "quiero cambiar el <strong>parrafo</strong>";
}

function cambiarImagen() {
    document.getElementById("imagen").src = "img/imagen2.jpg";
}

function Mostrarmensaje() {
    let mensaje = document.getElementById("inputTexto").value;
    alert(mensaje);
}



function agregarClase() {
    document.getElementById("texto").classList.add("textoRojo");
    console.log(document.getElementById("texto").classList);
}

function quitarClase() {
    document.getElementById("texto2").classList.remove("textoRojo");
    console.log(document.getElementById("texto2").classList);
}



function cambiarfondo() {
    document.body.classList.toggle("fondo");
}

function agregarItem() {
    let inputLista = document.getElementById("inputLista");
    let texto = inputLista.value.trim();

    if (texto === "") return;

    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    document.getElementById("lista").appendChild(nuevotexto);

    inputLista.value = "";
}



let inputNombre  = document.getElementById("nombre");
let inputColor   = document.getElementById("color");
let inputMensaje = document.getElementById("mensaje");

let errorNombre  = document.getElementById("error-nombre");
let errorColor   = document.getElementById("error-color");
let errorMensaje = document.getElementById("error-mensaje");

let resultado          = document.getElementById("resultado");
let resultadoNombre    = document.getElementById("resultado-nombre");
let resultadoColor     = document.getElementById("resultado-color");
let resultadoMensaje   = document.getElementById("resultado-mensaje");

let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

document.getElementById("btn-enviar").addEventListener("click", function () {

    let nombre  = inputNombre.value.trim();
    let color   = inputColor.value.trim();
    let mensaje = inputMensaje.value.trim();

    let hayErrores = false;

    if (nombre === "") {
        mostrarError(inputNombre, errorNombre, "El nombre no puede estar vacío.");
        hayErrores = true;
    } else {
        limpiarError(inputNombre, errorNombre);
    }

    if (color === "") {
        mostrarError(inputColor, errorColor, "Ingresá tu color favorito.");
        hayErrores = true;
    } else {
        limpiarError(inputColor, errorColor);
    }

    if (mensaje === "") {
        mostrarError(inputMensaje, errorMensaje, "El mensaje no puede estar vacío.");
        hayErrores = true;
    } else {
        limpiarError(inputMensaje, errorMensaje);
    }

    if (hayErrores) return;

    resultadoNombre.textContent  = "Nombre: " + nombre;
    resultadoColor.textContent   = "Color favorito: " + color;
    resultadoMensaje.textContent = "Mensaje: " + mensaje;

    resultado.classList.remove("oculto");
    resultado.style.borderLeftColor = color;

    agregarTarjeta(nombre, color, mensaje);

    inputNombre.value  = "";
    inputColor.value   = "";
    inputMensaje.value = "";
});

function mostrarError(input, spanError, textoError) {
    input.classList.add("input-error");
    spanError.textContent = textoError;
}

function limpiarError(input, spanError) {
    input.classList.remove("input-error");
    spanError.textContent = "";
}

function agregarTarjeta(nombre, color, mensaje) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.style.borderTopColor = color;

    let tituloTarjeta = document.createElement("h3");
    tituloTarjeta.textContent = nombre;

    let colorTarjeta = document.createElement("p");
    colorTarjeta.innerHTML = "Color: <strong>" + color + "</strong>";
    colorTarjeta.style.color = color;

    let mensajeTarjeta = document.createElement("p");
    mensajeTarjeta.textContent = mensaje;

    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(colorTarjeta);
    tarjeta.appendChild(mensajeTarjeta);
    contenedorTarjetas.appendChild(tarjeta);
}