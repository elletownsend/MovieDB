import React, { Component } from 'react';
import Search from './Search';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import Pagination from './Pagination';
import Footer from './Footer';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiURL = "https://api.themoviedb.org/3/search/movie?api_key=" + process.env.REACT_APP_API_KEY + "&query=";
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(this.apiURL + this.state.searchInput)
      .then(data => {
        this.setState({ movies: data.data.results, totalResults: data.data.total_results });
        this.setState({ currentPage: 1 });
      })
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  nextPage = (pageNumber) => {
    axios.get(this.apiURL + this.state.searchInput + "&page=" + pageNumber)
      .then(data => {
        this.setState({ movies: data.data.results, currentPage: pageNumber });
      })
  }

  viewMovieInfo = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id);
    const newCurrentMovie = selectedMovie.length > 0 ? selectedMovie[0] : null;
    this.setState({ currentMovie: newCurrentMovie });
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20); // Total number of pages to show 20 items per page
    return (
      <div className="App" >
        { this.state.currentMovie == null ?
          <section>
            <h1 className="header_title">Movie Database</h1>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
          </section> :
          <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />
        }
        { this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ""}
        <Footer />
      </div>
    );
  }
}

export default App;
