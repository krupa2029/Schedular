import React from 'react';
import { EventContentLayout } from '../Layouts/EventContentLayout';

//Component will be rendered when "upcomingevents" Button got clicked...

const UpcomingEvents = (props) => {
  const eventType = 'Upcoming WordCamps';

  const allEvents = props.loadedData;
  const upComingEvents = allEvents.filter(
    (eventData) => Date.now() < eventData.startEventDate
  );
  return (
    <div>
      <EventContentLayout loadedData={upComingEvents} eventType={eventType} />
    </div>
  );
};

export default UpcomingEvents;
