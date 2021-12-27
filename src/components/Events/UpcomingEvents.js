import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "upcomingevents" Button got clicked... 

const UpcomingEvents = () => {
  const eventType = "Upcoming Events";
  return (
    <div>
      {/* <p>UpcomingEvents</p> */}
      <EventContentLayout eventType={eventType}/>
    </div>
  );
};

export default UpcomingEvents;
