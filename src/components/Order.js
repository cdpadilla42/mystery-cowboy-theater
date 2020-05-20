import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
  static propTypes = {
    order: PropTypes.object,
    movies: PropTypes.object,
    deleteFromOrder: PropTypes.func,
  };

  renderOrderItem = (key) => {
    const order = this.props.order;
    const movies = this.props.movies;
    const movie = movies[key];
    if (!movie) return null;
    return (
      <p key={key}>
        {`${order[key]} tickets for ${movie.name}`}
        <button
          onClick={() => this.props.deleteFromOrder(key)}
          className="delete-order-item"
        >
          &times;
        </button>
      </p>
    );
  };

  render() {
    const movies = this.props.movies;
    const order = this.props.order;
    const keys = Object.keys(order);
    const total = keys.reduce((prevTotal, key) => {
      if (!movies[key]) return null;
      // multiply number of tickets by price
      const moviePrice = movies[key].price;
      const movieTotal = order[key] * moviePrice;
      // add to prev total
      return prevTotal + movieTotal;
    }, 0);
    return (
      <div>
        <h2>Here's your tix 🎟</h2>
        {Object.keys(order).map((key) => {
          return this.renderOrderItem(key);
        })}
        <div className="total">
          <p>
            Total:
            <span>{total}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Order;
