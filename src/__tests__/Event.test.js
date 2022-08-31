import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../components/Event';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test('render event title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render event info', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('event info renders correctly', () => {
    expect(EventWrapper.find('.event-info').text()).toContain(event.location);
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.dateTime
    );
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.timeZone
    );
  });

  test('render show details button', () => {
    expect(EventWrapper.find('.show_details-button')).toHaveLength(1);
  });

  test('render hide details button when description expanded', () => {
    EventWrapper.setState({
      show: true,
    });
    expect(EventWrapper.find('.hide_details-button')).toHaveLength(1);
  });

  test('if not interacted with,event info should be hidden', () => {
    EventWrapper = EventWrapper = shallow(<Event event={event} />);
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('clicking show details button, expand description text', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.show_details-button').simulate('click');
    expect(EventWrapper.state('show')).toEqual(true);
  });

  test('render event description correctly after show button clicked', () => {
    EventWrapper.setState({
      show: true,
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

  test('clicking hide details button, hide description text', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find('.hide_details-button').simulate('click');
    expect(EventWrapper.state('show')).toEqual(false);
  });
});
