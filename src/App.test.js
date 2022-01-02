import React from 'react';
import { mockEvents } from '../__mocks__/fetchdataMock';
import App from './App';
import Functions from './lib/api.js';
import { render } from '@testing-library/react';
import UpcomingEvents from './components/Events/UpcomingEvents';

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
  spyFetchPlugins.mockRestore();
});

describe('App Component', () => {
  it('should render "UpcomingEvents" component if data is fetched sucessfully ', () => {
    const { findByTestId } = render(<App />);

    findByTestId('loadedevents');
  });
});
