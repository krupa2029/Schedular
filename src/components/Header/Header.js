import React, { useState } from 'react';
import classes from './Header.module.css';

// Main Header Component

const Header = (props) => {
  const [humburgerIsActive, setHumburgerIsActive] = useState(false);
  const [currentEventType, setCurrentEventType] = useState('past');

  // Handle humburger visibility
  const humburgerHandler = () => {
    if (humburgerIsActive) {
      setHumburgerIsActive(false);
    } else {
      setHumburgerIsActive(true);
    }
  };

  // Handle click event on "Past Event" link
  const pastEventHandler = () => {
    setCurrentEventType('past');
    setHumburgerIsActive(false);
    props.eventType('past');
  };

  // Handle click event on "Upcoming Event" link 
  const upcommingEventHandler = () => {
    setCurrentEventType('upcoming');
    setHumburgerIsActive(false);
    props.eventType('upcoming');
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.nav_logo}>
          <h1>WordCamp</h1>
        </div>

        <ul
          className={`${classes.nav_menu} ${
            humburgerIsActive ? `${classes.active}` : ''
          }`}
        >
          <li className={classes.nav_item}>
            <a
              data-testid= 'past'
              className={`${classes.nav_link} ${
                currentEventType === 'past' ? 'btn-active' : ''
              }`}
              onClick={pastEventHandler}
            >
              Past Event
            </a>
          </li>
          <li className={classes.nav_item}>
            <a
              data-testid = 'upcoming'
              className={`${classes.nav_link} ${
                currentEventType === 'upcoming' ? 'btn-active' : ''
              }`}
              onClick={upcommingEventHandler}
            >
              Upcoming Event
            </a>
          </li>
        </ul>

        <div
          className={`${classes.hamburger} ${
            humburgerIsActive ? `${classes.active}` : ''
          }`}
          onClick={humburgerHandler}
        >
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
