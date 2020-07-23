import React, { Component } from 'react';
import '../css/theater.css';
import sampleMovies from '../sample-movies';
import EditMovieForm from './EditMovieForm';
import AddMovieForm from './AddMovieForm';
import base from '../base';

class UpdateMovies extends Component {
  state = {
    movies: {},
    order: {},
    mobileNavOpen: false,
    cartModalOpen: false,
    selectedMovie: null,
  };

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

    // Add key functionality
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentDidUpdate() {
    const params = this.props.match.params.theaterId;
    const order = JSON.stringify(this.state.order);
    localStorage.setItem(`${params}`, order);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  loadSampleMovies = () => {
    const movies = { ...this.state.movies, ...sampleMovies };
    this.setState({
      movies,
    });
  };

  render() {
    return (
      <div className="update_movies">
        <h2 className="section_heading">Update movies</h2>
        {Object.keys(this.state.movies).map((movieKey) => {
          return (
            <EditMovieForm
              movie={this.state.movies[movieKey]}
              updateMovie={this.updateMovie}
              key={movieKey}
              index={movieKey}
              deleteMovie={this.deleteMovie}
            />
          );
        })}
        <AddMovieForm addMovie={this.addMovie} />
        <button onClick={this.loadSampleMovies} className="btn btn-primary">
          Load Sample Movies
        </button>
      </div>
    );
  }
}

export default UpdateMovies;
