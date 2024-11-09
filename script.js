const todoListObject = JSON.parse(localStorage.getItem("todoListObject")) || [{name:"make coffe",
                                                                            dueDate:"22-12-12"},
                                                                            {name: "make dinner",
                                                                            dueDate : "23-1-2"	}]

    randerTodo()

function randerTodo(){
    let todoListHtml =""

    todoListObject.forEach((todo,index)=>{
        const {name,dueDate}= todo
        const html = `<div>${name}</div><div>${dueDate}</div>
        <button class="js-delete-btn">Delete</button>`
        todoListHtml += html

    }

    )

    document.querySelector(".js-todo-grid")
    .innerHTML = todoListHtml

        document.querySelectorAll('.js-delete-btn')
        .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
        todoListObject.splice(index,1)
saveToStorage()
randerTodo()
})
})

}

document.querySelector('.js-add-todo-btn')
.addEventListener('click',()=>{
addTodo()
})

function addTodo(){
    const inputElement = document.querySelector(".js-input-name")
    const dateElement = document.querySelector(".js-due-date-input")
    const name = inputElement.value
    const dueDate = dateElement.value
    
    if (!name || !dueDate){
      const pop = alert('put valid content')
      
      return pop
    }
    todoListObject.push({
    name,
    dueDate 
})

    saveToStorage()
    randerTodo()

inputElement.value = ""
}

function saveToStorage(){
    localStorage.setItem("todoListObject", JSON.stringify(todoListObject))
}