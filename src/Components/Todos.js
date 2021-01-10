import React from "react"
import "./Todos.css"

const Todos = ({ todo, setTodo }) => {

    const toggle = (x) => {
        let newArr = [...todo]
        newArr[x].isCompleted = !newArr[x].isCompleted
        setTodo(newArr)
        console.log(newArr)
    }

    const items = todo.map((i, x) => 
        <div className="todo" key={i.id}>
            <input type="checkbox" onClick={() => toggle(x)} className={todo[x].isCompleted? "strikethrough checkbox-button": "checkbox-button"} />
            <p className="label" className="strikethrough">{i.todoItem}</p>
            <button className="delete-button" onClick={() => setTodo(todo.filter(t => t.todoItem !== todo[x].todoItem))}>Delete</button>
        </div>)

    return (
        <div className={"items"}>
            {items}
        </div>
    )
}

export default Todos