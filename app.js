const form = document.querySelector("#form");
const tasks = document.querySelector("#tasks");
const taskListElement = document.querySelector("#task-list");

let addTask = [];

//eventListener
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addToDo);

}


//funciones

function addToDo(e) {
  e.preventDefault();

  //textArea
  const textArea = document.querySelector("#task-input").value;
  //validacion
  if (textArea == "") {
    mostrarError("No puede ingresar una tarea vacía")

    return; //evita que se ejecuten mas lineas de código
  }

  const taskObj = {
    id: Date.now(),
    task: textArea,
    done: false
  }

  console.log(taskObj.task);

  console.log(taskObj["done"]);

  //añadir el arreglo de tareas

  addTask = addTask.concat([taskObj]);

  crearHTML();

}

//mostrar mensaje de error

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //elimina la alerta despues de 3 segundos
  setTimeout(() => {
    mensajeError.remove()
  }, 3000);
}

//muestra un listado de los tweets

function crearHTML() {
  taskListElement.innerHTML = "";
  addTask.forEach(taskObj => {
    //crear el html
    
    
    const div = document.createElement("div");
    div.classList.add("inputtext")
    //añadir el texto
    div.innerHTML = `
      <div class="col"><input type="checkbox"/></div> <div class="col">${taskObj.task}</div>
      <div><button class="col" id="borrar-tarea">X</button></div>
    `
    
    //insertarlo en el html
    taskListElement.appendChild(div);
  })
};

