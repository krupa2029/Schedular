import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import { EventContentLayout } from './EventContentLayout';

describe(' "EventContentLayout" component', () => {
  test('should render type of event', () => {
    render(<EventContentLayout loadedData={mockEventsData} />);
    const eventTypeElement = screen.findByTestId('event_type');
    expect(eventTypeElement).toBeInTheDocument;
  });

  test('should render event view-control buttons', () => {
    render(<EventContentLayout loadedData={mockEventsData} />);
    const viewControlButtons = screen.findAllByTestId('view_control_button');
    expect(viewControlButtons).toBeInTheDocument;
  });

  test('should render event view-content', () => {
    render(<EventContentLayout loadedData={mockEventsData} />);
    const eventViewContent = screen.findByTestId('view_content');
    expect(eventViewContent).toBeInTheDocument;
  });

  test('Should Display "Map" when "Map View" button got clicked', () => {
    const { findByTestId, getByTestId } = render(
      <EventContentLayout loadedData={mockEventsData} />
    );
    fireEvent.click(getByTestId('map_control_button'));
    expect(findByTestId('mapView_content')).toBeVisible;
  });

  test('Should Display "Calendar" when "Calendar View" button got clicked', () => {
    const { findByTestId, getByTestId } = render(
      <EventContentLayout loadedData={mockEventsData} />
    );
    fireEvent.click(getByTestId('calendar_control_button'));
    expect(findByTestId('calendarView_content')).toBeVisible;
  });
});
