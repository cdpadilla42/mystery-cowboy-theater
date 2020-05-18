import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return <div className="movie">{this.props.movie.name}</div>;
  }
}

export default Movie;
