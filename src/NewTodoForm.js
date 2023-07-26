import React, { useState } from "react";

function Todo({text}) {
    return (
        <div>{text}</div>
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
            <label htmlFor="text"></label>
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