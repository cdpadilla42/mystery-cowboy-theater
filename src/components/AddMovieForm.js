import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieForm extends Component {
  static propTypes = {
    addMovie: PropTypes.func,
  };

  nameRef = React.createRef();
  descriptionRef = React.createRef();
  priceRef = React.createRef();
  theaterRef = React.createRef();
  imageRef = React.createRef();

  handleFormSubmit = (e) => {
    e.preventDefault();
    const movie = {
      name: this.nameRef.current.value,
      description: this.descriptionRef.current.value,
      price: parseInt(this.priceRef.current.value),
      theater: this.theaterRef.current.value,
      image: this.imageRef.current.value,
    };
    console.log(movie);
    this.props.addMovie(movie);
  };

  render() {
    return (
      <form className="add-movie" onSubmit={this.handleFormSubmit}>
        <h1>Add movie</h1>
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
  }
}

export default AddMovieForm;
