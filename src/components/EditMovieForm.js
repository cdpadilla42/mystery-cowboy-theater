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

    return (
      <div className="edit_movie_form">
        <figure className="edit_movie_form__image_preview">
          <img src="../public/imgs/cavedwellers.jpg" alt="" />
        </figure>
        <section className="edit_movie_form__form">
          <form action="#">
            <div className="edit_movie_form__first_row_flex_wrap">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="resize-ta"
                value={movie.name}
              ></input>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={movie.price}
              />
            </div>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Image"
              value={movie.image}
            />
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              value={movie.desc}
            ></textarea>
            <button>Delete Movie</button>
          </form>
        </section>
      </div>
    );
  }

  // render() {
  //   const movie = this.props.movie;
  //   return (
  //     <form className="edit_movie" onSubmit={this.handleFormSubmit}>
  //       <input
  //         type="text"
  //         name="name"
  //         onChange={this.handleChange}
  //         value={movie.name}
  //         placeholder="Name"
  //       />
  //       <input
  //         type="text"
  //         name="price"
  //         onChange={this.handleChange}
  //         value={movie.price}
  //         placeholder="Price (cents)"
  //       />
  //       <input
  //         type="text"
  //         name="image"
  //         onChange={this.handleChange}
  //         value={movie.image}
  //         placeholder="image"
  //       />
  //       <textarea
  //         name="description"
  //         id="desc"
  //         onChange={this.handleChange}
  //         placeholder="Description"
  //       >
  //         {movie.desc}
  //       </textarea>
  //       <button
  //         id="dlt_btn"
  //         onClick={() => this.props.deleteMovie(this.props.index)}
  //       >
  //         Delete Movie
  //       </button>
  //     </form>
  //   );
  // }
}

export default EditMovieForm;
