const form = document.getElementById('form');
const taskInput = document.getElementById('task-input');
const nombreInput = document.getElementById('nombre-input');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');
const taskList = document.getElementById('list');



const totalTasks = document.getElementById('stat-total');
const completedTasks = document.getElementById('stat-done');
const pendingTasks = document.getElementById('stat-pending');

let filtroActual = "todas";
let tarea = [];

form.addEventListener('submit', function(event) {   
    event.preventDefault();

    console.log('Formulario enviado');

    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let task = taskInput.value.trim();  

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Tarea:', task);    

   if (nombre === '' || email === '' || task === '') {

    errorMessage.textContent = 'Completa todos los campos.';
    return;

}


// validar nombre
if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombre)) {

    errorMessage.textContent = 'El nombre no es válido.';
    return;

}


// validar email
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

    errorMessage.textContent = 'El correo no es válido.';
    return;

}

    errorMessage.textContent = '';

    const nuevaTarea = {                
    nombre: nombre,
    email: email,
    task: task,
    completed: false,
    id: Date.now()
};
    
    tarea.push(nuevaTarea);
    renderTasks();  
    form.reset();
});

function renderTasks() {
    taskList.innerHTML = '';    

    let tareasFiltradas = tarea.filter(function(t){

    if (filtroActual === "pendientes") {
        return t.completed === false;
    }

    else if (filtroActual === "completadas") {
        return t.completed === true;
    }

    return true; // muestra todas

});


tareasFiltradas.forEach((tarea) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (tarea.completed) {  
        taskItem.classList.add('completed');
        }
        
        
        
        
        taskItem.innerHTML = `
            <span>${tarea.nombre} (${tarea.email}): ${tarea.task}</span>
<button class="complete-btn" data-index="${tarea.id}">
${tarea.completed ? 'Desmarcar' : 'Completar'}
</button>

<button class="delete-btn" data-index="${tarea.id}">
Eliminar
</button>
       
            `;
        taskList.appendChild(taskItem);
    }
    );

    const completeButtons = document.querySelectorAll('.complete-btn');
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-index');

const tareaEncontrada = tarea.find(t => t.id == id);

tareaEncontrada.completed = !tareaEncontrada.completed;
            const taskItem = this.parentElement;
            
            taskItem.classList.toggle('completed');
            renderTasks();

        });
    });
    const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {   
        this.parentElement.remove();
       const id = this.getAttribute('data-index');

         tarea = tarea.filter(t => t.id != id);
         renderTasks();
    });
}); 



    updateStats();
}

function updateStats() {
    let total = tarea.length;
    let completed = tarea.filter(t => t.completed).length;
    let pending = total - completed;    
    totalTasks.textContent = `Total: ${total}`;
    completedTasks.textContent = `Completadas: ${completed}`;
    pendingTasks.textContent = `Pendientes: ${pending}`;
}   




const clearButton = document.getElementById('clear-all');
clearButton.addEventListener('click', function() {
    tarea = [];
    renderTasks();
});

const filterButtons = document.querySelectorAll('.filter-btn');


filterButtons.forEach(button => {

    button.addEventListener('click', function(){

        filtroActual = this.dataset.filter;

        renderTasks();

    });

});






