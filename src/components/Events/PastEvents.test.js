import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import PastEvents from './PastEvents';

describe(' "PastEvents" component', () => {
  test('should render content-layout component for PastEvents', () => {
    render(<PastEvents loadedData={mockEventsData} />);

    const contentLayoutElement = screen.findByTestId(
      'pastEvents_content_layout'
    );

    expect(contentLayoutElement).toBeInTheDocument;
  });
});
