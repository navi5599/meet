import Event from './Event';
import React, { Component } from 'react';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul className="EventList">
        {events.map((event) => (
          <li className="list_item" key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
