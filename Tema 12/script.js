


// Seleccionar elementos



const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const descripcion = document.querySelector("#descripcion")
const categoria = document.querySelector("#categoria")
const estado = document.querySelector("#estado")
const calificacion = document.querySelector("#calificacion")
const imagen = document.querySelector("#imagen")
const contador = document.querySelector("#contador")
const MostrarErrores = document.querySelector("#MostrarErrores")
const seccionTarjetas = document.querySelector("#tarjetas")
 


let total = 0

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault()

  // Leer los valores
  const valornombre = nombre.value
  const valorcalificacion = calificacion.value
  const valordescripcion = descripcion.value
  const valorcategoria = categoria.value
  const valorestado = estado.value
  const valorimagen = imagen.value

  // Validar nombre vacío
  if (valornombre === "") {
    MostrarErrores.textContent = "El nombre no puede estar vacío"
    return
  }

  // Validar calificación entre 1 y 5
  if (valorcalificacion < 1 || valorcalificacion > 5) {
    MostrarErrores.textContent = "La calificación debe estar entre 1 y 5"
    return
  }

  // Limpiar error
  MostrarErrores.textContent = ""

  // Crear la tarjeta
  const tarjeta = document.createElement("div")
  tarjeta.classList.add("tarjeta")
   tarjeta.dataset.estado = valorestado 
   tarjeta.dataset.tipo = valorcategoria

   tarjeta.innerHTML = `
    <img src="${valorimagen}" alt="${valornombre}">
    <h3>${valornombre}</h3>
    <p>${valordescripcion}</p>
    <p>categoria: ${valorcategoria}</p>
    <p class="parrafoEstado">Estado: ${valorestado}</p>
    <p>Calificación: ${valorcalificacion} ⭐</p>
    <div>
    <button class="btnEliminar">Eliminar</button>
    <button class="btnEstado">Estado</button>
    </div>
  `

  // Agregar la tarjeta a la sección
  seccionTarjetas.appendChild(tarjeta)

  // Botón eliminar
  tarjeta.querySelector(".btnEliminar").addEventListener("click", function() {
    tarjeta.remove()
    total--
    contador.textContent = `Elementos agregados: ${total}`
  })

  // Botón cambiar estado
  tarjeta.querySelector(".btnEstado").addEventListener("click", function() {
    const parrafoEstado = tarjeta.querySelector(".parrafoEstado")
    const estadoActual = parrafoEstado.textContent

    if (estadoActual === "Estado: pendiente") {
      parrafoEstado.textContent = "Estado: en progreso"
      tarjeta.dataset.estado = "en progreso"
    } else if (estadoActual === "Estado: en progreso") {
      parrafoEstado.textContent = "Estado: terminado"
      tarjeta.dataset.estado = "terminado"
    } else {
      parrafoEstado.textContent = "Estado: pendiente"
      tarjeta.dataset.estado = "pendiente"
    }
  })
  // Actualizar el contador
  total++
  contador.textContent = `Elementos agregados: ${total}`

  // Limpiar el formulario
  formulario.reset()

})

// Filtros
const botonesFiltro = document.querySelectorAll(".filtro")

botonesFiltro.forEach(function(boton) {
  boton.addEventListener("click", function() {
    const filtro = boton.dataset.filtro
    const tarjetas = document.querySelectorAll(".tarjeta")

    tarjetas.forEach(function(tarjeta) {
      if (filtro === "todos") {
        tarjeta.style.display = "block"
      } else if (tarjeta.dataset.tipo === filtro || tarjeta.dataset.estado === filtro) {
        tarjeta.style.display = "block"
      } else {
        tarjeta.style.display = "none"
      }
    })
  })
})

// Modo oscuro
const btnModo = document.querySelector("#btnModo")

btnModo.addEventListener("click", function() {
  document.body.classList.toggle("modo-oscuro")
})

// Clic en nombre de tarjeta
seccionTarjetas.addEventListener("click", function(evento) {
  if (evento.target.tagName === "H3") {
    evento.target.classList.toggle("titulo-activo")
  }
})