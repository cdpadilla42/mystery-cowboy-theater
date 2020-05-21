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
      <>
        <h1>Add movie</h1>
        <form className="add_movie" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="name"
          />

          <input
            type="text"
            name="price"
            ref={this.priceRef}
            placeholder="price"
          />
          <input
            type="text"
            name="image"
            ref={this.imageRef}
            placeholder="image"
          />
          <input
            type="text"
            name="description"
            ref={this.descriptionRef}
            placeholder="description"
            id="desc"
          />
          <button id="dlt_btn" type="submit">
            Add Movie
          </button>
        </form>
      </>
    );
  }
}

export default AddMovieForm;
