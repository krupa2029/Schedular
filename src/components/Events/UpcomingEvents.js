import React from 'react';
import { EventContentLayout } from '../Layouts/EventContentLayout';

//Component will be rendered when "upcomingevents" Button got clicked...

const UpcomingEvents = (props) => {
  const eventType = 'Upcoming WordCamps';

  const allEvents = props.loadedData;
  const upComingEvents = allEvents.filter(
    (eventData) => Date.now() < eventData.startEventDate
  );

  // Return Content Layout with upcoming events data

  return (
    <div data-testid="upcomingEvents_content_layout">
      <EventContentLayout loadedData={upComingEvents} eventType={eventType} />
    </div>
  );
};

export default UpcomingEvents;
