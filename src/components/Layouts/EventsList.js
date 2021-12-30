import React from "react";
import classes from "../Styles/EventsList.module.css";

// Reusable List Component

const EventsList = (props) => {
    console.log(props.loadedData);
  return (
    <div>
      {/* <h2>{props.eventType} List</h2> */}
      <div className={classes.list_Container}>
        {props.loadedData.map((eventData) => (
          <div className={classes.event_Item} key={eventData.key}>
            <h3>{eventData.title}</h3>
            <p>{eventData.venue}</p>
          <p>{`${eventData.start.toDateString()} - ${eventData.end.toDateString()}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
