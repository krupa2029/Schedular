import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import CalendarView from './CalendarView';

describe(' "CalendarView" component', () => {
  test('should render Calendar container element', () => {
    render(<CalendarView eventsData={mockEventsData} />);

    const calendarContainerElement = screen.findByTestId('calendar_container');

    expect(calendarContainerElement ).toBeInTheDocument;
  });
});
