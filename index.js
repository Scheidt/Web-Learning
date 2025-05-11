let todoList = document.getElementById('todoList');
let todoButton = document.getElementById('todoButton')

if (todoList && todoButton){
    console.log("1")
    function addTodo (todoList){
        todoList.innerHTML += `<div> 
                            <input type="checkbox"></input>
                            <input>
                            </div>
        `
    };

    todoButton.onclick = () => {
        console.log("Click!");
        addTodo(todoList);
    }
}