import React from "react";

function TodoItem(props) {
    const completedTodo = (event) => {
        if (event.target.checked) {
            event.target.parentElement.childNodes[1].classList.add(
                "text-decoration-line-through"
            );
        } else {
            event.target.parentElement.childNodes[1].classList.remove(
                "text-decoration-line-through"
            );
        }
    };

    return (
        <li className='list-group-item list-group-item-primary list-group-item-action d-flex align-items-center py-3 transparent rounded'>
            <input
                className='form-check-input m-0 transparent'
                type='checkbox'
                onChange={completedTodo}
                onClick={props.completeTodo}
            />
            <p className='m-0 mx-2 flex-grow-1 fs-10'>{props.text}</p>
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
