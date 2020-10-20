import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: ""
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="header_title">Movie Database</h1>
        <Search />
      </div>
    );
  }
}

export default App;
