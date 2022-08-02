import React from "react";

function CreateTodoButton(props) {
    const onclickButton = () => {
        props.setOpenModal((prevState) => !prevState);
    };

    return (
        <div className='fixed-bottom p-4 pb-3 d-flex justify-content-end'>
            <button
                className={`btn p-0 add-todo main-color-text ${
                    props.openModal && "add-todo-transition"
                }`}
                onClick={onclickButton}
            >
                <i className='bi bi-plus-circle-fill'></i>
            </button>
        </div>
    );
}

export { CreateTodoButton };
