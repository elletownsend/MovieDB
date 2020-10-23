import React from 'react';

// Functional Component

const Search = (props) => {
    return (
        <section className="search_wrapper">
            <form action="" onSubmit={props.handleSubmit}>
                <input placeholder="Search..." type="text" onChange={props.handleChange} />
                <button className="search_btn" type="submit" onClick={props.handleSubmit}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </section>
    )
}

export default Search;