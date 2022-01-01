import React from 'react';
import classes from './EventsList.module.css';

// Reusable List Component

const EventsList = (props) => {
  let listItem = <h2>No Events Found!!</h2>;

  if (props.loadedData !== null) {
    listItem = props.loadedData.map((eventData) => (
      <div className={classes.event_Item} key={eventData.key}>
        <div>
          <h3>{eventData.title}</h3>
          <p>{eventData.venue}</p>
          <p>{`${eventData.startEventDate.toDateString()} - ${eventData.endEventDate.toDateString()}`}</p>
        </div>
        <div className={classes.link}>
          <a
            className="btn"
            href={`${eventData.link}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit Site
          </a>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className={classes.list_Container}>{listItem}</div>
    </div>
  );
};

export default EventsList;
