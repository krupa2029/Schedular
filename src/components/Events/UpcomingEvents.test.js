import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import UpcomingEvents from './UpcomingEvents';

describe(' "UpcomingEvents" component', () => {
  test('should render content-layout component for UpcomingEvents', () => {
    render(<UpcomingEvents loadedData={mockEventsData} />);

    const contentLayoutElement = screen.findByTestId(
      'upcomingEvents_content_layout'
    );

    expect(contentLayoutElement).toBeInTheDocument;
  });
});
