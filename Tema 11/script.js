function addTaskListener() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); 
         const taskValue = document.getElementById("task-input").value; 
         if (taskValue.trim() !== "") { 
            const taskList = document.getElementById("list");
            const newTask = document.createElement("li");
            const botoncompletar = document.createElement("button");
            botoncompletar.textContent = "Completar";
            botoncompletar.addEventListener("click", function() {
    newTask.classList.toggle("completada");
     updateStats();  
            applyFilter();
});       
           
             const botoneliminar = document.createElement("button");
             botoneliminar.textContent = "Eliminar";
             botoneliminar.addEventListener("click", function() {
    newTask.remove();
     updateStats();   
    applyFilter();   
});
            const span = document.createElement("span");
              span.textContent = taskValue;
              newTask.appendChild(span);
               newTask.appendChild(botoncompletar);
                newTask.appendChild(botoneliminar); 
            taskList.appendChild(newTask); 
            document.getElementById("task-input").value = ""; 
            

        } else {
                document.getElementById("error-message").textContent = "Por favor, ingresa una tarea válida.";
            }
        }    

    );

}

addTaskListener();

function updateStats() {
  const items = document.querySelectorAll('#list li');
  const total = items.length;
  const done  = document.querySelectorAll('#list li.completada').length;
  document.getElementById('stat-total').textContent   = total;
  document.getElementById('stat-done').textContent    = done;
  document.getElementById('stat-pending').textContent = total - done;
}


function applyFilter() {
  const items = document.querySelectorAll('#list li');
  const currentFilter = document.querySelector('.filter-btn.active').dataset.filter;

  items.forEach(item => {
    const isDone = item.classList.contains('completada');
    if      (currentFilter === 'todas')       item.style.display = '';
    else if (currentFilter === 'completadas') item.style.display = isDone  ? '' : 'none';
    else                                      item.style.display = !isDone ? '' : 'none';
  });
}


document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter();
  });
});

document.getElementById('clear-all').addEventListener('click', function () {
  document.getElementById('list').innerHTML = '';
  updateStats();
  applyFilter();
});