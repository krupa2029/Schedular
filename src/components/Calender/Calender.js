import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment Object
// to the correct localizer

const localizer = momentLocalizer(moment);

const CalendarView = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.eventsData}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 425,
          backgroundColor: "white",
          color: "black",
          padding: "1rem",
        }}
      />
    </div>
  );
};

export default CalendarView;
