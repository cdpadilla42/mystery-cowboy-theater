import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { priceConverter } from '../helper';

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
          id="order_delete"
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
        <h2>Your tix: 🎟</h2>
        {Object.keys(order).map((key) => {
          return this.renderOrderItem(key);
        })}
        <div className="total">
          <strong>
            <div>
              Total:
              <span id="total_number">{priceConverter(total)}</span>
            </div>
          </strong>
        </div>
      </div>
    );
  }
}

export default Order;
