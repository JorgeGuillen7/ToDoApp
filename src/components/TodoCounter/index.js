import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, allTodos } = React.useContext(TodoContext);
    return (
        <h2 className='fw-bold text-center my-5 fs-3 text-blue'>
            Has completado {completedTodos} de {allTodos} TODO's
        </h2>
    );
}

export { TodoCounter };
