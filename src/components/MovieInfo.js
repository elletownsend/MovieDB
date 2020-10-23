import React from 'react';

const MovieInfo = (props) => {
    return (
        <div className="info_wrapper">
            <section className="back" onClick={props.closeMovieInfo}>
                <i className="fas fa-arrow-left"></i>
                <span>Back</span>
            </section>
            <section className="info">
                {
                    props.currentMovie.backdrop_path == null ? <div className="default_backdrop"></div> : <img className="backdrop_img" src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.backdrop_path}`} alt="Movie Poster" />
                }
                <h4 className="info_title">{props.currentMovie.title}</h4>
                <p className="info_date">{props.currentMovie.release_date}</p>
                {
                    props.currentMovie.overview === "" ? <p className="info_overview">No information available.</p> : <p className="info_overview">{props.currentMovie.overview}</p>
                }
            </section>
        </div>
    )
}

export default MovieInfo;