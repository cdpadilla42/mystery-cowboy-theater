import React, { Component } from 'react';
import { getStreetName } from '../helper';

class TheaterPicker extends Component {
  theaterNameRef = React.createRef();

  handleFormSubmit = (e) => {
    e.preventDefault();
    // store theater name
    const theaterName = this.theaterNameRef.current.value;
    this.props.history.push(`/theater/${theaterName}`);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="theater-picker">
        <h1>Chose your theater</h1>
        <input
          type="text"
          name="theater-name"
          ref={this.theaterNameRef}
          value={getStreetName()}
        />
        <button type="submit">Visit Theater Page</button>
      </form>
    );
  }
}

export default TheaterPicker;
