import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './Search';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import Pagination from './Pagination';
import Footer from './Footer';

import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState(null);

  const apiURL = "https://api.themoviedb.org/3/search/movie";
  const numberOfPages = Math.floor(totalResults / 20); // Total number of pages to show 20 items per page

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(apiURL, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchInput
      }
    }).then(data => {
      setMovies(data.data.results);
      setTotalResults(data.data.total_results);
      setCurrentPage(1);
    });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const nextPage = (pageNumber) => {
    axios.get(apiURL, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchInput,
        page: pageNumber
      }
    }).then(data => {
      setMovies(data.data.results);
      setCurrentPage(pageNumber)
    });
  };

  const viewMovieInfo = (id) => {
    const selectedMovie = movies.filter(movie => movie.id === id);
    const newCurrentMovie = selectedMovie.length > 0 ? selectedMovie[0] : null;
    setCurrentMovie(newCurrentMovie);
  };

  const closeMovieInfo = () => {
    setCurrentMovie(null);
  };

  if (currentMovie != null) {
    return (
      <Router>
        <Route path="/movie">
          <div className="App">
            <MovieInfo closeMovieInfo={closeMovieInfo} currentMovie={currentMovie} />
          </div>
        </Route>
      </Router>
    )
  } else {
    return (
      <Router>
        <Route exact path="/">
          <div className="App">
            <section>
              <h1 className="header_title">Movie Database</h1>
              <Search handleSubmit={handleSubmit} handleChange={handleChange} />
              <MovieList viewMovieInfo={viewMovieInfo} movies={movies} />
            </section>
            {totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={nextPage} currentPage={currentPage} /> : ""}
            <Footer />
          </div>
        </Route>
      </Router>
    )
  }
}

export default App;
