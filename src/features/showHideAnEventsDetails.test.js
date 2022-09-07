import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('User has opened app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the featured city', () => {});

    then(
      'the current events from that city will be collapsed/hidden from the user',
      () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event-card .event-description')).toHaveLength(
          0
        );
      }
    );
  });

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      'User searched for City,and now has option to see details for an specific event',
      () => {
        AppWrapper = mount(<App />);
      }
    );

    when('User clicks on expand button', () => {
      AppWrapper.update();
      AppWrapper.find('.show_details-button').at(0).simulate('click');
    });

    then(
      'User will be able to see all the details for that specific event',
      () => {
        expect(AppWrapper.find('.event-description')).toHaveLength(1);
      }
    );
  });

  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('User expanded event view', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.show_details-button').at(0).simulate('click');
      expect(AppWrapper.find('.event-description')).toHaveLength(1);
    });

    when('User clicks to close the event', () => {
      AppWrapper.update();
      AppWrapper.find('.hide_details-button').at(0).simulate('click');
    });

    then('Details will be hidden', () => {
      expect(AppWrapper.find('.event-description')).toHaveLength(0);
    });
  });
});
