import React, { Component } from 'react';
import propTypes from 'prop-types';

class CartItem extends Component {
  static propTypes = {
    movies: propTypes.object,
    subtractTicketFromOrder: propTypes.func,
    order: propTypes.func,
  };

  render() {
    if (!this.props.movies[this.props.index]) return null;

    const movies = this.props.movies;
    const key = this.props.index;
    console.log();

    const imageStlye = {
      backgroundImage: `url(${movies[key].image})`,
    };

    return (
      <div class="cart__item">
        <div
          class="cart__remove_item"
          onClick={() => this.props.deleteFromOrder(this.props.index)}
        >
          &times;
        </div>
        <div class="cart__item_image" style={imageStlye}></div>
        <div class="cart__item_details">
          <p>Pod People</p>
          <div class="quantity_editor">
            <button
              class="quantity_editor__minus"
              onClick={() =>
                this.props.subtractTicketFromOrder(this.props.index)
              }
            >
              -
            </button>
            <div class="quantity_editor__quantity">
              {this.props.order[this.props.index]}
            </div>
            <button
              class="quantity_editor__plus"
              onClick={() => this.props.addToOrder(this.props.index)}
            >
              +
            </button>
          </div>
          <p class="cart__item_price">$12.49</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
