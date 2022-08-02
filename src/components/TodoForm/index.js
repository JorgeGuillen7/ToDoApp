import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <div className='modal modal-container' id='exampleModal'>
            <div className='modal-dialog mt-4'>
                <div className='modal-content modal-form'>
                    <div className='modal-header justify-content-center py-2'>
                        <label
                            htmlFor='modalInput'
                            className='fs-6 m-0 fw-bold'
                        >
                            Add a new TODO
                        </label>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className='modal-body py-1'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control modal-input'
                                    id='modalInput'
                                    placeholder="What's your TODO?"
                                    value={newTodoValue}
                                    onChange={onChange}
                                ></textarea>
                                <label htmlFor='modalInput modal-input-label'>
                                    What's your TODO?
                                </label>
                            </div>
                        </div>
                        <div className='modal-footer py-2'>
                            <button
                                type='button'
                                className='btn btn-secondary btn-cancel'
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='btn btn-primary btn-add'
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { TodoForm };
