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
    }),
  };

  render() {
    const movies = this.props.movies;
    return (
      <div className="movie_listing">
        {Object.keys(movies).map((key) => {
          console.log(movies[key].name);
          return <Movie movie={movies[key]} key={key} index={key} />;
        })}
      </div>
    );
  }
}

export default MovieListing;
