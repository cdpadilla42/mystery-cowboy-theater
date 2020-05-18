import React from 'react';
import '../css/App.css';
import MovieListing from './MovieListing';
import Order from './Order';
import UpdateMovies from './UpdateMovies';
import sampleMovies from '../sample-movies';

class App extends React.Component {
  state = {
    movies: {},
    order: {},
  };

  loadSampleMovies = () => {
    this.setState({
      movies: sampleMovies,
    });
  };
  render() {
    return (
      <div className="theater_app container">
        <MovieListing movies={this.state.movies} />
        <Order />
        <UpdateMovies loadSampleMovies={this.loadSampleMovies} />
      </div>
    );
  }
}

export default App;
