import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieDisplay extends Component {
  static propTypes = {
    movies: propTypes.object,
    selectedMovie: propTypes.string,
    addToOrder: propTypes.func,
  };

  render() {
    if (!this.props.selectedMovie)
      return (
        <img
          src="/imgs/mst3klogo.png"
          alt="MST3K logo"
          class="selected_movie__placeholder"
        />
      );

    return (
      <section class="selected_movie">
        <div class="selected_movie__image">
          <img src={this.props.movies[this.props.selectedMovie].image} alt="" />
        </div>
        <div class="selected_movie__details">
          <div class="selected_movie__details_wrap">
            <h3>Pod People</h3>
            <div class="clear"></div>
            <h4>About</h4>
            <p>A movie about FREAKS!</p>
            <h4>Ticket Price</h4>
            <p>Ticket Price:</p>
            <h4>Showing</h4>
            <p>Date</p>
            <button
              onClick={() => this.props.addToOrder(this.props.selectedMovie)}
              class="selected_movie__add_ticket"
            >
              Purchase Ticket
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDisplay;
