import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpdateMovies extends Component {
  static propTypes = {
    loadSampleMovies: PropTypes.func,
  };
  render() {
    return (
      <div className="update_movies">
        <h6>Change the movies, boss person 🎥</h6>
        <button
          onClick={this.props.loadSampleMovies}
          className="btn btn-primary"
        >
          Load Sample Movies
        </button>
      </div>
    );
  }
}

export default UpdateMovies;
