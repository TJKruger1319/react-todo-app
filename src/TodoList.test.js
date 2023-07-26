import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("Can add a new todo", function() {
    const { getByLabelText, queryByText } = render(<TodoList />);

    expect(queryByText("todo1")).not.toBeInTheDocument();

    const textInput = getByLabelText("Text");
    const submitButton = queryByText("Add new todo");

    fireEvent.change(textInput, { target: { value: "todo1"}});
    fireEvent.click(submitButton);

    expect(queryByText("todo1")).toBeInTheDocument();
})

it("matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });