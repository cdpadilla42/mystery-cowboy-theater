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

    // TODO See how Wes fixed this bug...
    const orderLocalStorage = JSON.parse(localStorage.getItem(`${params}`));
    if (orderLocalStorage) {
      this.setState({
        order: orderLocalStorage,
      });
    }

    // Update Movies from firebase
    this.ref = base.syncState(`${params}/movies`, {
      context: this,
      state: 'movies',
    });
  }

  componentDidUpdate() {
    const params = this.props.match.params.theaterId;
    const order = JSON.stringify(this.state.order);
    localStorage.setItem(`${params}`, order);
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

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] ? (order[key] = order[key] + 1) : (order[key] = 1);
    this.setState({
      order,
    });
  };

  addMovie = (movie) => {
    const movieKey = `movie${Date.now()}`;
    const movies = {
      ...this.state.movies,
      [movieKey]: movie,
    };
    this.setState({
      movies,
    });
  };

  updateMovie = (movie, movieKey) => {
    // 1. copy state
    // 2. add change
    const movies = {
      ...this.state.movies,
      [movieKey]: movie,
    };
    // 3. set state
    this.setState({
      movies,
    });
  };

  render() {
    return (
      <div className="theater_app container">
        <UpdateMovies
          movies={this.state.movies}
          addMovie={this.addMovie}
          updateMovie={this.updateMovie}
          loadSampleMovies={this.loadSampleMovies}
        />
        <Order movies={this.state.movies} order={this.state.order} />
        <MovieListing movies={this.state.movies} addToOrder={this.addToOrder} />
      </div>
    );
  }
}

export default App;
