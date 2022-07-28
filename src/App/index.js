import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";
// import './App.css';

// const defaultTodos = [
//     { text: "Learn React", completed: false },
//     { text: "Learn TypeScript", completed: false },
//     { text: "Learn Angular", completed: false },
//     { text: "Learn Vue", completed: false },
// ];

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
