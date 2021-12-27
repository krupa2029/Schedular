import React from "react";

const Header = (props) => {
  const pastEventHandler=()=>{
    props.eventType("past");
  }
  const upcommingEventHandler=()=>{
    props.eventType("upcoming");
  }
  return (
    <header>
      <div>
        <h1>WordCamp</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={pastEventHandler}>Past Event</button>
          </li>
          <li>
            <button onClick={upcommingEventHandler}>Upcoming Event</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
