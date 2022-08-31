import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number_input')).toHaveLength(1);
  });

  test('default number of events in input 32', () => {
    let NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number_input').prop('value')).toBe(32);
  });

  test('change state according to typed input', () => {
    NumberOfEventsWrapper.setState({
      eventNumber: '32',
    });
    const eventObject = { target: { value: 31 } };
    NumberOfEventsWrapper.find('.number_input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(31);
  });
});
