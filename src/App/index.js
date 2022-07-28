import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

// const defaultTodos = [
//     { text: "Learn React", completed: false },
//     { text: "Learn TypeScript", completed: false },
//     { text: "Learn Angular", completed: false },
//     { text: "Learn Vue", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return [item, saveItem];
}

function App() {
    const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
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
