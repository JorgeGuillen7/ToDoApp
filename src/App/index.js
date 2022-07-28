import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

const defaultTodos = [
    { text: "Learn React", completed: false },
    { text: "Learn TypeScript", completed: false },
    { text: "Learn Angular", completed: false },
    { text: "Learn Vue", completed: false },
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [search, setSearch] = React.useState("");

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const allTodos = todos.length;

    let searchedTodos = [];
    if (search.length > 0) {
        searchedTodos = todos.filter((todo) => {
            const text = todo.text.toLowerCase();
            const searchText = search.toLowerCase();
            return text.includes(searchText);
        });
    } else {
        searchedTodos = todos;
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    return (
        <AppUI
            search={search}
            setSearch={setSearch}
            completedTodos={completedTodos}
            allTodos={allTodos}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
