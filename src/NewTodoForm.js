import React, { useState } from "react";

function Todo({ id, text, remove}) {
    const handleRemove = () => remove(id);
    return (
        <div>
            <p>{ text }</p>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

const NewTodoForm = ({ addTodo }) => {
    const initialState = {
        text: ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Text</label>
            <input
                id="text"
                type="text"
                name="text"
                placeholder="text"
                value={FormData.text}
                onChange={handleChange}
            />

            <button>Add new todo</button>
        </form>
    )
}

export { Todo, NewTodoForm };