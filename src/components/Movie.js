import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.object,
  };

  render() {
    const movie = this.props.movie;
    return (
      <div className="movie card">
        {/* TODO: Layout movie card */}
        <img
          className="card-img-top"
          src={movie.image}
          alt={movie.name}
          style={{ height: '200px' }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.desc}</p>
          <p className="price">{movie.price}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
