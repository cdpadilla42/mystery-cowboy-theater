import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditMovieForm extends Component {
  static propTypes = {
    updateMovie: PropTypes.func,
    movie: PropTypes.object,
  };

  renderForm = () => {
    return (
      <form className="edit-movie" onSubmit={this.props.updateMovie}>
        <h1>Edit Movie</h1>
        <div className="form-group">
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            ref={this.descriptionRef}
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="price"
            ref={this.priceRef}
            placeholder="price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="theater"
            ref={this.theaterRef}
            placeholder="theater"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            ref={this.imageRef}
            placeholder="image"
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    );
  };

  render() {
    const movie = this.props.movie;
    // TODO: Flesh out the edit movies form
    return <div className="movie">🍿</div>;
  }
}

export default EditMovieForm;
