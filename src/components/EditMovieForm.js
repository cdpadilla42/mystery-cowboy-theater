import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditMovieForm extends Component {
  static propTypes = {
    updateMovie: PropTypes.func,
    movie: PropTypes.object,
    index: PropTypes.string,
  };

  handleChange = (e) => {
    // 1. take in value and store into movies
    const input = e.target;
    const movie = {
      ...this.props.movie,
      [input.name]: input.value,
    };
    // 2. send value to state for change w/ passed down prop.
    this.props.updateMovie(movie, this.props.index);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const movie = this.props.movie;
    // TODO: Flesh out the edit movies form
    return (
      <form className="edit-movie" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={movie.name}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={movie.description}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            value={movie.price}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="theater"
            onChange={this.handleChange}
            value={movie.theater}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            onChange={this.handleChange}
            value={movie.image}
          />
        </div>
        <button onClick={() => this.props.deleteMovie(this.props.index)}>
          Delete Movie
        </button>
      </form>
    );
  }
}

export default EditMovieForm;
