import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

const MovieInfo = (props) => {
    return (
        <div className="info_wrapper">
            <Link to="/" className="back" onClick={props.closeMovieInfo}><i className="fas fa-arrow-left"></i><span>Back</span></Link>
            <section className="info">
                {
                    props.currentMovie.backdrop_path == null ? <div className="default_backdrop"></div> : <img className="backdrop_img" src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.backdrop_path}`} alt="Movie Poster" />
                }
                <h2 className="info_title">{props.currentMovie.title}</h2>
                <p className="info_date">Released on: {props.currentMovie.release_date}</p>
                {
                    props.currentMovie.vote_average > 0 ?
                        <span className="rating">
                            <StarRatings
                                rating={props.currentMovie.vote_average / 2}
                                starRatedColor="#FFC04D"
                                starEmptyColor="#F4F4F4"
                                starDimension="30px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                            />
                            <div className="votes"><NumberFormat value={props.currentMovie.vote_count} displayType={'text'} thousandSeparator={true} /> Total Votes</div>
                        </span>
                        : <span className="rating">No Ratings</span>
                }
                {
                    props.currentMovie.overview === "" ? <p className="info_overview">No information available.</p> : <p className="info_overview">{props.currentMovie.overview}</p>
                }
            </section>
        </div>
    )
}

export default MovieInfo;