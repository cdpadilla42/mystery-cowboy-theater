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

  closeModalNav = (e) => {
    const cartModalOpen = false;
    this.setState({
      cartModalOpen,
    });
    console.log(this.state);
  };

  handleClick = (e) => {
    console.log(e.currentTarget, e.target);
    if (e.currentTarget !== e.target) return;
    this.closeModalNav();
  };

  renderModal = () => {
    return (
      <div class="modal__outside" onClick={this.handleClick}>
        <div class="modal__inner">
          <AddMovieForm addMovie={this.addMovie} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="update_movies__container">
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
        {/* TODO: Put this into a modal */}
        {this.state.cartModalOpen ? this.renderModal() : null}
        <button onClick={this.loadSampleMovies} className="btn btn-primary">
          Load Sample Movies
        </button>
      </div>
    );
  }
}

export default UpdateMovies;
