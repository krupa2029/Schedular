import React from 'react'
import EventsList from './EventsList'

// Dynamic Layout for Event-Content

export const EventContentLayout = (props) => {
    return (
        <div>
            <h1>{props.eventType}</h1>
            <EventsList eventType={props.eventType}/>
        </div>
    )
}
