import React, { Component } from 'react';

class Event extends Component {
  eventDetailsToggler = () => {
    this.setState({ show: !this.state.show });
  };

  state = { show: false };

  render() {
    const { event } = this.props;
    return (
      <div className="event-card">
        <h5 className="event-title">{event.summary}</h5>
        <p className="event-info">
          {event.location} {event.start.dateTime} {event.start.timeZone}
        </p>
        {this.state.show && (
          <p className="event-description">{event.description}</p>
        )}
        {!this.state.show ? (
          <button
            className="show_details-button"
            onClick={this.eventDetailsToggler}
          >
            Show Details
          </button>
        ) : (
          <button
            className="hide_details-button"
            onClick={this.eventDetailsToggler}
          >
            Hide Details
          </button>
        )}
      </div>
    );
  }
}

export default Event;
