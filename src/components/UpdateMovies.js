import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditMovieForm from './EditMovieForm';
import AddMovieForm from './AddMovieForm';

class UpdateMovies extends Component {
  static propTypes = {
    loadSampleMovies: PropTypes.func,
    updateMovie: PropTypes.func,
    addMovie: PropTypes.func,
    movies: PropTypes.object,
  };
  render() {
    return (
      <div className="update_movies">
        <h6>Change the movies, boss person 🎥</h6>
        {Object.keys(this.props.movies).map((movieKey) => {
          return (
            <EditMovieForm
              movie={this.props.movies[movieKey]}
              updateMovie={this.props.updateMovie}
            />
          );
        })}
        <AddMovieForm addMovie={this.props.addMovie} />
        <button
          onClick={this.props.loadSampleMovies}
          className="btn btn-primary"
        >
          Load Sample Movies
        </button>
      </div>
    );
  }
}

export default UpdateMovies;
