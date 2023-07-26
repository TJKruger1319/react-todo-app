import React, { useState } from "react";

function Todo({todoString}) {
    return (
        <div>{todoString}</div>
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
        </form>
    )
}