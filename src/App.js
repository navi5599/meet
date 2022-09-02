import React, { Component } from 'react';
import { getEvents, extractLocations } from './api';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './nprogress.css';
import './App.css';

class App extends Component {
  state = {
    events: [],
    allEvents: [],
    locations: [],
    numberOfEvents: 10,
    errorText: '',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          allEvents: events,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else this.setState({ numberOfEvents: eventCount });

    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      const filteredEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: filteredEvents,
        // numberOfEvents: eventCount,
        currentLocation: location,
      });
    });
  };

  handleInputChanged = (e) => {
    let newCount = e.target.value;
    const allEvents = this.state.allEvents;
    const { currentLocation } = this.state;
    const locationEvents =
      currentLocation === 'all'
        ? allEvents
        : allEvents.filter((event) => event.location === currentLocation);
    if (newCount > 32 || newCount <= 0) {
      this.setState({
        numberOfEvents: newCount,
        events: locationEvents.slice(0, newCount),
        errorText: 'Please choose a number between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: newCount,
        events: locationEvents.slice(0, newCount),
        errorText: ' ',
      });
    }
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
          handleInputChanged={this.handleInputChanged}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
