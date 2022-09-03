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
});
