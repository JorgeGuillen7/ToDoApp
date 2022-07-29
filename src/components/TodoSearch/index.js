import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return (
        <div className='col col-sm-8 col-md-6 px-4 mb-4 m-auto justify-content-center '>
            <input
                className='form-control bg-blue'
                placeholder='Search...'
                value={search}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };
