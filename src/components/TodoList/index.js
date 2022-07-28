import React from "react";

function TodoList(props) {
    return (
        <section className='container my-5 '>
            <ul className='list-group list-group-flush col-md-10 m-auto'>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };
