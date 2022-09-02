import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="events_number_container">
        <label className="label">Number of events:</label>
        <input
          type="number"
          className="number_input"
          value={this.props.numberOfEvents}
          onChange={this.props.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
