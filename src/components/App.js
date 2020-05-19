import React from 'react';
import '../css/App.css';
import MovieListing from './MovieListing';
import Order from './Order';
import UpdateMovies from './UpdateMovies';
import sampleMovies from '../sample-movies';
import base from '../base';

class App extends React.Component {
  state = {
    movies: {},
    order: {},
  };

  componentDidMount() {
    const params = this.props.match.params.theaterId;
    this.ref = base.syncState(`${params}/movies`, {
      context: this,
      state: 'movies',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleMovies = () => {
    const movies = { ...this.state.movies, ...sampleMovies };
    this.setState({
      movies,
    });
  };

  addToOrder = () => {};

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
