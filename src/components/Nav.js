import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  static propTypes = {
    openMobileNav: PropTypes.func,
    mobileNavOpen: PropTypes.bool,
    closeMobileNav: PropTypes.func,
    storeId: PropTypes.string,
    openModalNav: PropTypes.func,
  };

  render() {
    return (
      <>
        <nav>
          <div className="nav__container">
            <a href="/" className="nav__logo">
              Myster Cowboy Theater
            </a>
            <a href="/" className="nav__location">
              {this.props.storeId}
            </a>
            <ul className="nav__menu">
              <li>
                <a href="/">Edit Movies</a>
              </li>
              <li>
                <a href="/">Pick Location</a>
              </li>
              <li>
                <button
                  tabIndex="0"
                  class="nav__link"
                  onClick={this.props.openModalNav}
                >
                  View Order
                </button>
              </li>
            </ul>
            <div className="nav__mobile_content">
              <button
                className="nav__hamburger"
                onClick={this.props.openMobileNav}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        <div
          className={
            this.props.mobileNavOpen ? 'mobile_nav open' : 'mobile_nav'
          }
        >
          <button
            onClick={this.props.closeMobileNav}
            className="mobile_nav__close"
          >
            &times;
          </button>
          <a className="mobile_nav__item" href="/">
            Edit Movies
          </a>
          <a className="mobile_nav__item" href="/">
            Pick Location
          </a>
        </div>
      </>
    );
  }
}

export default Nav;
