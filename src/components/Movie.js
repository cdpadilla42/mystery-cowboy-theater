import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { priceConverter } from '../helper';

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.object,
    addToOrder: PropTypes.func,
    index: PropTypes.string,
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
          <p className="price">{priceConverter(movie.price)}</p>
          <p>
            <button
              className="btn btn-primary"
              onClick={() => this.props.addToOrder(this.props.index)}
            >
              Add To Order
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
