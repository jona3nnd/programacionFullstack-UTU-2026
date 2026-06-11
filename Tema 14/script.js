// agarrar elementos del HTML

const traerGatoButton = document.getElementById("traerGato");

const gatoDiv = document.getElementById("gato");

const mensaje = document.getElementById("mensaje");

const infoGato = document.getElementById("infoGato" )

// API KEY

const apiKey = "live_WNnsiCH1QPMSn2pL3QKEG52jUKuDETAVVwimhbDzfFh1OzHChZauYL80uKc8Rdi4";


// variable para guardar el id del gato

let idGatoActual = "";



// función traer gato

async function traerGato(){

    try{


        const respuesta = await fetch(
        "https://api.thecatapi.com/v1/images/search",
        {

            headers:{
                "x-api-key": apiKey
            }

        });



        const datos = await respuesta.json();


        console.log(datos);



        // guardar ID

        idGatoActual = datos[0].id;
      
 console.log("ID del gato:", idGatoActual);

    // mostrar información con enlace clicable a la imagen
    infoGato.innerHTML = `
<b>ID del gato:</b> ${idGatoActual}<br>
<b>URL:</b> <a href="${datos[0].url}" target="_blank" rel="noopener noreferrer">Ver imagen</a>
`;

        // mostrar imagen

        gatoDiv.innerHTML = `

        <img 
        src="${datos[0].url}" 
        width="300">

        `;



        mensaje.textContent = 
        "Gato cargado correctamente";


    }
    catch(error){

        console.log("Error:", error);

        mensaje.textContent =
        "Error al traer gato";

    }

}




// botón traer gato

traerGatoButton.addEventListener(
"click",
traerGato
);



// cargar uno al entrar

traerGato();



const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");

const contadorLikes = document.getElementById("contenedorlike");
const contadorDislikes = document.getElementById("contenedordislike");


let likes = 0;
let dislikes = 0;



async function votar(valor){


    const respuesta = await fetch(

    "https://api.thecatapi.com/v1/votes",

    {

        method:"POST",

        headers:{

            "Content-Type":"application/json",

            "x-api-key": apiKey

        },


        body:JSON.stringify({

            image_id:idGatoActual,

            value:valor

        })


    });


    console.log("Estado voto:", respuesta.status);



    if(respuesta.ok){


        if(valor === 1){


            likes++;

            contadorLikes.textContent = likes;

            mensaje.textContent =
            "✅ Me gusta registrado";


        }else{


            dislikes++;

            contadorDislikes.textContent = dislikes;

            mensaje.textContent =
            "✅ No me gusta registrado";

        }


        traerGato();

    }


}





likeButton.addEventListener(
"click",
()=>{

    votar(1);

});



dislikeButton.addEventListener(
"click",
()=>{

    votar(-1);

});