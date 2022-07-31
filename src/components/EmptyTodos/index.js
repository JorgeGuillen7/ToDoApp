import React from "react";

function EmptyTodos(props) {
    const onclickButton = () => {
        props.setOpenModal(true);
    };

    return (
        <div className='msg-container'>
            <span className='msg-img' onClick={onclickButton}>
                <i className='bi bi-plus-circle-fill'></i>
            </span>
            <p className='fs-3 fw-bold'>Your TODO list is empty!</p>
            <p>
                {" "}
                Click the{" "}
                <span onClick={onclickButton}>
                    <i className='bi bi-plus-circle-fill'></i>
                </span>{" "}
                button to add a new TODO
            </p>
        </div>
    );
}

export { EmptyTodos };
