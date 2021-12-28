import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "upcomingevents" Button got clicked...

const UpcomingEvents = (props) => {
  const eventType = "Upcoming Events";
  // console.log(props.loadedData);

  const allEvents = props.loadedData;
  const upComingEvents = allEvents.filter(
    (eventData) => Date.now() < eventData.start
  );
  return (
    <div>
      <EventContentLayout loadedData={upComingEvents} eventType={eventType} />
    </div>
  );
};

export default UpcomingEvents;
