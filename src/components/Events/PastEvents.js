import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "pastevents" Button got clicked...

const PastEvents = (props) => {
  // console.log(props.loadedData);
  const eventType = "Past WordCamps";
  const allEvents = props.loadedData;
  const pastEvents = allEvents.filter(
    (eventData) => Date.now() > eventData.end
  );
  return (
    <div>
      <EventContentLayout loadedData={pastEvents} eventType={eventType} />
    </div>
  );
};

export default PastEvents;
