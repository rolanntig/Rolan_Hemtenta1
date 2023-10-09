let todo = document.getElementById('todo');
let form_input = document.getElementById('form_inp');
let form_btn = document.getElementById('form_btn');
let todoList = [];

form_btn.addEventListener("click", (event) => {
    todo.textContent = '';
    todoList.push(form_input.value);
    console.log(todoList);
    event.preventDefault();
    todos();
    });


function todos() {

    todoList.map((item,index) => {
        let div = document.createElement("div");
        div.className = "border";
        div.style.display = "flex";

        let h3 = document.createElement('h3');
        h3.textContent = item;


        let rm = document.createElement('button');   
        rm.textContent = "remove";
        rm.style.marginLeft = "10px";
        rm.className = "btn btn-dark";

        div.appendChild(h3);
        div.appendChild(rm);
        todo.appendChild(div);

        rm.addEventListener('click', () => {
            todoList.splice(index, 1);
            div.style.display = "none";
            console.log(todoList);
        })
    });
}

