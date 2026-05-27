function cambiartitulo() {
    document.getElementById("titulo").textContent = "Hola jonathan";
}

function cambiarparrafo() {
    document.getElementById("parrafo").innerHTML = "quiero cambiar el parrafo";
}

function cambiarImagen() {
    document.getElementById("imagen").src = "img/imagen2.jpg";
}
function Mostrarmensaje() {
    let mensaje = document.getElementById("inputTexto").value;
    alert(mensaje);
}
function cambiarfondo() {
    document.body.classList.toggle("fondo");

}

document.getElementById("texto").classList.add("texorojo");
console.log(document.getElementById("texto").classList);