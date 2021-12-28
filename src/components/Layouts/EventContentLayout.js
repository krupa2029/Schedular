import React from "react";
import EventsList from "./EventsList";
import classes from "../Styles/EventContentLayout.module.css";

// Dynamic Layout for Event-Content

export const EventContentLayout = (props) => {
  console.log(props.loadedData);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{props.eventType}</h1>
      </div>
      <div className={classes.content_container}>
        <div className={classes.mapcontainer}>
          <div className={classes.view_control}>
            <button>Calender</button>
            <button>MapView</button>
          </div>
          <div className={classes.view_content}>
            <h3>Map</h3>
          </div>
        </div>

        <div className={classes.event_list}>
          <EventsList loadedData={props.loadedData} eventType={props.eventType} />
        </div>
      </div>
    </div>
  );
};
