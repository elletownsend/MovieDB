import React from 'react';

// Functional Component

const Movie = (props) => {
    return (
        <div className="card">
            {
                // Minified if statement, condition ? true : false
                // image = movie.poster
                props.image == null || props.image === "N/A" ? <div className="default_img">No Image Available</div> : <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Movie Poster" />
            }
            <div className="content">
                <h4><a href="#">{props.title}</a></h4>
            </div>
        </div>
    )
}

export default Movie;