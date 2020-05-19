import React, { Component } from 'react';

class EditMovieForm extends Component {
  render() {
    // TODO Edit this form
    return (
      <form className="edit-movie">
        <input type="text" name="name" ref={this.nameRef} placeholder="name" />
        <input
          type="text"
          name="description"
          ref={this.descriptionRef}
          placeholder="description"
        />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="price"
        />
        <input
          type="text"
          name="theater"
          ref={this.theaterRef}
          placeholder="theater"
        />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="image"
        />
        <button type="submit">Add Movie</button>
      </form>
    );
  }
}

export default EditMovieForm;
