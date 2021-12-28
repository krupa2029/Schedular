import React from "react";
import { EventContentLayout } from "../Layouts/EventContentLayout";

//Component will be rendered when "pastevents" Button got clicked...

const PastEvents = (props) => {
  console.log(props.loadedData);
  
  const eventType = "Past Events";
  return (
    <div>
      <EventContentLayout loadedData={props.loadedData} eventType={eventType}/>
      {/* <p>PastEvents</p> */}
    </div>
  );
};

export default PastEvents;
