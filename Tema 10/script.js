


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




document.getElementById("texto").classList.add("textoRojo");
console.log(document.getElementById("texto").classList);


function quitarClase() {
    document.getElementById("texto").classList.remove("textoRojo");
    console.log(document.getElementById("texto").classList);
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

    document.getElementById("lista").appendChild(nuevoItem);

    inputLista.value = "";
}