import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import UpcomingEvents from "./components/Events/UpcomingEvents";
import PastEvents from "./components/Events/PastEvents";
import { getEventsData } from "./lib/api";
import useHttp from "./hooks/use-http";

const App = () => {
  const [currentEventType, setCurrentEventType] = useState("past");

  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getEventsData, true);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      sendRequest();
    }
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, [sendRequest]);

  let content;

  if (error) {
    return (content = <p>{error}</p>);
  }
  if (status === "completed" && loadedData && loadedData !== null) {
    console.log(loadedData);

    if (currentEventType === "upcoming") {
      content = <UpcomingEvents loadedData={loadedData} />;
    }
    if (currentEventType === "past") {
      content = <PastEvents loadedData={loadedData} />;
    }
  }

  const eventTypeHandler = (currentEvent) => {
    setCurrentEventType(currentEvent);
  };

  return (
    <div>
      <Header eventType={eventTypeHandler} />
      <main>{content}</main>
    </div>
  );
};

export default App;
