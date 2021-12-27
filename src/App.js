import React, { useState } from "react";
import Header from "./components/Header/Header";
import UpcomingEvents from "./components/Events/UpcomingEvents";
import PastEvents from "./components/Events/PastEvents";


const App = () => {
  const [currentEventType, setCurrentEventType] = useState("upcoming");
  let content = <UpcomingEvents/>

  const eventTypeHandler = (currentEvent) => {
    setCurrentEventType(currentEvent);
  };

  
  if(currentEventType === 'upcoming'){
    content = <UpcomingEvents/>
  }
  if(currentEventType === 'past'){
    content = <PastEvents/>
  }

  return (
    <div>
      <Header eventType={eventTypeHandler}/>
      <main>{content}</main>
    </div>
  );
};

export default App;