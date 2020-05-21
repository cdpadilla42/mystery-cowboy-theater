import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

class MovieListing extends Component {
  static propTypes = {
    movies: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      showtimes: PropTypes.object,
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const movies = this.props.movies;
    return (
      <div className="movie_listing">
        <h2 className="theater__name">Mystery Cowboy Theater!</h2>
        {Object.keys(movies).map((movieKey) => {
          return (
            <Movie
              movie={movies[movieKey]}
              key={movieKey}
              index={movieKey}
              addToOrder={this.props.addToOrder}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieListing;
