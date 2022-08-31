import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { eventNumber: 32, errorText: '' };

  handleInputChanged = (event) => {
    if (event.target.value > 32) {
      this.setState({
        eventNumber: event.target.value,
        errorText: 'There are only 32 events! Please try with smaller number.',
      });
    } else {
      this.props.updateEvents(undefined, event.target.value);
      this.setState({
        eventNumber: event.target.value,
        errorText: '',
      });
    }
  };

  render() {
    const { eventNumber } = this.state;

    return (
      <div className="events_number_container">
        <input
          type="number"
          className="number_input"
          value={eventNumber}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
