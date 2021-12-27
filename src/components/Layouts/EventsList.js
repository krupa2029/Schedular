import React from 'react';
import classes from '../Styles/EventsList.module.css';

// Reusable List Component

const EventsList=(props)=> {
    return (
        <div>
            <h2>{props.eventType} List</h2>
            <div className={classes.list_Container}>
            <div className={classes.event_Item}>
                <h3>Event-Title</h3>
                <p>Vanue</p>
                <p>Start-End Date</p>
            </div>
            <div className={classes.event_Item}>
                <h3>Event-Title</h3>
                <p>Vanue</p>
                <p>Start-End Date</p>
            </div>
            </div>
        </div>
    )
}

export default EventsList;
