import React, { Component } from 'react';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import WelcomeScreen from './components/WelcomeScreen';
import { WarningAlert } from './Alert';
import './nprogress.css';
import './App.css';

class App extends Component {
  state = {
    events: [],
    allEvents: [],
    locations: [],
    numberOfEvents: 12,
    currentLocation: 'all',
    errorText: '',
    offlineText: '',
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            allEvents: events,
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineText: "Your're viewing app offline! Data my not be up to date.",
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
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

  handleInputChanged = (event) => {
    let newCount = event.target.value;
    if (isNaN(newCount)) {
      return '';
    } else {
      parseInt(newCount);
    }
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
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <WarningAlert text={this.state.offlineText} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
          handleInputChanged={this.handleInputChanged}
          errorText={this.state.errorText}
        />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <EventList events={events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
