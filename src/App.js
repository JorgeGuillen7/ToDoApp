import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
    { text: "Learn React", completed: true },
    { text: "Learn TypeScript", completed: false },
    { text: "Learn Angular", completed: false },
    { text: "Learn Vue", completed: false },
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
