import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import UpcomingEvents from './components/Events/UpcomingEvents';
import PastEvents from './components/Events/PastEvents';
import { getEventsData } from './lib/api';
import useHttp from './hooks/use-http';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [currentEventType, setCurrentEventType] = useState('past');

  // Sending http request to the api using useHttp hook...

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
      // cancel the api subscription
      isApiSubscribed = false;
    };
  }, [sendRequest]);

  let content;

  // display LoadingSpinner component when request status is 'pending'...

  if (status === 'pending') {
    return (content = (
      <div className="centered" data-testid="loading_spinner">
        <LoadingSpinner />
      </div>
    ));
  }

  // display error message if request fails and get error...

  if (error) {
    return (content = (
      <p className="centered" data-testid="error">
        {error}
      </p>
    ));
  }

  // display ' No data Found!' when request status is 'completed' but loadedData is null...

  if (status === 'completed' && !loadedData) {
    return (content = (
      <p className="centered" data-testid="no_data">
        No data Found!
      </p>
    ));
  }

  // when request status is 'completed' and loadedData is not null...

  if (status === 'completed' && loadedData.length) {
    if (currentEventType === 'upcoming') {
      content = (
        <div data-testid="upcomingEvent_component">
          {' '}
          <UpcomingEvents loadedData={loadedData} />
        </div>
      );
    }
    if (currentEventType === 'past') {
      content = (
        <div data-testid="pastEvent_component">
          {' '}
          <PastEvents loadedData={loadedData} />
        </div>
      );
    }
  }

  // Handle Current Event Type...
  
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
