import React, { useState } from "react";
import { Todo, NewTodoForm} from "./NewTodoForm";
import { v4 as uuid } from "uuid";

function TodoList() {
    const [todos, setTodo] = useState([]);

    const removeTodo = id => {
        setTodo(todos.filter(todo => todo.id !== id));
    };

    const addTodo = todo => {
        let newTodo = {...todo, id: uuid() };
        setTodo(todos => [...todos, newTodo]);
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(({ id, text }) =>
                <li key={id}>
                    <Todo 
                    key={id} 
                    id={id} 
                    text={text}   
                    remove={removeTodo}
                    />
                </li>
                )}
            </ul>
        </div>
    )
}

export default TodoList;