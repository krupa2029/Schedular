import React, { useState } from "react";
import classes from "../Styles/Header.module.css";

const Header = (props) => {
  const [humburgerIsActive, setHumburgerIsActive] = useState(false);
  const humburgerHandler = () => {
    if (humburgerIsActive) {
      setHumburgerIsActive(false);
    } else {
      setHumburgerIsActive(true);
    }
  };
  const pastEventHandler = () => {
    setHumburgerIsActive(false);
    props.eventType("past");
  };
  const upcommingEventHandler = () => {
    setHumburgerIsActive(false);
    props.eventType("upcoming");
  };
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.nav_logo}>
          <h1>WordCamp</h1>
        </div>

        <ul className={`${classes.nav_menu} ${humburgerIsActive ? `${classes.active}` : ""}`}>
          <li className={classes.nav_item}>
            <a className={classes.nav_link} onClick={pastEventHandler}>
              Past Event
            </a>
          </li>
          <li className={classes.nav_item}>
            <a className={classes.nav_link} onClick={upcommingEventHandler}>
              Upcoming Event
            </a>
          </li>
        </ul>
        <div
          className={`${classes.hamburger} ${humburgerIsActive ? `${classes.active}` : ""}`}
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
