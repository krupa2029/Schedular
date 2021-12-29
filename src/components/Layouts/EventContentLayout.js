import React, { useState } from "react";
import EventsList from "./EventsList";
import classes from "../Styles/EventContentLayout.module.css";
import MapView from "../Map/MapView";

// Dynamic Layout for Event-Content

export const EventContentLayout = (props) => {
  const [eventView, setEventView] = useState("Map");
  // let eventView = <MapView />;

  const mapViewHandler = () => {
    setEventView("Map");
  };

  const calenderViewHandler = () => {
    setEventView("calender");
  };
  console.log(eventView);
  // console.log(props.loadedData);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{props.eventType}</h1>
      </div>
      <div className={classes.content_container}>
        <div className={classes.viewcontainer}>
          <div className={classes.view_control}>
          <button onClick={calenderViewHandler}>Calender</button>
            <button onClick={mapViewHandler}>MapView</button>
          </div>
          <div className={classes.view_content}>
            {eventView === "Map" ? <MapView /> : `Calender`}
          </div>
        </div>

        <div className={classes.event_list}>
          <EventsList
            loadedData={props.loadedData}
            eventType={props.eventType}
          />
        </div>
      </div>
    </div>
  );
};
