import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
  static propTypes = {
    order: PropTypes.object,
    movies: PropTypes.object,
    deleteFromOrder: PropTypes.func,
  };

  render() {
    const order = this.props.order;
    const movies = this.props.movies;
    return (
      <div>
        <h2>Here's your tix 🎟</h2>
        {Object.keys(order).map((key) => {
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
        })}
      </div>
    );
  }
}

export default Order;
