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

  // TODO: Make it pretty! Let's get this done this week

  componentDidMount() {
    const params = this.props.match.params.theaterId;
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

  deleteFromOrder = (key) => {
    const order = {
      ...this.props.order,
    };
    delete order[key];
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
    const movies = {
      ...this.state.movies,
      [movieKey]: movie,
    };
    this.setState({
      movies,
    });
  };

  deleteMovie = (movieKey) => {
    const movies = {
      ...this.state.movies,
      [movieKey]: null,
    };
    this.setState({
      movies,
    });
  };

  render() {
    return (
      <div className="theater_app">
        <div className="left_pane">
          <MovieListing
            movies={this.state.movies}
            addToOrder={this.addToOrder}
          />
        </div>
        <div className="mid_pane">
          <Order
            movies={this.state.movies}
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
          />
        </div>
        <div className="right_pane">
          <UpdateMovies
            movies={this.state.movies}
            addMovie={this.addMovie}
            updateMovie={this.updateMovie}
            loadSampleMovies={this.loadSampleMovies}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

export default App;
