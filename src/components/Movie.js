import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const moviePath = `/movie/${props.title}`;
    return (
        <div className="card_wrapper">
            <div className="card">
                <Link to={moviePath} className="card_link" onClick={() => props.viewMovieInfo(props.movieId)}>
                    {
                        // Minified if statement, condition ? true : false
                        // image = movie.poster
                        props.image == null || props.image === "N/A" ? <div className="default_img">No Image Available</div> : <img className="list_img" src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Movie Poster" />
                    }
                    <div className="content">
                        <h4>{props.title}</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Movie;