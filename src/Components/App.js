import React, {useState} from "react"
import TypeTodo from "./TypeTodo"
import Todos from "./Todos"
import "./App.css"

const App = () => {

    const [todo, setTodo] = useState([])

    const onButtonClick = (newTodo) => {
        if (newTodo !== "") {
        setTodo([{todoItem: newTodo, isCompleted: false, id: Math.random()}, ...todo])
    }
    }

    return (
        <div className="todo-project">
            <TypeTodo onClick={onButtonClick} todo={todo} />
            <Todos todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default App