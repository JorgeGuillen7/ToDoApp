import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
    loading,
    error,
    search,
    setSearch,
    completedTodos,
    allTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
            <TodoSearch search={search} setSearch={setSearch} />
            <TodoList>
                {error && <p className='text-blue'>Error: {error}</p>}
                {loading && <p className='text-blue'>Loading...</p>}
                {!loading && !searchedTodos.length && (
                    <p className='text-blue'>¡Crea tu primer TODO!</p>
                )}

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

export { AppUI };
