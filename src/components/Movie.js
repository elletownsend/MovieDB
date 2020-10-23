import React from 'react';

// Functional Component

const Movie = (props) => {
    return (
        <div className="card_wrapper">
            <div className="card">
                <a href="#" className="card_link">
                    {
                        // Minified if statement, condition ? true : false
                        // image = movie.poster
                        props.image == null || props.image === "N/A" ? <div className="default_img">No Image Available</div> : <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Movie Poster" />
                    }
                    <div className="content">
                        <h4>{props.title}</h4>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Movie;