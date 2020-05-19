import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
  static propTypes = {
    order: PropTypes.object,
    movies: PropTypes.object,
  };

  render() {
    const order = this.props.order;
    const movies = this.props.movies;
    return (
      <div>
        <h2>Here's your tix 🎟</h2>
        {Object.keys(order).map((key) => {
          return <p>{`${order[key]} tickets for ${movies[key].name}`}</p>;
        })}
      </div>
    );
  }
}

export default Order;
