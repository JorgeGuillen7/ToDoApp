import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const [search, setSearch] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

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
        <TodoContext.Provider
            value={{
                error,
                loading,
                search,
                setSearch,
                completedTodos,
                allTodos,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
