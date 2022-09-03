import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="events_number_container">
        <h2 className="meet_logo">Meet App</h2>
        <p className="label">Number of events</p>
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
