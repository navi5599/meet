import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('User opened App', () => {
      AppWrapper = mount(<App />);
    });

    when('User did not specify the number', () => {});

    then(/^default amount of events will be (\d+).$/, (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.state('events')).toHaveLength(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('User opened App,', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    });

    when('User type in the number of events he want to see .', () => {
      const eventObject = { target: { value: 12 } };
      NumberOfEventsWrapper.find('.number_input').simulate(
        'change',
        eventObject
      );
    });

    then('User will get as much events as he searched for.', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toBe(12);
      expect(AppWrapper.find('.EventList li')).toHaveLength(12);
    });
  });
});
