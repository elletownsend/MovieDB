import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <section className='movie_list_wrapper'>
      {props.movies.map((movie, i) => {
        // basically replaces a for loop for rendering each item in the movies array
        return (
          <Movie
            key={i}
            viewMovieInfo={props.viewMovieInfo}
            image={movie.poster_path}
            title={movie.title}
            movieId={movie.id}
          />
          // When rendering a list, need to provide key props
        );
      })}
    </section>
  );
};

export default MovieList;
