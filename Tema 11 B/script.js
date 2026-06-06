const form = document.getElementById('form');

const tituloimagen = document.getElementById('tituloimagen');

const urlimagen = document.getElementById('urlimagen');

const galeria = document.getElementById('galeria');

const errorMessage = document.getElementById('error-message');


const totalImages = document.getElementById("TotalDeImagen");

const favoriteImages = document.getElementById("mostrarfavoritas");

const noFavoriteImages = document.getElementById("mostrarnofavoritas");



let imagenes = [];

let filtroActual = "todas";




// AGREGAR IMAGEN

form.addEventListener('submit', function(event) {

    event.preventDefault();


    let titulo = tituloimagen.value.trim();

    let url = urlimagen.value.trim();



    if(titulo === "" || url === ""){

        errorMessage.textContent = "Completa todos los campos";

        return;

    }


    errorMessage.textContent = "";



    const nuevaImagen = {

        titulo: titulo,

        url: url,

        favorita: false

    };


    imagenes.push(nuevaImagen);



    const tarjeta = document.createElement("li");



    tarjeta.innerHTML = `

    <h3>${titulo}</h3>

    <img src="${url}" width="200">


    <br>

    <button class="favorite-btn">
    Favorito
    </button>


    <button class="delete-btn">
    Eliminar
    </button>

    `;



    galeria.appendChild(tarjeta);



    // FAVORITO

    const favoriteBtn = tarjeta.querySelector(".favorite-btn");


    favoriteBtn.addEventListener("click", function(){


        tarjeta.classList.toggle("favorite");


        nuevaImagen.favorita = !nuevaImagen.favorita;


        updateStats();


    });





    // ELIMINAR

    const deleteBtn = tarjeta.querySelector(".delete-btn");


    deleteBtn.addEventListener("click", function(){


        tarjeta.remove();


        imagenes = imagenes.filter(img => img !== nuevaImagen);


        updateStats();


    });



    updateStats();


    form.reset();


});





// CONTADORES

function updateStats(){


    let total = imagenes.length;


    let favoritas = imagenes.filter(img => img.favorita).length;


    let noFavoritas = total - favoritas;



    totalImages.textContent = total;


    favoriteImages.textContent = favoritas;


    noFavoriteImages.textContent = noFavoritas;


}






// BORRAR GALERIA

const clearButton = document.getElementById("clear-all");


clearButton.addEventListener("click", function(){


    imagenes = [];


    galeria.innerHTML = "";


    updateStats();


});







// FILTROS

const filterButtons = document.querySelectorAll(".filter-btn");



filterButtons.forEach(button => {


    button.addEventListener("click", function(){


        filtroActual = this.dataset.filter;


        aplicarFiltro();


    });


});





function aplicarFiltro(){


    const tarjetas = document.querySelectorAll("#galeria li");



    tarjetas.forEach(tarjeta => {



        if(filtroActual === "todas"){


            tarjeta.style.display = "block";


        }



        else if(filtroActual === "favoritas"){



            if(tarjeta.classList.contains("favorite")){

                tarjeta.style.display = "block";

            }else{

                tarjeta.style.display = "none";

            }


        }




        else if(filtroActual === "nofavoritas"){



            if(!tarjeta.classList.contains("favorite")){


                tarjeta.style.display = "block";


            }else{


                tarjeta.style.display = "none";


            }


        }


    });


}