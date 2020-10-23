import React, { Component } from 'react';
import Search from './Search';
import MovieList from './MovieList';
import Pagination from './Pagination';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: "",
      totalResults: 0,
      currentPage: 1
    }
    this.apiURL = "https://api.themoviedb.org/3/search/movie?api_key=" + process.env.REACT_APP_API_KEY + "&query=";
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(this.apiURL + this.state.searchInput)
      .then(data => {
        this.setState({ movies: data.data.results, totalResults: data.data.total_results });
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

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20); // Total number of pages to show 20 items per page
    return (
      <div className="App" >
        <h1 className="header_title">Movie Database</h1>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
        { this.state.totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ""}
      </div>
    );
  }
}

export default App;
