import React from 'react';

// Functional Component

const Search = (props) => {
    return (
        <section>
            <form action="" onSubmit={props.handleSubmit}>
                <input placeholder="Search..." type="text" onChange={props.handleChange} />
            </form>
        </section>
    )
}

export default Search;