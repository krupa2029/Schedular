import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "upcomingevents" Button got clicked... 

const UpcomingEvents = (props) => {
  const eventType = "Upcoming Events";
  console.log(props.loadedData);
  return (
    <div>
      {/* <p>UpcomingEvents</p> */}
      <EventContentLayout loadedData={props.loadedData} eventType={eventType}/>
    </div>
  );
};

export default UpcomingEvents;
