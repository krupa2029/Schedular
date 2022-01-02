import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import MapView from './MapView';

describe(' "MapView" component', () => {
  test('should render Map container element', () => {
    render(<MapView eventsData={mockEventsData} />);

    const mapContainerElement = screen.findByTestId('map_container');

    expect(mapContainerElement).toBeInTheDocument;
  });
});
