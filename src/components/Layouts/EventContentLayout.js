import React, { useState } from 'react';
import EventsList from './EventsList';
import classes from './EventContentLayout.module.css';
import MapView from '../Map/MapView';
import CalendarView from '../Calender/Calender';

// Dynamic Layout for Event-Content

export const EventContentLayout = (props) => {
  const [eventView, setEventView] = useState('Map');

  const mapViewHandler = () => {
    setEventView('Map');
  };

  const calenderViewHandler = () => {
    setEventView('calender');
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p data-testid="event_type">{props.eventType}</p>
      </div>

      <div className={classes.content_container}>
        <div className={classes.view_container}>
          <div className={classes.view_control}>
            <button
              data-testid="view_control_button"
              className={`btn ${eventView === 'Map' ? 'btn-active' : ''}`}
              onClick={mapViewHandler}
            >
              Map View
            </button>
            <button
              data-testid="view_control_button"
              className={`btn ${eventView === 'calender' ? 'btn-active' : ''}`}
              onClick={calenderViewHandler}
            >
              Calender View
            </button>
          </div>

          <div className={classes.view_content} data-testid="view_content">
            {eventView === 'Map' ? (
              <MapView eventsData={props.loadedData} />
            ) : (
              <CalendarView eventsData={props.loadedData} />
            )}
          </div>
        </div>

        <div className={classes.event_list} data-testid="events_list">
          <EventsList
            loadedData={props.loadedData}
            eventType={props.eventType}
          />
        </div>
      </div>
    </div>
  );
};
