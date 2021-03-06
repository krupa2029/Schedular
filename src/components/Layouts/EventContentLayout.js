import React, { useState } from 'react';
import EventsList from './EventsList';
import classes from './EventContentLayout.module.css';
import MapView from '../Map/MapView';
import CalendarView from '../Calendar/CalendarView';

// Dynamic Layout for Event-Content

export const EventContentLayout = (props) => {
  const [eventView, setEventView] = useState('Map');

  // Handle click event on 'Map View' button...
  const mapViewHandler = () => {
    setEventView('Map');
  };

  // Handle click event on 'Calendar View' button...
  const calendarViewHandler = () => {
    setEventView('calendar');
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p data-testid="event_type">{props.eventType}</p>
      </div>

      <div className={classes.content_container}>
        <div className={classes.view_container}>
          <div
            className={classes.view_control}
            data-testid="view_control_button"
          >
            <button
              data-testid="map_control_button"
              className={`btn ${eventView === 'Map' ? 'btn-active' : ''}`}
              onClick={mapViewHandler}
            >
              Map View
            </button>
            <button
              data-testid="calendar_control_button"
              className={`btn ${eventView === 'calendar' ? 'btn-active' : ''}`}
              onClick={calendarViewHandler}
            >
              Calendar View
            </button>
          </div>

          <div className={classes.view_content} data-testid="view_content">
            {eventView === 'Map' ? (
              <div data-testid="mapView_content">
                <MapView eventsData={props.loadedData} />
              </div>
            ) : (
              <div data-testid="calendarView_content">
                <CalendarView eventsData={props.loadedData} />
              </div>
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
