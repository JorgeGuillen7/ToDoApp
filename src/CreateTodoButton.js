import React from "react";

function CreateTodoButton(props) {
    return (
        <div className='fixed-bottom p-4 pb-3 d-flex justify-content-end'>
            <button
                className='btn p-0 text-blue add-todo'
                onClick={() => console.log("clic")}
            >
                <i className='bi bi-plus-circle-fill'></i>
            </button>
        </div>
    );
}

export { CreateTodoButton };
