import React, { Component } from 'react';
import Search from './Search';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: ""
    }
    this.apiURL = "http://www.omdbapi.com/?i=" + process.env.REACT_APP_API_I + "&apikey=" + process.env.REACT_APP_API_KEY;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(this.apiURL + "&s=" + this.state.searchInput)
      .then(res => {
        let movies = res.data.Search;
        console.log(movies);
        this.setState({ movies: movies });
      })
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  render() {
    return (
      <div className="App" >
        <h1 className="header_title">Movie Database 🎥🍿</h1>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
