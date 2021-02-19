const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
const input = document.getElementById("input");

function agregarTarea(toDo) {
    const text = `<li class="item">
                <input type="checkbox" id="checkbox" job="complete">
                <p id="texto-lista">${toDo}</p>
                <button id="X-button" job"complete">X</button><br>
                </li>`

    const position = "beforeend";

    lista.insertAdjacentHTML(position, text);
}

agregarTarea()

input.addEventListener("submit", (e) => {
    
})

