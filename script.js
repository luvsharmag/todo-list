const form = document.querySelector('form');
const input = document.querySelector('.input');
const todosUl = document.querySelector('.todos');

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach((todo)=>addTodo(todo));
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
});

function addTodo(todo){
    let todotext = input.value;

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const todols = document.createElement('li');
        if(todo && todo.completed){
            todols.classList.add('completed');
        }

        todols.textContent = todotext;

        todols.addEventListener('click',()=>
        {todols.classList.toggle('completed')
        UpdateLs();});

        todols.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todols.remove();
            UpdateLs();
        });
        todosUl.appendChild(todols);
        input.value = '';
        UpdateLs();
    }
}
function UpdateLs(){
    const todosEL = document.querySelectorAll('li');
    const todos = [];

    todosEL.forEach((todosEL)=>{
        todos.push({
            text: todosEL.innerText,
            completed: todosEL.classList.contains('completed')
        });
    });
    localStorage.setItem('todos',JSON.stringify(todos));    

}

