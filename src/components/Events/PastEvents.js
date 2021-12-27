import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "pastevents" Button got clicked...

const PastEvents = () => {
  const eventType = "Past Events";
  return (
    <div>
      <EventContentLayout eventType={eventType}/>
      {/* <p>PastEvents</p> */}
    </div>
  );
};

export default PastEvents;
