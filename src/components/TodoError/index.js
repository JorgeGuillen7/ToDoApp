import React from "react";

function TodoError({ error }) {
    return (
        <div className='msg-container'>
            <span className='msg-img'>
                <i class='bi bi-emoji-frown-fill'></i>
            </span>
            <p className='fs-3 fw-bold'>We're sorry..</p>
            <p className='m-0 fw-semibold'>
                An error has ocurred, please try again later
            </p>
            <p className='m-0 fst-italic'>Error: {error}</p>
        </div>
    );
}

export { TodoError };
