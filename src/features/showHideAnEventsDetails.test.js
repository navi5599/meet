import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../components/CitySearch';
import Event from '../components/Event';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('User has opened app', () => {});

    when('the user views the featured city', () => {});

    then(
      'the current events from that city will be collapsed/hidden from the user',
      () => {}
    );
  });

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    given(
      'User searched for City,and now has option to see details for an specific event',
      () => {}
    );

    when('User clicks on expand button', () => {});

    then(
      'User will be able to see all the details for that specific event',
      () => {}
    );
  });

  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    given('User expanded event view', () => {});

    when('User clicks to close the event', () => {});

    then('Details will be hidden', () => {});
  });
});
