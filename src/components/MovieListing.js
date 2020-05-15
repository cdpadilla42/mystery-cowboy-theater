import React, { Component } from 'react';
import Movie from './Movie';

class MovieListing extends Component {
  render() {
    return (
      <div className="movie_listing">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default MovieListing;
