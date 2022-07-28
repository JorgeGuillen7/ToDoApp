import React from "react";

function TodoItem(props) {
    return (
        <li className='list-group-item list-group-item-primary list-group-item-action d-flex align-items-center py-3 transparent rounded'>
            <div
                className={`checkbox ${props.completed && "checked"}`}
                type='checkbox'
                onClick={props.completeTodo}
            >
                <i
                    className={`bi bi-check checkbox-icon ${
                        props.completed && "checked-icon"
                    }`}
                ></i>
            </div>
            <p
                className={`m-0 mx-2 flex-grow-1 fs-10 ${
                    props.completed && "text-decoration-line-through"
                }`}
            >
                {props.text}
            </p>
            <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={props.deleteTodo}
            ></button>
        </li>
    );
}

export { TodoItem };
