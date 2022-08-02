import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, allTodos } = React.useContext(TodoContext);
    // const logoDark = "https://i.postimg.cc/RZg6ZVqj/logo-dark.png";
    const logoLight = "https://i.postimg.cc/QMVB9GTV/logo-light.png";
    return (
        <div>
            <div className='logo'>
                <img src={logoLight} alt='Logo TODO App' />
            </div>
            <h2 className='fw-bold text-center mb-4 fs-3 main-color-text'>
                Has completado {completedTodos} de {allTodos} TODO's
            </h2>
        </div>
    );
}

export { TodoCounter };
