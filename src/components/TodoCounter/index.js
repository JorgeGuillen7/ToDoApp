import React from "react";

function TodoCounter({ completedTodos, allTodos }) {
    return (
        <h2 className='fw-bold text-center my-5 fs-3 text-blue'>
            Has completado {completedTodos} de {allTodos} ToDo's
        </h2>
    );
}

export { TodoCounter };
