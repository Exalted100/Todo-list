import React, { useState } from "react"
import "./TypeTodo.css"

const TypeTodo = ({ onClick }) => {

    const [newTodo, setNewTodo] = useState("")

    const onTodoSubmit = () => {
        onClick(newTodo)
        setNewTodo("")
    }

    const onTextareaChange = (event) => {
        setNewTodo(event.target.value)
    }

    return (
        <div>
            <textarea
            onChange={onTextareaChange}
            value={newTodo}
            />
            <br />
            <button onClick={onTodoSubmit}>Add todo</button>
        </div>
    )
}

export default TypeTodo