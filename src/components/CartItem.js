import React, { Component } from 'react';
import propTypes from 'prop-types';

class CartItem extends Component {
  static propTypes = {
    movies: propTypes.object,
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
        <div class="cart__remove_item">&times;</div>
        <div class="cart__item_image" style={imageStlye}></div>
        <div class="cart__item_details">
          <p>Pod People</p>
          <div class="quantity_editor">
            <button class="quantity_editor__minus">-</button>
            <div class="quantity_editor__quantity">1</div>
            <button class="quantity_editor__plus">+</button>
          </div>
          <p class="cart__item_price">$12.49</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
