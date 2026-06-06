console.log("JavaScript conectado");

const button = document.getElementById('boton');
const chiste = document.getElementById('chiste');
const categoria = document.getElementById('categoria');
const tipo = document.getElementById('tipo');
const idioma = document.getElementById('idioma');
const NSFW = document.getElementById('nsfw');
const religious = document.getElementById('religious');
const political = document.getElementById('political');
const racist = document.getElementById('racist');
const sexist = document.getElementById('sexist');
const explicit = document.getElementById('explicit');

async function traerchiste() {

    try {

        chiste.textContent = "Cargando chiste...";

        let filtros = [];


        if (NSFW.checked){
            filtros.push("nsfw");
        }

        if (religious.checked){
            filtros.push("religious");
        }

        if (political.checked){
            filtros.push("political");
        }

        if (racist.checked){
            filtros.push("racist");
        }

        if (sexist.checked){
            filtros.push("sexist");
        }

        if (explicit.checked){
            filtros.push("explicit");
        }


        let url =
        `https://v2.jokeapi.dev/joke/${categoria.value}?lang=${idioma.value}`;


        if(tipo.value !== ""){
            url += `&type=${tipo.value}`;
        }


        if(filtros.length > 0){
            url += `&blacklistFlags=${filtros.join(",")}`;
        }


        console.log(url);


        const response = await fetch(url);


        const data = await response.json();


        if(data.error){

            throw new Error("Error API");

        }


        if(data.type === "single"){

            chiste.textContent = data.joke;

        }else{

            chiste.textContent =
            data.setup + " 😂 " + data.delivery;

        }


    } catch(error){

        console.log(error);

        chiste.textContent =
        "Error al obtener el chiste";

    }

}

button.addEventListener('click', traerchiste);
