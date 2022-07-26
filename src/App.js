import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
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
        <React.Fragment>
            <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
            <TodoSearch search={search} setSearch={setSearch} />
            <TodoList>
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        completeTodo={() => completeTodo(todo.text)}
                        deleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
