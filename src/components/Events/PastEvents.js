import React from 'react';
import { EventContentLayout } from '../Layouts/EventContentLayout';

//Component will be rendered when "pastevents" Button got clicked...

const PastEvents = (props) => {
  const eventType = 'Past WordCamps';
  const allEvents = props.loadedData;
  const pastEvents = allEvents.filter(
    (eventData) => Date.now() > eventData.endEventDate
  );
  
  return (
    <div>
      <EventContentLayout loadedData={pastEvents} eventType={eventType} />
    </div>
  );
};

export default PastEvents;
