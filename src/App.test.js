import React from 'react';
import { mockEvents } from '../__mocks__/fetchdataMock';
import App from './App';
import Functions from './lib/api.js';
import { render, fireEvent } from '@testing-library/react';
import Header from './components/Header/Header';

let spyFetchPlugins;

beforeAll(() => {
  spyFetchPlugins = jest
    .spyOn(Functions, 'getEventsData')
    .mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve({ data: mockEvents }),
      };
      return Promise.resolve(fetchResponse);
    });
});

describe('App Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should Display "Upcoming Events" and hide "Past Events" when "Upcoming Event" button got clicked', () => {
    spyFetchPlugins().then(() => {
      const { findByTestId, getByTestId } = render(
        <App>
          <Header />
        </App>
      );
      fireEvent.click(getByTestId('upcoming'));
      expect(findByTestId('upcomingEvent_component')).toBeVisible;
      expect(findByTestId('pastEvent_component')).toBeDisabled;
    });
  });

  test('Should Display "Past Events" and hide "Upcoming Events" when "Past Event" button got clicked', () => {
    spyFetchPlugins().then(() => {
      const { findByTestId, getByTestId } = render(
        <App>
          <Header />
        </App>
      );
      fireEvent.click(getByTestId('past'));
      expect(findByTestId('pastEvent_component')).toBeVisible;
      expect(findByTestId('upcomingEvent_component')).toBeDisabled;
    });
  });
});
